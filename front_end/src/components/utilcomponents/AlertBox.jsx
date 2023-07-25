import React, { useState } from "react";
import successImage from "../../resources/correct.png"
import wrongImage from "../../resources/wrong.png"

function AlertBox(props) {
  const {setAlertMessage, setDisplayVisible, alertMessage } = props;
  const {messageHeading,type,message } = alertMessage;
  const emptyAlertMessage = ()=>{
      setAlertMessage(()=>({
        type: "info",
        heading: "",
        message: "",
      }))
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[75%] h-[75%] bg-gray-400 text-white">
        <div className="pb-4">
          
           <img src={type==="Success"?successImage:wrongImage} className="w-32"/>
          
        </div>
        <div>{type}</div>
        <div>{messageHeading}</div>
        <div>{message}</div>

        <button className="px-4 pb-1 mt-4 rounded-sm bg-light-darker" onClick={()=>{setDisplayVisible(false)}}>Ok</button>
      </div>
    </>
  );
}

export default AlertBox;
