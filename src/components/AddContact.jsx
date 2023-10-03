import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            telephone: ""
        }

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            telephone: ""
        });
    }

    render() {
        return (
            <>
                <div className='Main'>

                    <div style={{ marginTop: '1rem' }} className='Container'>

                        <Form onSubmit={this.handleSubmit}>
                            <h2 style={{fontSize: '40px', color: 'blue'}}>Student<br />Contact</h2>
                            <p style={{fontSize: '15px', color: 'red'}}>Enter your details below to progress with admission</p>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.state.name} type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.email} type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formDangerEmail">
                                <Form.Label>Telephone</Form.Label>
                                <Form.Control value={this.state.telephone} type="phone" placeholder="Enter Telephone" name="telephone"onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default AddContact;
