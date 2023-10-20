import { useState } from 'react';
import './registration.css'
import { Link } from 'react-router-dom';
import PatientRegistration from './PatientRegistration';

const RegistrationForm = () => {
    const [activeButton, setActiveButton] = useState('patient');
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }
    return (
        <div className="container-fluid ps-md-0" style= {{marginTop: "56px"}}>    
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image-reg"></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <div className="text-center my-container-reg">
                                        <h1 className="display-6 mb-3">Register Now!</h1>                                       
                                        <div className="signup-form">
                                            {<PatientRegistration/>}
                                            <div className="hint-text">Already have an account? <Link to="/login" style={{textDecoration: "none"}}><span>Login here</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
