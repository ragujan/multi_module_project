import React, { useEffect } from "react";

function Tab2(props) {
  useEffect(()=>{
    props.setTabName("Tab 2")
 },[])
  return (
    <div className='h-[400px] bg-blue-300 w-full flex flex-col items-center' >
       <h1>Home Tab 2 Content</h1>
    </div>
  )
}

export default Tab2
