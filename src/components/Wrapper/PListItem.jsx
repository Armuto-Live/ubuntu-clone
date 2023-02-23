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
      <ListItem>
        <ListItemIcon>
          <CheckCircleIcon fontSize="small" width="15px" color="success" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">{props.text}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default PListItem;
