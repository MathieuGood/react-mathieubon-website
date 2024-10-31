import React from 'react';

interface TechSkillProps {
    src: string;
    alt: string;
    title: string;
    description: string;
}

const TechSkill: React.FC<TechSkillProps> = ({ src, alt, title, description }) => {
    return (
        <div>
            <img src={src} className="w-10 h-10 mb-2" alt={alt} />
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <p className="font-light text-gray-500">{description}</p>
        </div>
    );
};

export default TechSkill; 