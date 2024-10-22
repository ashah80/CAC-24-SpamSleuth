// import React, {useState, useEffect} from 'react'

// function App() {
//   const [data, setData] = useState([{}])
//   console.log("HELLO")
//   useEffect(() => {
//     fetch("http://localhost:5000/members")
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//       });
//   }, []);  
//   return (
//     <div>
//       {(typeof data.members === 'undefined') ? (
//         <p>Loading...</p>
//       ): (
//         data.members.map((member, i) => (
//           <p key={i}>{member}</p>
//         ))
//       )}
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/run_function', {
        input_data: inputData
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error running function:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter input"
      />
      <button onClick={handleSubmit}>Run Function</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App
