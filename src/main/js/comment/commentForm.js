import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        var newComment = {};
        newComment["content"] = this.state.value;
        newComment["post"] = this.props.post_links.self.href;
        this.props.createComment(newComment);
        this.setState({value: ' '})
    }

    render() {
        return (
            <div>
                <form id="commentForm" onSubmit={this.handleSubmit}>
                    <textarea id="newComment" rows="2" cols="50" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;

