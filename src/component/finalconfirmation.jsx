import React, { Component } from 'react';
import '../css/finalconfirmation.css';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import hurrayImage from '../assets/hurray.webp';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
class FinalConfirmation extends Component {

    render() {
        return <div>
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
            <div className='subOrder'>
                <img src={hurrayImage} alt="Logo" />
                <div className='orderTitle' style={{ width: '100%' }} >Order Placed SuccessFully</div>
                <div className='para'><p>Hurray!!!your order is confirmed the order is #1234 save the order id for
                 further communication</p></div>
            </div>

            
        </div>
    }
}

export default FinalConfirmation;