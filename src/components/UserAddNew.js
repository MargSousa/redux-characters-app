import React from 'react';
import { Card, Form, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

class UserAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '/images/editAvatar.png',
      nickname: '',
      description: '',
      id: '',
      date: '',
      nicknameError: false,
      avatarSelected: false,
      avatarError: false,
    }
  }

  avatarImages = [
    {
      id: 1,
      name: 'Alien',
      link: '/images/avatars/Alien.png'
    },
    {
      id: 2,
      name: 'Anime',
      link: '/images/avatars/Anime.png'
    },
    {
      id: 3,
      name: 'Avocado',
      link: '/images/avatars/Avocado.png'
    },
    {
      id: 4,
      name: 'Batman',
      link: '/images/avatars/Batman.png'
    },
    {
      id: 5,
      name: 'Chaplin',
      link: '/images/avatars/Chaplin.png'
    },
    {
      id: 6,
      name: 'Fighter',
      link: '/images/avatars/Fighter.png'
    },
    {
      id: 7,
      name: 'Geisha',
      link: '/images/avatars/Geisha.png'
    },
    {
      id: 8,
      name: 'Halloween',
      link: '/images/avatars/Halloween.png'
    },
    {
      id: 9,
      name: 'Harley',
      link: '/images/avatars/Harley.png'
    },
    {
      id: 10,
      name: 'Heisenberg',
      link: '/images/avatars/Heisenberg.png'
    },
    {
      id: 11,
      name: 'Marilyn Monroe',
      link: '/images/avatars/MarilynMonroe.png'
    },
    {
      id: 12,
      name: 'Santa',
      link: '/images/avatars/Santa.png'
    },
    {
      id: 13,
      name: 'Zombie',
      link: '/images/avatars/Zombie.png'
    },
  ]

  handleAvatar = (avatar) => {
    const newId = uuidv4();
    const newDate = moment().format('L');

    this.setState({
      avatar: avatar.link,
      id: newId,
      date: newDate,
      avatarError: false,
      avatarSelected: true
    })
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ 
      [name]: value,
      nicknameError: false 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { nicknameError, avatarError, avatarSelected, ...data } = this.state

    if( avatarSelected === true) {
      const getNames = this.props.users.filter((user) => user.nickname === this.state.nickname )
      if (getNames.length === 0) {
        this.props.addNewUser(data);
        this.props.history.push('/');
      } else {
        this.setState({ nicknameError: true })
      }
    } else {
      this.setState({ avatarError: true })
    }
  }


  render() {
    const { avatar, description, nickname, nicknameError, avatarError } = this.state;

    return (
      <div className="UserAddNew">
        <div className="new-user-title">Create New User</div>
        <Card border="dark" style={{ width: '25rem' }} className="user-card">
          <Card.Header>
              <OverlayTrigger
                rootClose
                trigger="click"
                key="right"
                placement="right"
                overlay={
                  <Popover id={`popover-positioned-right`}>
                    <Popover.Title as="h3">Choose your Avatar</Popover.Title>
                    <Popover.Content>
                      { this.avatarImages.map((image) => 
                          <span key={image.id} onClick={() => this.handleAvatar(image)}>
                            <img src={image.link} alt={image.alt} className="new-avatar" />
                          </span>
                        )}
                    </Popover.Content>
                  </Popover>
                }
              >
                <div className="edit-avatar-popover">
                  <Card.Img 
                    variant="left" 
                    className="user-avatar"
                    src={`${window.location.origin}${avatar}`}
                  />
                </div>
              </OverlayTrigger>
              { avatarError ? 
                (<Card.Text className="error error-margin">
                  * Don't forget to choose your avatar.
                </Card.Text>)
                : null
              }
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" name="nickname" value={nickname} onChange={this.handleChange} placeholder="Enter user nickname" maxLength="20" required />
                { nicknameError ? 
                  (<Form.Text className="error">
                    * Nickname already in use, please choose another one.
                  </Form.Text>)
                  : null
                }
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" value={description} onChange={this.handleChange} rows="2" placeholder="Enter user description..." maxLength="50" required />
              </Form.Group>
              <div className="create-button-section">
                <Button type="submit" className="create-button">
                  Create
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (user) => dispatch({ type: 'ADD_USER', user: user })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserAddNew);