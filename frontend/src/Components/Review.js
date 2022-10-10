import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { useStateValue } from "../StateProvider";

export default function Review() {
  const [state, ] = useStateValue();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {state.cart.map((product) => (
          <ListItem key={product} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product} secondary={product} />
            <Typography variant="body2">{12.99}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {12.99*state.cart.length}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
