import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h2" style={{ marginBottom: "25px" }}>
        ToDo List
      </Typography>

      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
