import { Delete } from "lucide-react";
import React, { useEffect } from "react";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const Keyboard = ({ onKeyPress }) => {
  const handleClick = (key) => {
    onKeyPress(key.toUpperCase());
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key == "Enter" || key == "Backspace" || /^[a-zA-Z]$/.test(key)) {
        // event.preventDefault();
        onKeyPress(key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="flex flex-col gap-2 pt-0 pb-0 pl-2 pr-2 min-w-[50%] max-w-[60%] justify-center">
      {KEYBOARD_ROWS.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex justify-center gap-[6px] w-full">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`items-center justify-center rounded-md p-2 font-bold border-0 h-[58px] cursor-pointer text-white flex-1 ${
                  key === "Backspace" || key === "Enter"
                    ? "bg-red-800 w-[90px]"
                    : "bg-green-800"
                }`}
              >
                {key === "Backspace" ? <Delete /> : key}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
