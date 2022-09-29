import './Yoga.css'

const Yoga = (props) => {
    const {addYogaTime} = props
    const {name, description, duration, img} = props.yoga;
   
    return (
        <div className='yoga'>
            <img src={img} alt="" />
            <div>
            <h4>Yoga: {name}</h4>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Time:</strong><span> {duration}</span> Minutes</p>
            </div>
            <button onClick={() => addYogaTime(duration)} className='yoga-btn'>Add to list</button>
        </div>
    );
};

export default Yoga;