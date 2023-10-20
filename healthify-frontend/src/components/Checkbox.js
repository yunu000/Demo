import React from "react";

const Checkbox =({label}) => {
    return(

        <div>
          
            <input type="checkbox"        
            className="rounded-checkbox"        
            id="checkbox"/> <label for="checkbox">{label}</label>
           
        </div>
    )
}

export default Checkbox;