import React, {useState, useEffect} from 'react'

import data from "../data";

import './team.css';

const Team = () => {

    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
        setIndex(lastIndex);
        }
        if (index > lastIndex) {
        setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
        setIndex(index + 1);
        }, 5000);
        return () => {
        clearInterval(slider);
        };
    }, [index]);

    return (
        <div className='team' id='team'>
            <h1 className='team_heading'><span>meet </span>OUR TEAM</h1>
            <section className='section'>
                <div className="section_center">
                    {people.map((item, indexPeople) => {
                    const { id, image, name, title, quote } = item;
                    let position = "nextSlide";
                    if (indexPeople === index) {
                        position = "activeSlide";
                    }
                    if (
                        indexPeople === index - 1 ||
                        (index === 0 && indexPeople === people.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article className={position} key={id}>
                        <img src={image} alt={name} className="person_img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        </article>
                    );
                    })}
                    <button className="prev" onClick={() => setIndex(index - 1)}>
                        <i className="fa-solid fa-chevron-left"/>
                    </button>
                    <button className="next" onClick={() => setIndex(index + 1)}>
                        <i className="fa-solid fa-chevron-right"/>
                    </button>
                </div>
            </section>
            <div className='team_container'>
                <div className='team_content'>
                    <p className='font1'>Our elite team of technical experts designs and develops apps, websites, and</p>
                    <p className='font1'>provides solutions for leading companies and governmental institutions.</p>
                    <p className='font1'>Our team’s expertise allows us to provide advanced solutions on the</p>
                    <p className='font1'>technological as well as the business levels. Moreover, we cultivate expertise in</p>
                    <p className='font1'>every stage of product creation and learn from every project to deliver</p>
                    <p className='font1'>experience.</p>
                    <p className='font2'>Our team is proudly certified:</p>
                    <p className='font1'>Project Management Professionals</p>
                    <p className='font1'>Microsoft</p>
                    <p className='font1'>Oracle</p>
                    <p className='font1'>Cisco</p>
                    <p className='font1'>Scrum</p>
                </div>
            </div>
        </div>
    )
}

export default Team
