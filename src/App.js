import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddContact from './components/AddContact';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
        name: "James Whyte",
        email: "james@codetrain",
        telephone: "0208232341",
        id: "ijf"
      },
      ]
    }
  };

  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  deleteUser = (id) => {
    let notDeletedUsers = this.state.users.filter((user)=> user.id !== id);
    this.setState({
      users: notDeletedUsers
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>

            <Col md="4">
              <AddContact addUser = {this.addNewUser} />
            </Col>

            <Col>
              <Users usersData={this.state.users} deletedUser={this.deleteUser} editUser={this.editUser} />
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

export default App;