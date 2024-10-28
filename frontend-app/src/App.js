import Welcome from './Welcome'
import Basketball from './basketball.jpg'
import ComputerScience from './computer_science.jpg'
import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => setData(data));
  }, []);


  return (
    <div>
      <h1>Cat Images</h1>
      {data.map(post => (
        <div key={post.id}>
        <img src={post.url} alt="Cat" style={{ width: '300px', height: 'auto' }} />
    </div>
      ))} 

    <div>
      <Welcome />
    <div style = {{ display: 'flex', gap: '5 px'}}>
      <div 
        style={{
          width: '500px',
          height: '500px',
          backgroundImage: `url(${Basketball})`,
          backgroundSize: 'cover'
        }}
        ></div>
      <div 
        style={{
          width: '500px',
          height: '500px',
          backgroundImage: `url(${ComputerScience})`,
          backgroundSize: 'cover'
        }}
        ></div>
    </div>
    </div>
    </div>
  );
}

export default App;
