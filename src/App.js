import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [task, setTask] = useState("");
  const [timing, setTiming] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            value={task}
            onChange={(event) => setTask(event.target.value)}
            id="outlined-basic"
            label="Task"
            variant="outlined"
          />
          <TextField
            value={timing}
            onChange={(event) => setTiming(event.target.value)}
            id="outlined-basic"
            label="Timing"
            variant="outlined"
          />
          <Button id="add" variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
    </div>
  );
  }

export default App;
