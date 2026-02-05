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
    // Button is trapped in the wrapper
    const getRandomPosition = () => {
      const wrapper = document.querySelector(".heart-wrapper");
      const rect = wrapper.getBoundingClientRect();

      const randomTop = Math.random() * (rect.height - 60);
      const randomLeft = Math.random() * (rect.width - 100);
      return { position: "absolute", top: randomTop, left: randomLeft };
    };

    setPosition(getRandomPosition());
  };

  return (
    <>
      <div className="heart-wrapper">
        <div className="heart-bg"></div>
        <div className="heart-content">
          {!isConfirm ? (
            <>
              <div className="text-xl sm:text-2xl md:text-3xl">
                <p>🥺</p>
                <p>👉👈</p>
              </div>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 font-Bitcount mt-4">
                BB will you be my Valentine?
              </p>
              <div className="flex gap-3 sm:gap-4 w-full justify-center mt-4 sm:mt-5">
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
              <div className="mt-20 sm:mt-32 md:mt-40">
                <p className="text-sm sm:text-base text-gray-900 font-Bitcount">
                  *Bawal ang NO, wag makulet!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-col justify-center gap-3">
                <p className="text-black">🎉🎉🎉 YAY! 🎉🎉🎉</p>
                <p className="text-black">Heart ka saken!</p>
              </div>
              <div className="flex justify-center mt-4 sm:mt-5">
                <img
                  className="w-1/2 rounded-2xl"
                  src="./heart_ka_saken.jpg"
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
