/*global chrome*/
import React, {Component} from 'react'

import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import {withStyles} from '@mui/styles'

import DisabledScreen from './DisabledScreen.js'
import EnabledScreen from './EnabledScreen.js'
import EnabledScreenLogin from './EnabledScreenLogin.js'
import EnabledScreenPaying from './EnabledScreenPaying.js'

//var https = require('https');
var https = require('https');


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
      paymentPointer: "None",
      flag: 0
    }
  }

  /*modifyDOM() {
        return document.querySelector("meta[name='monetization']").getAttribute("content")
  }*/

  /**Gets payment pointer from the header of the web and saves the value in the state**/
  getPaymentPointer() {
    let s = (v) => this.setState({paymentPointer: v});

    new Promise(function(resolve, reject) {
      chrome.tabs.executeScript({
          code: '(function(){return document.querySelector("meta[name=\'monetization\']").getAttribute("content")})()'
      }, (results) => {
          resolve(results[0])
      });
    }).then(function(value){
      s(value)
    })
  }


  /**Sends a singular payment via the Interledger Network**/
  sendIlpPayment = () => {
    console.log("sendIlpPayment begins")

    const data = JSON.stringify({
      /*"receiver": "http://charlie-node:7770/accounts/charlie/spsp",*/
      /*"receiver": "https://51.91.8.116:443/accounts/acc2/spsp",*/
      "receiver": "http://receive.quartz.to/accounts/acc2/spsp",
      "source_amount": 20
    })

    const options = {
      /*hostname: '192.168.128.4',
      port: 7770,*/
      /*hostname: "51.91.8.116",
      port: 443,*/
      hostname: 'receive.quartz.to',
      /*hostname: "51.91.8.116",
      port: 7770,*/
      /*path: '/accounts/' + 'alice' + '/payments',*/
      path: '/accounts/' + 'acc1' + '/payments',
      method: 'POST',
      headers: {
        /*'Authorization': 'Bearer alice_password',*/
        'Authorization': 'Bearer acc1_password',
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      }
    }

    const req = https.request(options, res2 => {

      res2.on('data', d => {
        console.log('200', d.toString());
      })
    })

    req.on('error', error => {
      console.log('500', 'Internal Server Error')
      console.error(error)
    })

    req.write(data)
    req.end()

    /*var txt = "Amount: " + 20 + ", from: " + "alice" + ", to: " + "http://charlie-node:7770/accounts/charlie/spsp";*/
    var txt = "Amount: " + 20 + ", from: " + "acc1" + ", to: " + "https://send.quartz.to/accounts/acc2/spsp"
    console.log(txt);
  }


  render(){

    const {classes} = this.props

    this.getPaymentPointer();

    if(this.state.flag==0){
      this.sendIlpPayment();
      this.setState({flag:1})
    }

    const paymentPointer = this.state.paymentPointer

    let display = <DisabledScreen/>

    if(paymentPointer=="None"){
      display = <DisabledScreen/>
    } else {
      /*display = <EnabledScreen/>*/
      display = <EnabledScreenPaying/>
    }


    return(
      <Paper
        className={classes.paper}
        variant="outlined"
        square
      >
        {display}
      </Paper>
    )
  }
}


export default withStyles(styles)(Extension)
