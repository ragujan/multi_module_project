import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 
import { useState } from "react";

function App() {
  const [compName, setCompName] = useState("");

  const comps = {
    dash: Dashboard,
    signup: SignUp,
    signin: SignIn,
  };
  const comp = comps[compName];
  return (

    <>
     {/* <HashRouter> */}
      <BrowserRouter >
        <Routes >
          <Route
            exact
            path="/"
            element={
              <div className="flex items-center justify-center h-screen px-32 bg-main-blue gap-x-10 ">
                <button className="px-3 py-2 bg-light-darker">
                  {
                    <Link to="app/dashboard" target="_blank">
                      Dashboard 11
                    </Link>
                  }
                </button>
                <button className="px-3 py-2 bg-light-darker">
                  {
                    <Link to="app/sign_up" target="_blank">
                      Sign Up
                    </Link>
                  }
                </button>
                <button className="px-3 py-2 bg-light-darker">
                  {" "}
                  {
                    <Link to="app/sign_in" target="_blank">
                      Sign In
                    </Link>
                  }
                </button>
              </div>
            }
          ></Route>

          <Route exact path="/app/dashboard" element={<Dashboard/>}></Route>
          <Route exact path="/app/sign_up" element={<SignUp/>}></Route>
          <Route exact path="/app/sign_in" element={<SignIn/>}></Route>
          {/* <Template/> */}
        </Routes>
      </BrowserRouter>
     {/* </HashRouter> */}
    </>

  );
}

export default App;
