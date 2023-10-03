import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditContact from './EditContact';



const User = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = (e) => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (e) => {
        e.preventDefault();
        props.deletedUser(props.userInfo.id);
    }

    return (
        <>  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContact userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
                </Modal.Body>
            </Modal>

            <Col md="4">
                <Card style={{ width: '16rem', marginTop: '1rem', }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Contact Information</Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Telephone: {props.userInfo.telephone}</p>
                        </Card.Text>
                        <Button onClick={handleShow} variant='outline-primary' size='sm' style={{ marginRight: '1rem' }} >Edit</Button>
                        <Button onClick={handleDelete} variant='danger' size='sm' >Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default User;
