import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../slices/taskSlice";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const [checked, setChecked] = React.useState([0]);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            "&:last-child": {
              borderBottom: "none",
            },
          }}
        >
          <ListItemButton
            role={undefined}
            onClick={handleToggle(task.id)}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(task.id) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={task.text} />
          </ListItemButton>

          <Tooltip title="Delete item">
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteTask(task.id)}
            >
              <DeleteIcon color="red" />
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
