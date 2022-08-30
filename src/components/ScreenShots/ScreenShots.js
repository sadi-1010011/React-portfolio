import React, { useEffect, useRef } from "react";
// import ActionBtn from "../ActionBtn";
import './ScreenShots.css';

import ss1 from '../../img/screenshots/design1.png';
import ss2 from '../../img/screenshots/design2.png';
import ss3 from '../../img/screenshots/design3.png';
import ss4 from '../../img/screenshots/design4.png';

export default function ScreenShots() {

    const ss = [ss1, ss2, ss3, ss4];
    const screenshot = useRef(null);

    useEffect(() => {
        // carousal items n timing
        window.clearInterval(); // if any exist
        window.setInterval(function() {
            // carousal setup
            const currentItem = screenshot.current;
            currentItem.src = ss[Math.floor(Math.random() * ss.length)];
            currentItem.style.padding = '5px'; // little animated
            setTimeout(function() {currentItem.style.padding = '0';}, 500);
        }, 2200);
    },[]);

    return (
        <section className="container screenshot-section">
            <div className="row p-3 pb-5">
                <h3 className="uidesigns-title">UI designs</h3>
                <h6 className="uidesigns-description">some UI designs I have done in past 2 years </h6>
                <div className="col min-height-30">
                    <div className="screenshot-wrapper">
                        <img ref={screenshot} className="screenshot" src={ss1} alt="design1" />
                    </div>
                </div>
                {/* <div className="col-12 pt-5">
                    <ActionBtn color='black' textcolor='white'>View All</ActionBtn>
                </div> */}
            </div>
        </section>
    );
}