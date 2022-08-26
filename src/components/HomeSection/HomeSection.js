import React from "react";
import './HomeSection.css';
import avatar from '../../img/avatar.jpg';

export default function HomeSection() {
    return (
        <section className="container homesection">
            <div className="row pt-5 pb-3">
                <div className="col-5">
                    <div className="mypic-wrapper">
                        <img id="mypic" src={avatar} alt="avatar" />
                    </div>
                </div>
                <div className="col-7">
                    <div className="aboutme">
                        <div className="full-width">
                            <h1 className="no-margin d-inline hello-msg">Hello</h1>
                            <span className="aboutme-emoji animatedHello">🙌</span>
                        </div>
                        <span>I'm <h1 id="myname">Sadi.</h1></span>
                        <div className="developer-designer-container">
                            <div className="typewriter-effect">React developer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <h4 className="my-description">
                    I like to create intuitive interfaces and useful tools,<br/>
                    simplicity is key to success.<br/><br/>
                </h4>
            </div>
        </section>
    );
}