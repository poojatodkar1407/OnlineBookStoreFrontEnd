import React, { Component } from 'react';
import '../css/customerdetails.css'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from "axios";


import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        'MuiOutlinedInput-root': {
            position: 'relative',
            width: '670px',
            borderRadius: '4px',
            height: '69px',
        }

    },
})(TextField);
class CustomerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            address: '',
            country: '',
            pinCode: ''
        };
        console.log("this.state in constructor",this.state);
        this.addCustomerDetails = this.addCustomerDetails.bind(this)
        this.handleChange=this.handleChange.bind(this);
      }

      handleChange(event){
    //     const{ name , value }=event.target;
    //   this.setState({ [name]: value });
    this.setState({ [event.target.name]: event.target.value });
    console.log("event",this.state.name)


    }
  
      addCustomerDetails(){
        var data = {
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          country: this.state.country,
          pinCode: this.state.pinCode
    
        }
        console.log("this.state in customer detail",data);
        axios.post('http://localhost:8080/TallTalesBooks/AddUserDetails', data,{
            headers: {
              'Content-Type': 'application/json' }})
        .then(response => {
            console.log(response)
            this.props.history.push('/ordersuccessfull')
        })
        .catch(error => {
            console.log(error)
        })

      }
   

    render() {
        return (<div>
            <div className="toolBar">
                <div className="bookTitle">
                    Tall Tales Book Store
                    <Paper component="form">
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                            <InputBase placeholder="search..." variant="outlined" />
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <div className="subMain" style={{ height: '600px' }}>

                <h2>Customer Details</h2>
                <div className='content'>
                    <div className='name' >
                        <TextField id="outlined-basic" label="Name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          name="name"
                        variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Phone Number"  variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" name="pinCode" label="Pincode" onChange={this.handleChange} variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" name="email" label="Email Id" onChange={this.handleChange} variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='address'>
                    <CssTextField id="outlined-multiline-static" name="address"label="Address" onChange={this.handleChange} multiline rows="3" variant="outlined" style={{ width: '775px' }} />
                </div>
                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" label="City/Town" name="city" variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Country" name="country" onChange={this.handleChange} variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='text'>Type</div>
                <div className='radioButtons'>
                    <FormControl component="fieldset" style={{ paddingLeft: '6%' }}>
                        <RadioGroup aria-label="position" name="position" row>
                            <div>
                                <FormControlLabel
                                    value="top"
                                    control={<Radio color="primary" />}
                                    label="Home"
                                    labelPlacement="end"
                                />
                            </div>
                            <FormControlLabel
                                value="start"
                                control={<Radio color="primary" />}
                                label="Work"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="bottom"
                                control={<Radio color="primary" />}
                                label="Other"
                                labelPlacement="end"

                            />
                        </RadioGroup>
                    </FormControl>

                    <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={this.addCustomerDetails}>
                        Continue </Button>
                </div>
            </div>
            <div className="orderSummary" style={{ height: '50px' }}>
                <h2>Order Summary</h2>
            </div>

        </div>);
    }
}

export default CustomerDetails;