import React, {Component} from 'react';

import './DishForm.css';

class DishForm extends Component {
    constructor(props) {
        super(props);
        if (props.dish) {
            this.state = {...props.dish};
        } else {
            this.state = {
                dishName: '',
                price: '',
                image: ''
            };
        }
    }

    valueChanged = event => {
        let name = event.target.name;
        this.setState({[name]: event.target.value})

    };

    submit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form className="DishForm" onSubmit={this.submit}>
                <input name="dishName"
                       placeholder="Dish name"
                       onChange={this.valueChanged}
                       value={this.state.dishName}
                />
                <input type="text" name="price"
                       placeholder="Price"
                       onChange={this.valueChanged}
                       value={this.state.price}
                />
                <input type="text" name="image"
                       placeholder="Dish image"
                       onChange={this.valueChanged}
                       value={this.state.image}
                />
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default DishForm;