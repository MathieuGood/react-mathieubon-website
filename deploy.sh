#!/bin/bash

# Variables

TAR_FILE="mathieubon-site.tar"
REMOTE_DIR="/tmp"
DOCKER_IMAGE="mathieubon-site"
REMOTE_CONTAINER_NAME="mathieubon-container"
REMOTE_USER="ubuntu"  # Replace with your VPS username
REMOTE_HOST="51.91.98.35"     # Replace with your VPS IP address

# Step 1: Build the React app
npm run build

# Step 2: Build the Docker image

docker build --platform linux/amd64 -t $DOCKER_IMAGE .   

# Step 3: Save the Docker image as a tar file
docker save -o mathieubon-site.tar mathieubon-site   
docker save $DOCKER_IMAGE -o $TAR_FILE

# Step 4: Transfer the tar file to the VPS
scp $TAR_FILE $REMOTE_USER@$REMOTE_HOST:/home/$REMOTE_USER/docker_images

# Step 5: SSH into the VPS and perform the following steps
ssh $REMOTE_USER@$REMOTE_HOST <<EOF
  # Pass variables explicitly into SSH session
  export TAR_FILE=$TAR_FILE
  export REMOTE_DIR=$REMOTE_DIR
  export DOCKER_IMAGE=$DOCKER_IMAGE
  export REMOTE_CONTAINER_NAME=$REMOTE_CONTAINER_NAME
  
  # Stop and remove the existing container
  docker stop \$REMOTE_CONTAINER_NAME || true
  docker rm \$REMOTE_CONTAINER_NAME || true

  # Remove the existing image if exists
  docker rmi \$DOCKER_IMAGE || true

  # Load the Docker image from the tar file
  docker load -i \$REMOTE_DIR/\$TAR_FILE

  # Run the Docker container from the image
  docker run -d --name \$REMOTE_CONTAINER_NAME -p 80:80 -p 9000:80 \$DOCKER_IMAGE

  # Clean up: Remove the tar file after deployment
  rm \$REMOTE_DIR/\$TAR_FILE
EOF


echo "Deployment completed successfully!"
