import React, {Component} from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

class DisabledScreen extends Component {

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
            This page does not accept micropayments
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <MonetizationOnIcon
            sx = {{
              color: "#D0D2D3",
              fontSize: 60
            }}
          />
        </Grid>
      </Grid>
    )
  }
}


export default DisabledScreen
