import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FruitList from './components/FruitList.jsx'
import FruitForm from './components/FruitForm'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fruits : []
        };

        this.getFruit = this.getFruit.bind(this);
        this.addFruits = this.addFruits.bind(this)
    }

    componentDidMount() {
        console.log('mounted and communicating')
        this.getFruit()
    }



    getFruit() {
        return axios.get('/fruit')
        .then(({data}) => {
            this.setState({fruits: data}, () => {
            })
        })
        .catch(err => console.log('error getting test fruit', err))
    }

    addFruits(fruit) {
        return axios.post('/fruit', fruit)
        .then(() => {
            return this.getFruit()
        })
        .catch(err => {
            console.log('error posting fruit', err)
        })
    }

    render() {
        return (
            <div>
                <h1>Rendering Anything</h1>
                <FruitForm addFruit={this.addFruits}/>
                <FruitList fruits={this.state.fruits}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

