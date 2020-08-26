import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import osthmlogo from '../images/os-thm-logo.png';

export default function Projects() {
  return (
    <center>
      <h1>Projects</h1>
      <h2>Projects which made by me or <a href="http://github.com/ThatCakeIDttp:">ThatCakeId TEAM</a></h2>
      <Card style={{ width: 250 }}>
        <CardContent>
          <img width="50px" src={osthmlogo} alt="os-thm logo" />
          <Typography color="textPrimary" gutterBottom>
            OS-THM
          </Typography>
          <Typography variant="body2" component="p">
            Easy, Cross-platform and fast theme engine.  
        </Typography>
        </CardContent> 
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </center> 
  );
}
