import React, { Component } from 'react';
import'../css/dashboard.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Dashboard extends Component {

    render() {
        console.log("this.props", this.props)

        return <div>
            {/* <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Tall Tales Book Store
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <div className="toolBar">
                <h1 className="bookTitle">Tall Tales Book Store</h1>
                </div>
        </div>
    }

}

export default Dashboard;