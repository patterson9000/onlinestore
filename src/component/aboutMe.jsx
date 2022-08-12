import "./aboutMe.css";
import {useState} from 'react';

const AboutMe = () => {
    const[name, setName] = useState('');

    const toggleName = () => {
        setName("Bret Patterson");
    };

    return(
    <div className="about-me">
        <h1>hi, my name is</h1>
        <h4>{name}</h4>

        <button className="btn" onClick={toggleName}>See my name</button>
    </div>
    );
};

export default AboutMe;