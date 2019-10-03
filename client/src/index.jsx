import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test : 'test'
        }
    }

    componentDidMount() {
        console.log('mounted and communicating')
    }





    render() {
        return (
            <div>
                <h1>Rendering Anything</h1>
                <h1>Rendering something else</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

