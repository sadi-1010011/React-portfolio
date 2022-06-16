import React, { useState } from 'react';
import gitIcon from '../../img/githubLogoWhite.png';
import downloadIcon from '../../img/download.png';
import './Header.css';

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggler = document.getElementById('navToggler');

    function handleNavToggle() {
        setIsNavOpen(!isNavOpen);
        if(isNavOpen) {
            toggler.style.backgroundColor = 'aquamarine';
            // toggler.style.transform = 'rotate(180deg)';
            toggler.textContent = '</>';
        } else {
            toggler.style.backgroundColor = 'yellowgreen';
            toggler.style.transform = 'rotate(0deg)';
            toggler.textContent = '<';
        }
    }

    return (
        <div className='header'>
            <div className='responsive-header'>
                <div className='header-title'>
                    <h1 id='title'>sadi.</h1>
                </div>
                <div className='header-options'>
                    <a href='https://github.com/sadi-1010011'>
                        <span className='header-gitIcon'>
                            <img src={gitIcon} alt='github' />
                        </span>
                    </a>

                    {   
                        isNavOpen &&
                        (<ul className='header-items-wrapper'>
                            <li className='header-item'><span>projects</span></li>
                            <li className='header-item'><span>CV</span><img id='' src={downloadIcon} alt='downloadIcon' /></li>
                            {/* <li className='header-item'><span>contact</span></li> */}
                        </ul>)
                    }

                <span className='header-options-toggler' id='navToggler' onClick={ handleNavToggle }>{ `</>` }</span>
                </div>
            </div>
        </div>
    );
}