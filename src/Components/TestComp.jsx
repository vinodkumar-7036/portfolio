import React, { useState } from "react";

function TestComp() {
  const [isupdate, setIsupdate] = useState(false);
  function handleClick() {
    setIsupdate(true);
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {isupdate && (
        <div>
          <input placeholder="enterName" />
        </div>
      )}
    </div>
  );
}

export default TestComp;
