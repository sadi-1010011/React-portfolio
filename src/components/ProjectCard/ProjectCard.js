import React from "react";
import './ProjectCard.css';

export default function ProjectCard({ title, description, icon }) {
    return (
        <div className='projectCard'>
            <div className="project-info-wrapper">
            <img className="project-thumbnail" src={icon} alt='project image' />
                <h5 className="project-title">{ title }</h5>
                <span className="project-description">
                    { description }
                </span>
            </div>
        </div>
    );
}