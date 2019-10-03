import React from 'react'

const FruitList = (props) => (
    <div>
        <h4>Fruit List</h4>
        <ul>
            {props.fruits.map(fruit => {
                const liStyle = {
                    color: 'blue',
                  };
                return <li key={fruit._id} style={liStyle}>{`${fruit.food_name} Located At Isle Number: ${fruit.isle_number}`}</li>
            })}
        </ul>
    </div>
)

export default FruitList

