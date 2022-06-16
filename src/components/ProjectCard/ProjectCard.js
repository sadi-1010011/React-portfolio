import React from "react";
import './ProjectCard.css';

import icon from '../../img/downloadIcon.png';

export default function ProjectCard({ title, description }) {
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