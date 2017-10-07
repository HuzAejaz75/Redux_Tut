import React from 'react';
const  Comments = React.createClass({
    renderComment(comment,i){
       return(
           <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>{comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
       )
    },
    handleSubmit(e){
        console.log("submitting the form");
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.comment(postId,author,comment);
        this.refs.commentForm.reset();
        e.preventDefault();
    },
    render(){
    return(
           <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="Author"/>
                    <input type="text" ref="comment" placeholder="Comment"/>
                    <input type="submit" hidden/>
                 </form>
           </div>
        )
    }
});
export default  Comments;