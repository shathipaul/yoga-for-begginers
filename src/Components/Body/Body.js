import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/logo.png'
import Yoga from '../Yoga/Yoga';

import './Body.css'

const Body = () => {
    const [yogas, setYogas] = useState([]);
    const [time, setTime] = useState(0);
    const [brk, setBrk] = useState(0);

    const addYogaTime = (e) =>{
        setTime(time + e )
    }
    
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setYogas(data));
    }, []);

    const notify = () =>{
        toast('Congratulation!!! You have completed your Yoga.')
    }
    const storeBrkTime = localStorage.getItem('break time')
    const handlerBreak = (e) =>{
        console.log(e.target.innerText)
        const brkTime = e.target.innerText
        const storeBrkTime = localStorage.getItem('break time')
        localStorage.setItem('break time', brkTime)
        console.log(localStorage.getItem('break time'));
        setBrk(storeBrkTime);
    }
    
    return (
    
       <div>
         <div className='body-container'>
            
            <div className='yoga-container'>
            {
                yogas.map(yoga => <Yoga
                key={yoga.id}
                yoga={yoga}
                addYogaTime={addYogaTime}
                ></Yoga>)
            }

            </div>
            {/* My Info Section */}
            <div className='yoga-info'>
                <div className='my-info'>
                <div>
                <img className='yoga-img' src={logo} alt="" />
                </div>
                <div className='name-address'>
                <h4>Shathi Paul</h4>
                <p>Dhaka, Bangladesh</p>
                </div>
                </div>
                 {/* Add a break Section */}
                 <div>
                 <h3>Add A Break</h3>
                 <div className='add-break'>
                <button onClick={(e) => handlerBreak(e)} className='btn-break'>2m</button>
                <button onClick={(e) => handlerBreak(e)} className='btn-break'>3m</button>
                <button onClick={(e) => handlerBreak(e)} className='btn-break'>5m</button>
                <button onClick={(e) => handlerBreak(e)} className='btn-break'>7m</button>
                <button onClick={(e) => handlerBreak(e)} className='btn-break'>9m</button>
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
                        <p>{time} Minutes</p>
                    </div>
                    </div>
                    {/* Break Time */}
                    <div className='exercise-detail'>
                    <div>
                        <h4>Break Time</h4>
                    </div>
                    <div>
                        <p>{storeBrkTime}</p>
                    </div>
                    </div>
                </div>
                <button onClick={notify} className='act-btn'>Activity Completed</button>
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
            <h4>What is the Usages of useEffect other then loading data?</h4>
            <p>Understanding how the useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!</p>
            </div>
            </div>
            <ToastContainer />
       </div>
    );
};

export default Body;