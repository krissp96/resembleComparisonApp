import React, { useState } from "react";
import resemble from "resemblejs";

function App() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [result, setResult] = useState("");

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const compareImages = () => {
    if (image1 && image2) {
      resemble(image1)
        .compareTo(image2)
        .onComplete((data) => {
          setResult(`Difference: ${data.misMatchPercentage}%`);
        });
    }
  };

  return (
    <div>
      <h1>Image Comparison</h1>
      <div>
        <label htmlFor="image1">Image 1:</label>
        <input
          type="file"
          id="image1"
          accept="image/"
          onChange={handleImage1Change}
        />
      </div>
      <div>
        <label htmlFor="image2">Image 2:</label>
        <input
          type="file"
          id="image2"
          accept="image/"
          onChange={handleImage2Change}
        />
      </div>
      <div>
        <canvas id="canvas"></canvas>
      </div>
      <div id="result">{result}</div>
      <button onClick={compareImages}>Compare Images</button>
    </div>
  );
}

export default App;
