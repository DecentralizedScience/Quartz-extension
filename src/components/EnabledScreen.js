import React, {Component} from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';

class EnabledScreen extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
      <Grid container spacing={2} alignItems="center" justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography
            align="center"
            color="#636363"
          >
            This page accepts micropayments
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <MonetizationOnIcon
            sx = {{
              color: "#F8C8DA",
              fontSize: 60
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            color="#636363"
          >
            Log in to Quartz to start sending money
          </Typography>
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
