import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [task, setTask] = useState("");
  const [timing, setTiming] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { task, timing }]);
    setTask("");
    setTiming("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
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
          <Button
            onClick={addData}
            id="add"
            variant="contained"
            color="success"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div style={{background: '#dfe6e9', fontSize: '1.2rem'}} className="data_val">
          <h4>Task |</h4>
          <h4>| Timing |</h4>
          <h4>| Remove</h4>
          
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.task}</h4>
              <h4>{element.timing}</h4>
              <Stack>
                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
