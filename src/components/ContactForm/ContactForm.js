import React, {Component} from 'react';

import './ContactForm.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        if (props.contact) {
            this.state = {...props.contact};
        } else {
            this.state = {
                contactName: '',
                phone: '',
                email: '',
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
        let source = null;
        if (this.state.image === '') {
            source = 'https://image.shutterstock.com/image-vector/empty-photo-male-profile-gray-260nw-535853269.jpg'
        } else {
            source = this.state.image
        }

        return (
            <form className="ContactForm" onSubmit={this.submit}>
                <input name="contactName"
                       placeholder="Contact name"
                       onChange={this.valueChanged}
                       value={this.state.contactName}
                />
                <input name="phone"
                       placeholder="Phone"
                       onChange={this.valueChanged}
                       value={this.state.phone}
                />
                <input name="email"
                       type="email"
                       placeholder="Email"
                       onChange={this.valueChanged}
                       value={this.state.email}
                />
                <input name="image"
                       type="text"
                       placeholder="Contact image"
                       onChange={this.valueChanged}
                       value={this.state.image}
                />
                <div>
                    <img src={source} alt=""/>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;