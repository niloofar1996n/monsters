import React, {Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchField} from "./components/searchField/searchField";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filterSearch = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchField
                    placeholder='search monster'
                    handleChange={this.handleChange}/>
                <CardList monsters={filterSearch}/>
            </div>
        );
    }
}

export default App;
