'use client';
import { useState } from "react";

const ClickEvent = () => {
    const[button, setButton] = useState(false);

    const showtext = () => {
        setButton(false);
    };

    const hidetext = () => {
        setButton(true);
    };


    return(
        <div>
            {button ? (
                <div>
                 <button onClick={showtext}>show</button>
                </div>
                ) : (
                <div>
                  <button onClick={hidetext}>hide</button>
                  <h3>Hello Sir</h3>
                </div>
                )}
        </div>
        );
    };
export default ClickEvent;


  
  