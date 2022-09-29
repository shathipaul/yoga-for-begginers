import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import Yoga from '../Yoga/Yoga';

import './Body.css'

const Body = () => {
    const [yogas, setYogas] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setYogas(data));
    }, []);

    const yogaTimeSet = () =>{
        console.log('time is set')
    }

    return (
    
       <div>
         <div className='body-container'>
            
            <div className='yoga-container'>
            {
                yogas.map(yoga => <Yoga
                key={yoga.id}
                yoga={yoga}
                ></Yoga>)
            }

            </div>
            {/* My Info Section */}
            <div className='yoga-info'>
                <div className='my-info'>
                <div>
                <img className='yoga-img' src={logo} alt="" />
                </div>
                <div>
                <h4>Shathi Paul</h4>
                <p>Dhaka, Bangladesh</p>
                </div>
                </div>
                 {/* Add a break Section */}
                 <div>
                 <h3>Add A Break</h3>
                 <div className='add-break'>
                <p><small>2m</small></p>
                <p><small>3m</small></p>
                <p><small>5m</small></p>
                <p><small>7m</small></p>
                <p><small>9m</small></p>
                </div>
                 </div>
                {/* Exercise Details Section */}
                <div>
                    <h3>Exercise Detail</h3>
                    {/* Exercise Time */}
                    <div className='exercise-detail'> 
                    <div>
                        <h4>Exercise Time</h4>
                    </div>
                    <div>
                        <p>0 Minutes</p>
                    </div>
                    </div>
                    {/* Break Time */}
                    <div className='exercise-detail'>
                    <div>
                        <h4>Break Time</h4>
                    </div>
                    <div>
                        <p> 0 Minutes</p>
                    </div>
                    </div>
                </div>
                <button className='act-btn'>Activity Completed</button>
        </div>
          </div>
          {/* Q/A Section */}
            <div className='qa-container'>
                <h3>Here are some FAQ Questions about React</h3>
            <div className='qa'>
            <h4>How react works?</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='qa'>
            <h4>What are the difference between props and state?</h4>
            <p><strong>State:</strong>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br />
            <strong>Props:</strong> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
            </div>
            <div className='qa'>
            <h4>What is the function of useEffect other then loading data?</h4>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</p>
            </div>
            </div>
       </div>
    );
};

export default Body;