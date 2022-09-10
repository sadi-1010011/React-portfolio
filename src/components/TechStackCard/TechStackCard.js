import React from "react";
import './TechStackCard.css';

export default function TechStackCard({ logo, title, link }) {
    return (
        <div className="techstackcard-container">
            <div className="techstack-card">
                <a href={link} style={{ 'color': 'inherit' }}>
                    <img className="tech-logo" src={ logo } alt="logo" />
                    <span className="tech-title">{ title }</span>
                </a>
            </div>
        </div>
    );
}