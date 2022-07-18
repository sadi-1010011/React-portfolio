import React from 'react';
import './TitleBar.css';

export default function TitleBar({ children }) {
    return (
        <div className='titlebar-wrapper'>
            <h3 className='titlebar-title'>{ children }</h3>
        </div>
    );
}