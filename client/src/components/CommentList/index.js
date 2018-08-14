import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getComments, deleteComment } from '../../actions/commentActions';
import Comment from '../Comment';

class CommentList extends Component {

  componentDidMount() {
    this.props.getComments();
  }

  removeComment = (id) => {
    this.props.deleteComment(id)
  }

  render() {
    const { loading, comments } = this.props.comment

    if (loading) return <div className="loader"></div>

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {comments.map(({ _id, email, message, gravatar }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Comment
                    removeComment={this.removeComment}
                    commentData={{ email, message, gravatar, id: _id }} />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  comment: state.comment
})

const actions = {
  getComments,
  deleteComment
}

export default connect(mapStateToProps, actions)(CommentList);
