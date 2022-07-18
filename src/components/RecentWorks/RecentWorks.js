import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import TitleBar from '../TitleBar/TitleBar';
import './RecentWorks.css';


export default function RecentWorks() {
    return (
        <section className='recentworks-section'>
            <TitleBar>Recent Works</TitleBar>
            <div className='works-wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <a href='https://sadi-1010011.github.io/typerr'>
                                <ProjectCard title='Typer' description='Beautiful tool to practice and improve touch typing.' />
                            </a>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <a href='https://sadi-1010011.github.io/foodstagram'>
                                <ProjectCard title='foodstagram' description='Ecommerce website to order food and snacks online.' />
                            </a>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <a href='https://solochatter.herokuapp.com/'>
                                <ProjectCard title='solochatter' description='private secure chat app for personal and public chatting sessions.' />
                            </a>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <a href='https://sadi-1010011.github.io/BaseConverter'>
                                <ProjectCard title='BaseConvrtr' description='useful tool to convert binary number to decimal and vice versa.' />
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
}