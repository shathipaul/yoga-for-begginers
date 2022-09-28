import React from 'react';
import './Yoga.css'
import logo from '../../images/logo.png'
const Yoga = () => {
    return (
        <div className='yoga-container'>
            
            <div>
            <h2>This is Yoga</h2>
            </div>
            {/* My Info Section */}
            <div className='yoga-info'>
                <div>
                <img className='yoga-img' src={logo} alt="" />
                </div>
                <div>
                <h4>Shathi Paul</h4>
                <p>Dhaka, Bangladesh</p>
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
                    <div> 
                    <div>
                        <h4>Exercise Time</h4>
                    </div>
                    <div>
                        <p>5 Minutes</p>
                    </div>
                    </div>
                    {/* Break Time */}
                    <div>
                    <div>
                        <h4>Break Time</h4>
                    </div>
                    <div>
                        <p>2 Minutes</p>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Yoga;