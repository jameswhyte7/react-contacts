import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            telephone: props.userInfo.telephone,
            id: props.userInfo.id,
        };
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value,})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name: "",
            email: "",
            telephone: "",
        });
        this.props.closeModal()
    };

    render() {
        return (
            <>
                <div className='Main-1'>

                    <div className='Container'>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label><span style={{ color: 'black' }}>Name</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label><span style={{ color: 'black' }}>Email</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formDangerEmail">
                                <Form.Label><span style={{ color: 'black' }}>Telephone</span></Form.Label>
                                <Form.Control type="phone" placeholder="Enter Telephone" name="telephone" value={this.state.telephone} onChange={(e)=>this.handleChange(e)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default EditContact;
