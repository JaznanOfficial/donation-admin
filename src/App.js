import { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import VideoCall from "./components/VideoCall";

function App() {
    const [inCall, setInCall] = useState(false);
    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={() => setInCall(true)}>
                Join Call
            </Button>
            {inCall ? <VideoCall setInCall={setInCall} /> : "waiting to join call"}
        </div>
    );
}

export default App;
