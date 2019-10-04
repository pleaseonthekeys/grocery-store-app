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
        this.addFruits = this.addFruits.bind(this);
        this.updateFruitIsle = this.updateFruitIsle.bind(this);
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

    updateFruitIsle(fruit) {
        return axios.put('/fruit', fruit)
        .then(() => {
            return this.getFruit()
        })
        .catch(err => {
            console.log('error changing fruit isle', err)
        })
    }

    render() {
        return (
            <div>
                <h1>Rendering Anything</h1>
                <FruitForm addFruit={this.addFruits} updateFruitIsle={this.updateFruitIsle}/>
                <FruitList fruits={this.state.fruits} getFruit={this.getFruit}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

