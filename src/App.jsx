import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [position, setPosition] = useState({
    position: "relative",
    top: 0,
    left: 0,
  });

  const moveButton = () => {
    const getRandomPosition = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const randomTop = Math.floor(Math.random() * height);
      const randomLeft = Math.floor(Math.random() * width);
      return { position: "absolute", top: randomTop, left: randomLeft };
    };

    setPosition(getRandomPosition());
  };

  return (
    <>
      <div className="w-11/12 h-120 bg-amber-50 rounded-xl shadow-2xl p-5 md:w-200 md:h-120">
        {!isConfirm ? (
          <>
            <div className="text-2xl md:text-3xl">
              <p>🥺</p>
              <p>👉👈</p>
            </div>
            <p className="text-3xl font-semibold text-gray-900 font-Bitcount mt-4">
              BB will you be my Valentine?
            </p>

            <div className="flex gap-4 w-full justify-center mt-5">
              <button
                className="text-pink-400"
                onClick={() => setIsConfirm(true)}
              >
                Yes
              </button>
              <button
                style={{
                  position: position.position,
                  top: position.top,
                  left: position.left,
                  transition: "top 0.5s, left 0.5s",
                }}
                onMouseEnter={() => moveButton()}
                onClick={() => moveButton()}
              >
                No
              </button>
            </div>

            <div className="mt-40">
              <p className="text-gray-900 font-Bitcount">
                *Bawal ang NO, wag makulet!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-xl flex flex-col justify-center gap-3 md:text-3xl">
              <p className="text-black">🎉🎉🎉YAY!🎉🎉🎉</p>

              <p className="text-black">Heart ka saken!</p>
            </div>

            <div className="flex justify-center mt-5">
              <img className="w-60 h-60" src="./heart.gif" alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
