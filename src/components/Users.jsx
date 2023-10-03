import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersData.map((user, id)=>{
                        return <User userInfo = {user} key={user.id} deletedUser={props.deletedUser} editUser={props.editUser}/>
                    })
                }
                
            </Row>
        </Container>
    );
}

export default Users;
