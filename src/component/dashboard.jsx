import React, { Component } from 'react';
import '../css/dashboard.css'
import '../assets/book.png';
import DisplayBooks from '../component/displaybooks'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        this.getAllbooks();
    }

    getAllbooks() {
        axios.get("http://localhost:8080/TallTalesBooksst", {}).then((res) => {
            //on success
            this.setState({
                books: res['data']
            });
        }).catch((error) => {
            //on error
            alert("There is an error in API call.");
        });
    }

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
                        <DisplayBooks books={this.state} />
                </div>
            </div>
        </div>
    }
}

export default Dashboard;