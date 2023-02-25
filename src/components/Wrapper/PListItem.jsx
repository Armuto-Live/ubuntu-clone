import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PListItem(props) {
  return (
    <List>
      <ListItem sx={{padding:"0"}}>
        <ListItemIcon>
          <CheckCircleIcon fontSize="small" width="20px" color="success" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">{props.text}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default PListItem;
