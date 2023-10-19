import React, {useState, useContext} from 'react'
import FindDoctor from './FindDoctor'
import PatientHistory from './PatientHistory';
import { UserContext } from './UserContext';
import './dashboard.css';
import Activity from './Activity';
import ProgressBar from './ProgressBar';

const PatientHome = () => {
    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('find');
    const [medTime,setMedTime]=useState("morning") 
    const [message,setMessage]=useState("Started for the day, complete routine and earn reward")
    const [percentage,setPercentage] = useState(0);
    
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }
    const markComplete = () =>{
        if(medTime=="morning")
        {
            setPercentage(33);
            setMedTime("afternoon");
            setMessage("Two more steps to earn reward")
        }
        else if(medTime=="afternoon")
        {
            setPercentage(66);
            setMedTime("evening");
            setMessage("Going great, see you in evening")
        }
        else{
            setPercentage(100);
            setMedTime("completed");
            setMessage("Thank you for interacting with me 3 times, please come tomorrow")
        }
    } 
    return (
        <div className = 'container d-flex flex-column align-items-center justify-content-center dashboard text-center' >
            <h3>{message}</h3>
            <div className='row' style={{width:"80%"}}>
                <div className='col-8 d-flex flex-column align-items-center justify-content-center'style={{padding:"30px"}}>
                    <Activity title="Morning" markComplete={markComplete}/>
                    <Activity title="Afternoon" markComplete={markComplete}/>
                    <Activity title="Evening" markComplete={markComplete}/>
                </div>
                <div className='col-4  d-flex flex-column align-items-center justify-content-center'style={{}}>
                    <ProgressBar percentage={percentage}/>
                    
                </div>
            </div>
            <div className = 'row' style={{marginTop:"10px"}}>
                <div className = "btn-group">
                    <button type="button" style={{width: "400px"}} className={`btn btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='history'? 'active': ' '}`}  onClick={clickHandler} value='history'>My History</button>
                </div>
            </div>
        </div>
    )
}

export default PatientHome
