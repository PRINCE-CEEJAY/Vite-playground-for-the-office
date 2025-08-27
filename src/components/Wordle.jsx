import React from "react";
const grid = {
  rows: 6,
  cols: 5,
};

const Wordle = ({ guesses }) => {
  const currentGuesses = guesses || Array(grid.rows).fill("");
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center">Wordle Game</h1>
      <div className="flex flex-col items-center gap-1.5 p-10">
        {Array(grid.rows)
          .fill()
          .map((_, rowsIndex) => {
            return (
              <div key={rowsIndex} className="flex gap-1.5">
                {Array(grid.cols)
                  .fill()
                  .map((_, colsIndex) => {
                    const letter = currentGuesses[rowsIndex]?.[colsIndex] || "";
                    return (
                      <div
                        key={`${rowsIndex}- ${colsIndex}`}
                        className="flex justify-center items-center w-[62px] h-[62px] border-2 border-[#636569] text-3xl font-bold "
                      >
                        {letter}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wordle;
