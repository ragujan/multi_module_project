import React from "react";
import "../../styles/auth.css";
import authPageImage from "../../resources/auth_page_image.jpg";
function SignUp() {

  const sendMessage =async()=>{
    let url = "http://localhost:8080/register";
    const formData = new FormData();
    formData.append('name', "ragjn33");
   await fetch(url,{method:"POST",body:formData})
    .then((res)=>res.text())
    .then((text)=>{
      console.log(text)
    })
  }
  return (
    <>
      <div className="flex flex-col items-stretch justify-center h-screen px-10 py-24 text-white md:px-24 lg:px-32 xl:px-48 md:py-16 md:flex-row bg-secondary-blue ">
        {/* image div */}
        <div className="flex items-center justify-center px-0 md:px-0 l md:w-1/2">
          <img
            className="object-cover w-full h-full max-h-full md:static rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
            src={authPageImage}
          />
        </div>

        {/* form div */}
        <div className="flex flex-row items-center justify-center w-full h-full border-2 rounded-b-xl md:rounded-bl-none md:rounded-r-xl bg-main-blue md:w-1/2 ">
          <div className="flex flex-col w-full px-14 md:px-0 md:w-1/2 signUpForm">
            <div className="py-4">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>
              <div className="flex flex-col py-1">
                <span>Username</span>
                <input type="username" className="text-black" />
              </div>
              {/* email section */}
              <div className="flex flex-col py-1">
                <span>Email</span>
                <input type="text" className="text-black" />
              </div>
              <div className="flex flex-col py-1">
                <span>Password</span>
                <input type="password" className="text-black" />
              </div>
              <div className="flex flex-col py-1">
                <span>Password</span>
                <input type="password" className="text-black" />
              </div>
              <div className="flex flex-col py-8">
                <button onClick={()=>{sendMessage()}} className="px-2 py-2 font-bold rounded-md bg-light-darker">
                  Sign Up
                </button>
              </div>
              <div className="flex flex-col items-center ">
                <a href="" className="underline">
                  login
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
