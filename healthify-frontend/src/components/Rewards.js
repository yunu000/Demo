import React from "react";
import Checkbox from "./Checkbox";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import image from "./rewards.avif";
import coin from "./coin.png";
function Rewards() {
  const { user } = useContext(UserContext);
  return (

    <div className="text-center d-flex flex-column align-items-center justify-content-center" style={{ color:"white",width: "100%",height:"100vh",backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div style={{padding:"auto"}}>
        <h1 style={{fontWeight:"900"}}>Your reward points are waiting for you!!</h1>
        <img src={coin} alt="" />
        <h2 className="card-title">Points Earned</h2>
        <h2 className="points">{user.rewardPoint}</h2>
        <br/>
        <p>Claim your free doctor consultation in just 500 points.</p>
        <p>Redeem your points against medication purchase.</p>
      </div>
    </div>
  );
}

export default Rewards;
