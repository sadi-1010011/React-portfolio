import React from "react";
import './ActionBtn.css';

const ActionBtn = ({ children, color = '#394827', textcolor='#fff' }) => {
    return (
        <button className="actionBtn" style={{ backgroundColor: color, color: textcolor }}>{ children }</button>
    );
}

export default ActionBtn;