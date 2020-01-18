import React, { Component } from 'react';
import '../css/dashboard.css'
import '../assets/book.png';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';


class Dashboard extends Component {

    handleClick = () => {
        this.props.history.push('/customerDetails')
    }
    
    render() {
        return <div className="main">
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

            <div className='subMain1'>
                <div className='lower'>
                    <h1>Books</h1>
                    <div>
                        <div className='card'>
                            <div className='imageSpace'>
                                <img className='bookImg' src={"https://books.google.com/books/content?id=41LdDgAAQBAJ&printsec=frontcover&img=1&zoom=5%27"}></img>
                            </div>
                            <div className='bookName'>The Mist</div>
                            <div className='authorName'>by Stephen King</div>
                            <div className='bookName'>Rs.117</div>
                            <div className='buttonBuyNow' onClick={this.handleClick}>BUY NOW</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

}

export default Dashboard;