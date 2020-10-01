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
      <h2>Projects which made by me or <a href="http://thatcakeid.com">ThatCakeId TEAM</a></h2>
      <Card style={{ width: 250 }}>
        <CardContent>
          <img width="50px" src={osthmlogo} alt="os-thm logo" />
          <Typography color="textPrimary" gutterBottom>
            OS-THM
          </Typography>
          <Typography variant="body2" component="p">
          Open source and rich theme library. 
        </Typography>
        </CardContent> 
        <CardActions>
          <Button href="http://os-thm.thatcakeid.com" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card style={{ width: 250 }}>
        <CardContent>
          <img width="50px" src={osthmlogo} alt="os-thm logo" />
          <Typography color="textPrimary" gutterBottom>
          ZryteZene
          </Typography>
          <Typography variant="body2" component="p">
            Free music streaming service.
        </Typography>
        </CardContent> 
        <CardActions>
          <Button href="http://zrytezene.xyz" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </center> 
  );
}
