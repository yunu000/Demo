// import {
// 	Progress, 
// 	ButtonGroup, 
// 	Button 
// } from "rsuite"; 
import { useState } from "react"; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

 

export default function ProgressBar(props) { 
    const {percentage} = props;
	return ( 
<CircularProgressbar value={percentage} text={`${percentage}%`} />
	); 
}