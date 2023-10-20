import React from "react";
import Checkbox from "./Checkbox";

function ActivityAf(props) {
  const { title,subtitle,updateStatus,disable} = props;
  return (
    <div className="card text-center" style={{ width: "60%", margin: "10px" ,borderRadius:"60px"}}>
      <div className="card-header" style={{color:"black"}}>
        {subtitle}
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{marginBottom:"15px"}}>{title}</h5>
        <button onClick={()=>{updateStatus(title)}} className="ButtonStyle btn btn-outline-success" disabled={disable}>
          Wohhhoooo!!!
        </button>
      </div>
    </div>
  );
}

export default ActivityAf;
