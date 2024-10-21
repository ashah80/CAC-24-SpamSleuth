import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])
  console.log("HELLO")
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);  
  console.log(data)
  console.log("HELLO2")
  return (
    
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App
