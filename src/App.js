import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Fields from "./components/Fields";

function App() {
  const [task, setTask] = useState("");
  const [timing, setTiming] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {task, timing}]);
    setTask('');
    setTiming('');
  }
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
          <Button onClick={addData} id="add" variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
      <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (<Fields key={index} task={element.task} timing={element.timing} index={index}/>)
          })
        }
      </div>
    </div>
  );
  }

export default App;
