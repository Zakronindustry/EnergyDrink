import React from "react";
import "./App.css";


function App() {
  return (
   <div className="body bg-[url('./assets/bg.jpg')] bg-cover flex flex-col h-screen w-full border-2 border-white">
    <div className="flex flex-row h-[8%] w-full border-2 border-white">
     <div className="flex flex-row justify-start h-full w-[50%] border-2 border-white">
      <div className="flex h-full w-10 ml-4 p-1 border-2 border-white">
      </div>
      <a className="flex text-white ml-3 mr-3 py-1">Home</a>
      <a className="flex text-white ml-3 mr-3 py-1">Portfolio</a>
      <a className="flex text-white ml-3 mr-3 py-1">contact</a>      
     </div>
     <div className="flex justify-end flex-row h-full w-[50%] border-2 border-white">
      <div className="flex h-full w-10 mr-4 p-1 border-2 border-white">
      </div>
      <div className="flex h-full w-10 mr-4 p-1 border-2 border-white">
      </div>
     </div>
    </div>
    <div className="flex flex-row justify-center  w-full h-[20%] border-2 border-white">
     <div className="flex font-bold border-2 justify-center border-white h-full w-[50%] light">VORTEX</div>
    </div>
    <div className="flex justify-center h-full w-full border-2 border-white">
     <div className="container flex justify-center items-center  h-full w-[12%] border-2 border-white">
      <div className="soda">
      </div>
      <div className="absolute stage"></div>
      <div className="ice"></div>
      <div className="ice1"></div>
     </div>
    </div>
   </div>
  );
}

export default App;
