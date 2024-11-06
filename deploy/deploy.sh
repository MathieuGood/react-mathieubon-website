# #!/bin/bash

source ./credentials.sh

cd ..

npm run build

docker build --platform linux/amd64 -t $DOCKER_IMAGE .
docker save $DOCKER_IMAGE -o $TAR_FILE

scp $TAR_FILE $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

rm $TAR_FILE

Step 5: SSH into the VPS and perform the following steps
ssh $REMOTE_USER@$REMOTE_HOST <<EOF

  export TAR_FILE=$TAR_FILE
  export REMOTE_DIR=$REMOTE_DIR
  export DOCKER_IMAGE=$DOCKER_IMAGE
  export REMOTE_CONTAINER_NAME=$REMOTE_CONTAINER_NAME
  
  echo "Checking if Docker is running..."
  if ! systemctl is-active --quiet docker; then
    echo "Docker is not running. Starting Docker..."
    sudo systemctl start docker
  fi
  
  echo "Removing the existing Docker image..."
  docker rmi -f \$DOCKER_IMAGE || true

  echo "Checking if port 9000 is in use by any container..."
  CONTAINER_ID=$(docker ps -q -f "publish=9000")
  if [ -n "\$CONTAINER_ID" ]; then
    echo "Stopping the container using port 9000..."
    docker kill \$CONTAINER_ID || { echo "Failed to kill the container using port 9000"; }
    docker rm \$CONTAINER_ID || { echo "Failed to remove the container using port 9000";  }
  fi

  echo "Checking if port 9000 is still in use by a non-Docker process..."
  if lsof -i :9000; then
    echo "Port 9000 is still in use by another process. Stopping the process..."
    kill -9 $(lsof -t -i :9000)
  fi

  echo "Killing the existing container..."
  docker kill \$REMOTE_CONTAINER_NAME || { echo "Failed to stop container"; }

  
  echo "Removing the existing container..."
  docker rm -f \$REMOTE_CONTAINER_NAME || { echo "Failed to remove container"; }
  
  echo "Cleaning up unused Docker networks..."
  docker network prune -f || { echo "Failed to prune Docker networks"; }

  
  echo "Loading the Docker image..."
  docker load -i \$REMOTE_DIR/\$TAR_FILE || { echo "Failed to load Docker image"; }
  
  echo "Running the Docker container..."
  docker run -d --name \$REMOTE_CONTAINER_NAME -p 9000:80 \$DOCKER_IMAGE

  docker ps

  if docker ps -q -f name=\$REMOTE_CONTAINER_NAME; then
    echo "Container \$REMOTE_CONTAINER_NAME is running successfully."
  else
    echo "Failed to start the container \$REMOTE_CONTAINER_NAME."
  fi

  rm \$REMOTE_DIR/\$TAR_FILE
EOF

echo "Deployment completed successfully!"
