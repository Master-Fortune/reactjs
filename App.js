import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const book = [{
        name: "Man City",
        link: "www.mancity.com",
        coach: "Pep Guardiola",
        points: 85,
        objectID: 1
    },
    {
        name: "Liverpool",
        link: "www.liverpool.com",
        coach: "Jurgen Klopp",
        points: 82,
        objectID: 2
    },
    {
        name: "Chelsea FC",
        link: "www.chelseafc.com",
        coach: "Thomas Tuchel",
        points: 68,
        objectID: 3
    },
    {
        name: "Arsenal FC",
        link: "www.arsenalfc.com",
        coach: "Mikel Arteta",
        points: 65,
        objectID: 4
    },
    {
        name: "Tottenham Hotspur",
        link: "www.tottenhamhotspur.com",
        coach: "Antonio Conte",
        points: 64,
        objectID: 5
    }

]



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book,
        }

        this.View = this.View.bind(this);

    }

    View = () => (
        /*this.state.book.map(item =>
          <div key={item.objectID}></div>
            <span>

            </span>*/
        book.forEach(book => {
            return (
                this.book.name,
                this.book.link,
                this.book.coach,
                this.book.points
            )
        })
    )


    render() {
        return ( <
            div className = "App" >
            <
            button id = "View"
            onClick = { this.View } >

            <
            /button>


            <
            /div>
        )
    }
}


export default App;