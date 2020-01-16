import React, { Component } from 'react';
import '../css/dashboard.css'
import '../assets/book.png';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';



class Dashboard extends Component {

    render() {
        console.log("this.props", this.props)

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
                    {/* <div className="searchBar"> 
                    <form>
                    <SearchIcon />           
                       <TextField id="outlined-basic" placeholder="search..." variant="outlined" />
                </form>
                </div> */}
                </div>

            </div>

            <div className='subMain'>
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
                            <div className='buttonBuyNow'>BUY NOW</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

}

export default Dashboard;