import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'

// import { Button } from 'reactstrap';

import './style.css';

class Comment extends Component {
  state = {
    isLastActiveModalOpen: false,
    lastActiveTime: null
  }

  toggle = () => {
    this.setState({
      isLastActiveModalOpen: !this.state.isLastActiveModalOpen
    })
  }

  getLastActivebyEmail() {
    axios.get(`/api/comments/${this.props.commentData.email}`)
      .then(res => {
        const date = new Date(res.data);
        
        this.setState({
          isLastActiveModalOpen: true,
          lastActiveTime: date.toLocaleString()
        })
      });
  }

  render() {
    const { commentData: { email, message, gravatar} } = this.props
    
    return (
      <div className='comment-container'>
        <div className='comment-img' onClick={() => this.getLastActivebyEmail()}>
          <img src={gravatar} alt="" />
        </div>

        <div className='comment-data'>
          <div style={{ fontWeight: 'bold' }}>{email}</div>
          <div>{message}</div>
        </div>

        <Modal isOpen={this.state.isLastActiveModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Last active time of {email}</ModalHeader>
          <ModalBody>
            {this.state.lastActiveTime}
          </ModalBody>
        </Modal>

        {/*<Button className='remove-btn' color='danger' size='sm' onClick={removeComment.bind(this, id)}>&times;</Button>*/}
      </div>
    );
  }
}

export default Comment;