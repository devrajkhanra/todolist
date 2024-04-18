import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";
import { Button, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(
        addTask({ id: Math.random().toString(36).substr(2, 9), text: task })
      );
      setTask("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <TextField
        style={{ marginRight: "16px" }}
        id="standard-basic"
        label="Enter Task"
        variant="outlined"
        value={task}
        size="small"
        onChange={(e) => setTask(e.target.value)}
      />
      <Tooltip title="Add Task">
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleAddTask}
        >
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
};

export default TaskInput;
