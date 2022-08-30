import React from "react";
import './TechStackCard.css';

export default function TechStackCard({ logo, title }) {
    return (
        <div className="techstackcard-container">
            <div className="techstack-card">
                <img className="tech-logo" src={ logo } alt="logo" />
                <span className="tech-title">{ title }</span>
            </div>
        </div>
    );
}