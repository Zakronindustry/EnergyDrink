import React from "react";
import "./App.css";


function App() {
  return (
   <div className="body bg-[url('./assets/bg1.jpg')] bg-cover flex flex-col h-screen w-full border-2 border-white">
    <div className="flex flex-row h-[8%] w-full border-2 border-white">
     <div className="flex flex-row justify-start h-full w-[50%] border-2 border-white">
      <div className="flex h-full w-10 ml-4 p-1 border-2 border-white">
      </div>
      <a className="flex gradient-text text-[#000080] font-bold ml-3 mr-3 py-2">Home</a>
      <a className="flex gradient-text text-[#000080] font-bold ml-3 mr-3 py-2">Portfolio</a>
      <a className="flex gradient-text text-[#000080] font-bold ml-3 mr-3 py-2">contact</a>      
     </div>
     <div className="flex justify-end flex-row h-full w-[50%] border-2 border-white">
      <div className="flex h-full w-10 mr-4 p-1 border-2 border-white hover:">
      </div>
      <div className="flex h-full w-10 mr-4 p-1 border-2 border-white">
      </div>
     </div>
    </div>

    <div className="flex justify-center h-full w-full border-2 border-white">
     <div className="container flex justify-center items-center  h-full w-[15%] border-2 border-white">
      <div className="soda">
      </div>

      <div className="absolute stage"></div>
    </div>
    <div className="flex ml-10 flex-col justify-center items-center w-[50%] h-full border-2 border-white text-black ">
     <div className="anim font-bold hover-text">Born from Chaos 
      <div className="flex border-2 border-white  hover-sub">Experience the raw power and unrelenting force of a drink born from the heart of chaos, fueling your wildest adventures.</div>
     </div>
     <div className="mina font-bold hover-text">Born from Chaos 
      <div className="flex border-2 border-white  hover-sub">Experience the raw power and unrelenting force of a drink born from the heart of chaos, fueling your wildest adventures.</div>
     </div>
    </div>


    </div>
   </div>
  );
}

export default App;
