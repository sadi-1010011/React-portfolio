import React from "react";
import './TechStack.css';
import TechStackCard from "../TechStackCard/TechStackCard";
import techStackData from '../../data/TechStackData'; // DATA
// import ActionBtn from '../../components/ActionBtn';

export default function TechStack() {

    return (
        <section className='container'>
            <div className='row p-5'>
                <div className='col-12 text-center'>
                    <h3 className="title-techstack">Tech Stacks</h3>
                </div>
                <div className='col-12 p-3'>
                    <h6 className="description-techstack">
                        A list of my favorite tools and technologies I use on regular basis.
                    </h6>
                </div>
                <div className="techstack-wrapper">

                    {
                        techStackData.map((tech, index) => <TechStackCard key={index} logo={tech.logo} title={tech.title} link={tech.link} />)
                    }
                    
                {/* <ActionBtn color='#426184' textcolor='white'>...</ActionBtn> */}
                    
                </div>
            </div>
        </section>
    );
}