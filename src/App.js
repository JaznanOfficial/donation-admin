import { useState } from 'react';
import './App.css';

function App() {
  const [inCall, setInCall] = useState(false)
  return (
    <div className="App">
      {
        inCall? "We're in the call":"waiting to join call"
      }
    </div>
  );
}

export default App;
