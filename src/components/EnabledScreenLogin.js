import React, {Component} from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class EnabledScreen extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12} align="center">
          <TextField
            id="outlined"
            label="Required"
            defaultValue="User"
          />
        </Grid>
        <Grid item xs={12} align="center">
          <TextField
            id="outlined"
            label="Required"
            defaultValue="Password"
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            sx = {{
              color: "#FFFFFF",
              fontSize: 22,
              backgroundColor: "#92699B",
              '&:hover': {
                backgroundColor: "#7c5985"
              }
            }}
          >
          LOGIN
          </Button>
        </Grid>
      </Grid>
    )
  }
}


export default EnabledScreen
