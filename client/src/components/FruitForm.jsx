import React from 'react'

class FruitForm extends React.Component {
    constructor(props) {
      super(props);
      //this state is defined by my api's post requirements
      this.state = {
        isle: 2, //isle
        name: '', //name
        type: 'fruit'
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault(); //again, why this?


        const { isle, name, type } = this.state;

        let fruit = {
            isle: isle,
            name: name,
            type: type
        };

        this.props.addFruit(fruit);
    }

    handleInputChange (event) {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value,
        })
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <input
                  type="number"
                  name="isle"
                  value={this.state.isle}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInputChange}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          );
        }
    }




  export default FruitForm

