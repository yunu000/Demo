import React from "react";

function Activity(props) {
    const {title,markComplete} = props
  return (
    <div class="card text-center" style={{width:"60%",margin:"10px"}}>
      <div class="card-header">Medication Time</div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <a href="#" class="btn btn-primary" onClick={markComplete}>
          Wohhhoooo!!!
        </a>
      </div>
    </div>
  );
}

export default Activity;
