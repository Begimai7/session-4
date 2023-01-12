import PostItem from "../postItem/PostItem"
 
const PostList = ({ post }) => {
 return  (
 <div >
   <h1>List of posts </h1>
   {post.map((elem, index) =>  
   <PostItem  posts={elem} key={elem.id} number={index + 1} />
   )}
  </div>
 )
};
export default PostList;