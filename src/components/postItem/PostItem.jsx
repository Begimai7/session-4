 const PostItem = ({posts, number}) => {
  // console.log(posts);
 return (
  <div className="post">
   <div>
    <strong>
    <p>{number}. {posts.title}</p>
   </strong>
   <p>{posts.body}</p>
   </div>
   
  </div>
 )
}
export default PostItem;