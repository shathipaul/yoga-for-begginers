import React from 'react';
import './Yoga.css'

const Yoga = (props) => {
    const {name, description, duration, img} = props.yoga;
    return (
        <div className='yoga'>
            <img src={img} alt="" />
            <div>
            <h4>Yoga: {name}</h4>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Time:</strong> {duration} Minutes</p>
            </div>
            <button className='yoga-btn'>Add to list</button>
        </div>
    );
};

export default Yoga;