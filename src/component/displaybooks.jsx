import React, { Component } from 'react';
import '../css/dashboard.css';
import { withRouter } from 'react-router-dom';

// Login Component 
function Login(props) {
    return (
        <button onClick={props.clickFunc}>
            BUY NOW           
            </button>
    );
}

// Logout Component 
function Logout(props) {
    return (
        <button onClick={props.clickFunc}>
            ADDED TO THE BAG
           </button>
    );
}
class DisplayBooks extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.history.push('/customerDetails')
    }


    render() {
        console.log("this.props", this.props.books.books)
        var book = this.props.books.books.map((key, index) => {

            return (
                <div key={index}>

                    <div>
                        <div className='card'>
                            <div className='imageSpace'>
                                <img className='bookImg' src={key.image}></img>
                            </div>
                            <div className='bookName'>{key.bookName}</div>
                            <div className='authorName'>{key.authorName}</div>
                            <div className='bookName'>{key.price}</div>
                            <div className='buttonBuyNow' onClick={this.handleClick}>BUY NOW</div>
                        </div>
                    </div>
                </div>

            )
        })
        return (<div className='cardDiv'>
            {z}
        </div>
        )
    }
}

export default withRouter(DisplayBooks);