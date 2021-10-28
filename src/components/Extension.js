/*global chrome*/
import React, {Component} from 'react'

import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import {withStyles} from '@mui/styles'


const styles = {
  paper: {
    backgroundColor: "#99679A",
    color: "#ffffff",
    width: 200,
    padding: 20
  }
}


class Extension extends Component {

  constructor(props){
    super(props)

    this.state = {
      paymentPointer: "None"
    }
  }

  /*modifyDOM() {
        return document.querySelector("meta[name='monetization']").getAttribute("content")
  }*/

    getPaymentPointer() {
      let s = (v) => this.setState({paymentPointer: v});

      console.log('(' + this.modifyDOM + ')();')

      new Promise(function(resolve, reject) {
        chrome.tabs.executeScript({
            code: '(function(){return document.querySelector("meta[name=\'monetization\']").getAttribute("content")})()'
        }, (results) => {
            resolve(results[0])
            console.log(results[0])
        });
      }).then(function(value){
        s(value)
        console.log("Promesa", value)
      })
    }


  render(){

    const {classes} = this.props

    this.getPaymentPointer();

    return(
      <Paper
        className={classes.paper}
        variant="outlined"
        square
      >
        <div>
          Here is the payment pointer: {this.state.paymentPointer}
        </div>
      </Paper>
    )
  }
}


export default withStyles(styles)(Extension)
