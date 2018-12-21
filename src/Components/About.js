import React from 'react';
import { keys, getSessionItem, setSessionItem, removeSessionItem } from '../services/storage';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };
    }

    componentDidMount() {
        this.getFormData();
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        },
        this.setFormData
        );
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        },
        this.setFormData
        );

    }

    getFormData() {
        let form = getSessionItem(keys.user_form);
        if (form) {
            this.setState({
                name: form.name,
                email: form.email
            });
        }
    }

    setFormData() {
        let form = {
            name: this.state.name,
            email: this.state.email
        };
        setSessionItem(keys.user_form, form);
    }

    render() {
        return (
            <div>
                About
                <form>
                    <fieldset>
                        <legend>User Details </legend>
                        <div>
                            <label>Name: </label>
                            <input value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                    </fieldset>
                </form>
             </div>
        );
    }
}

export default About;