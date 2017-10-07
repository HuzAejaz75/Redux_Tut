import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
const  Single = React.createClass({
    render(){
        console.log("rendering");
        console.log(this.props.posts);
        const i = this.props.posts.findIndex((post)=>post.code === this.props.params.photoid);
       // const i = this.props.posts.findIndex((post)=>post.code === this.props.params.postId);
        const post = this.props.posts[i];
        const comments = this.props.comments[this.props.params.photoid] ||[];//need to find its working
        console.log(comments);

      
    return(
           <div><Photo i={i} post={post}{...this.props} />
           <Comments postComments={comments}{...this.props} />
           </div>
           
        )
    }
});
export default  Single;