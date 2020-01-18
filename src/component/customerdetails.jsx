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
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" label="Pincode" variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Locality" variant="outlined" style={{ width: '370px' }} />
                    </div>
                </div>

                <div className='address'>
                    <CssTextField id="outlined-multiline-static" label="Address" multiline rows="3" variant="outlined" style={{ width: '775px' }} />
                </div>
                <div className='content'>
                    <div className='name'>
                        <TextField id="outlined-basic" label="City/Town" variant="outlined" style={{ width: '370px' }} />
                    </div>
                    <div className='phonenumber'>
                        <TextField id="outlined-basic" label="Landmark" variant="outlined" style={{ width: '370px' }} />
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

                    <Button variant="contained" color="primary" style={{ float: 'right' }}>
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