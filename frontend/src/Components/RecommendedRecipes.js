import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem } from '@mui/material';
import { Button } from "@mui/material";

const addToCart = () => {}

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > 
          <div>
          <Typography variant="h4" component="h5" style={{ textAlign: "center", color: "#022950" }}>Grilled and marinated zucchini and yellow squash recipe</Typography>
          </div>
          <div className='cart'>
          <Button className='cartButton' onClick={addToCart} > - / + </Button>
          </div>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}>Ingredients</Typography>
          <Typography>
            <ListItem>zucchini, yellow squash, olive oil, kosher salt, fresh coarse ground black pepper, fresh lemon juice, lemon rind, red pepper flakes, fresh basil</ListItem>
          
          </Typography>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}><br></br>Recipe</Typography>
          <Typography>
            <List>
            <ListItem>It's amazing how a quick and simply marinade can change the flavors of zucchini and yellow squash.</ListItem> 
            <ListItem>This lemony-peppery mixture really wakes them up. this may seem to be in reverse grill, then marinate.</ListItem>
            <ListItem>It's a classic italian technique that creates great results.</ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" component="h5" style={{ textAlign: "center", color: "#022950" }}>Asian pork tenderloin with peanut sauce</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}>Ingredients</Typography>
          <Typography>
            <ListItem>zucchini, yellow squash, olive oil, kosher salt, fresh coarse ground black pepper, fresh lemon juice, lemon rind, red pepper flakes, fresh basil</ListItem>
          
          </Typography>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}><br></br>Recipe</Typography>
          <Typography>
            <List>
            <ListItem>It's amazing how a quick and simply marinade can change the flavors of zucchini and yellow squash.</ListItem> 
            <ListItem>This lemony-peppery mixture really wakes them up. this may seem to be in reverse grill, then marinate.</ListItem>
            <ListItem>It's a classic italian technique that creates great results.</ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" component="h5" style={{ textAlign: "center", color: "#022950" }}>Coconut shrimp with pineapple salsa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}>Ingredients</Typography>
          <Typography>
            <ListItem>zucchini, yellow squash, olive oil, kosher salt, fresh coarse ground black pepper, fresh lemon juice, lemon rind, red pepper flakes, fresh basil</ListItem>
          
          </Typography>
          <Typography variant="h5" component="h5" style = {{color: "#022950"}}><br></br>Recipe</Typography>
          <Typography>
            <List>
            <ListItem>It's amazing how a quick and simply marinade can change the flavors of zucchini and yellow squash.</ListItem> 
            <ListItem>This lemony-peppery mixture really wakes them up. this may seem to be in reverse grill, then marinate.</ListItem>
            <ListItem>It's a classic italian technique that creates great results.</ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
