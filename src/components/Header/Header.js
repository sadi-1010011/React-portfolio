import React, { useState } from 'react';
import gitIcon from '../../img/githubLogoWhite.png';
import downloadIcon from '../../img/download.png';
import CV from './Muhammed_Sadiq_Resume.pdf';
import './Header.css';

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggler = document.getElementById('navToggler');

    function handleNavToggle() {
        setIsNavOpen(!isNavOpen);
        if(isNavOpen) {
            // toggler.style.transform = 'rotate(180deg)';
            toggler.style.backgroundColor = 'aquamarine';
            toggler.textContent = '</>';
        } else {
            // toggler.style.transform = 'rotate(0deg)';
            toggler.style.backgroundColor = 'yellowgreen';
            toggler.textContent = '<';
        }
    }

    function downloadCV() {
        // download CV 
        const pom = document.createElement('a');
        pom.setAttribute('href', CV);
        pom.setAttribute('download',CV);
        pom.style.display = 'none';
        document.body.appendChild(pom);
        pom.click();
        document.body.removeChild(pom);        
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
                            <li className='header-item'>
                                <a style={{ 'color': 'white', 'fontWeight': 'bold' }} href='https://api.whatsapp.com/send?phone=918593022512'>
                                    <span>contact</span>
                                </a>
                            </li>
                            <li onClick={ downloadCV } className='header-item'><span style={{ 'fontWeight': 'bold' }}>CV</span><img id='' src={downloadIcon} alt='downloadIcon' /></li>
                            {/* <li className='header-item'><span>contact</span></li> */}
                        </ul>)
                    }

                <span className='header-options-toggler' id='navToggler' onClick={ handleNavToggle }>{ `</>` }</span>
                </div>
            </div>
        </div>
    );
}