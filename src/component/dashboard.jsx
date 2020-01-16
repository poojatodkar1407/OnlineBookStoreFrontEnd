import React, { Component } from 'react';
import '../css/dashboard.css'
import '../assets/book.png';
import TextField from '@material-ui/core/TextField';


class Dashboard extends Component {

    render() {
        console.log("this.props", this.props)

        return <div className="toolBar">

            <div className="bookTitle">
                Tall Tales Book Store

                <div className="searchBar"> 
                    <form>
                    <TextField id="outlined-basic" variant="outlined" />
                </form>
                </div>
            </div>

        </div>

    }

}

export default Dashboard;