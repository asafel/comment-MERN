import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';


class CommentModal extends Component {
  state = {
    isModalOpen: false,
    email: '',
    message: ''
  }

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const newComment = {
      email: this.state.email,
      message: this.state.message
    }

    this.props.addComment(newComment)

    // Closing the modal
    this.toggle();
  }

  render() {

    return (
      <div>
        <Button color='dark' style={{ marginBottom: '2rem' }} onClick={this.toggle}>
          Add Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input type='text' name='email' id='email' placeholder='Email' onChange={this.onChange} />
                <br />
                <Input type="textarea" name="message" id="message" placeholder='Message' onChange={this.onChange} />
                <Button color='info' style={{ marginTop: '2rem' }} block>Add Comment</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comment: state.comment
})

export default connect(mapStateToProps, { addComment })(CommentModal);