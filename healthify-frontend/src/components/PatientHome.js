import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import "./dashboard.css";
import ActivityAf from "./ActivityAf";
import ProgressBar from "./ProgressBar";
import Rewards from "./Rewards";
import { useHistory } from "react-router-dom";
import ApiService from '../services/ApiService' 
import image from './dashboard1.jpg'

const PatientHome = () => {
  const { user,setUser} = useContext(UserContext);
  const history = useHistory();
  const [message, setMessage] = useState(
    "Starting for the day, complete your daily routine to earn healthy life and rewards!!"
  );
  const [percentage, setPercentage] = useState(0);
  const [disable,setDisable] = useState({
    morning : false,
    afternoon : false,
    evening : false,
  })
  const [points, setPoint] = useState(0);

  const clickHandler = (e) => {
    history.push("/rewards");
  };
  const updateReward = (reward) =>{
    console.log(reward+user.rewardPoint)
    ApiService.updateReward({
        uid:user.uid,
        reward:reward+user.rewardPoint
    }).then(resp => {
        let user = resp.data;
        console.log(user)
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }).catch(() => {
        setUser(null);
    })
  }
  useEffect(()=>{
        if(percentage==100)
            updateReward(100)
        else if(disable.evening)
            updateReward(-50)
    },[percentage])

  const updateStatus = (time) => {
    if(time=="Morning")
    {
        setPercentage(percentage + 33);
        setMessage("Yay!! Two more steps to earn reward");
        setDisable({
            ...disable,
            morning:true,
        })
    }
    else if(time=="Afternoon")
    {
        setPercentage(percentage + 33);
        setMessage("Great!! One more step left to earn reward");
        setDisable({
            ...disable,
            afternoon:true,
            morning:true,
        })
    }
    else
    {
        setPercentage(percentage + 34);
        setMessage("Reward earned!! Thank you for interacting with me 3 times, please come tomorrow");
        setDisable({
            ...disable,
            evening:true,
            afternoon:true,
            morning:true,
        })
        
    }
  };

  return (
    <div
      style={{
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        padding: "0 px",
        overflow:"hidden"
      }}
    >
      <div className="container d-flex flex-column align-items-center justify-content-center dashboard text-center bg-image1">
        <h3
          style={{
            color: "#FFFFFF",
            marginTop: "100px",
          }}
        >
          {message}
        </h3>
        <div className="row" style={{ width: "90%" }}>
          <div
            className="col-8 d-flex flex-column align-items-center justify-content-center"
            style={{ padding: "30px" }}
          >
            <ActivityAf
              title="Morning"
              updateStatus={updateStatus}
              subtitle="It's time for Morning Medication!"
              disable = {disable.morning}
            />
            <ActivityAf
              title="Afternoon"
              updateStatus={updateStatus}
              subtitle="It's time for Afternoon Medication!"
              disable = {disable.afternoon}
            />
            <ActivityAf
              title="Evening"
              updateStatus={updateStatus}
              subtitle="It's time for Evening Medication!"
              disable = {disable.evening}
            />
          </div>
          <div
            className="col-4  d-flex flex-column align-items-center justify-content-center"
            style={{}}
          >
            <ProgressBar percentage={percentage} />
            <button
          type="button"
          style={{ width: "400px",marginTop:"20px",color:"yellow" }}
          className={`btn btn-lg btn-dark shadow-none rounded-pills`}
          onClick={clickHandler}
          value="history"
        >
          My Rewards
        </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PatientHome;
