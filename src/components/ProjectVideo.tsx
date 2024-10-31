import React from 'react';

interface ProjectVideoProps {
    videoSrc: string;
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({ videoSrc }) => {
    return (
        <div className="flex justify-center items-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="h-100 mb-4 rounded-lg lg:mb-0 lg:flex"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ProjectVideo; 