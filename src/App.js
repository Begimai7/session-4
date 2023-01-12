
import { useState } from 'react';
import './App.css';
import { PostForm } from './components/postForm/PostForm';
import  PostList  from './components/postList/PostList';

function App() {

 const [posts, setPosts] = useState([
  {id: 1, title: "JavaScipt", body: "Description 1"},
  {id: 2, title: "React", body: "Description 2"},
  {id: 3, title: "TipeScript", body: "Description 3"}
 ])

 const createNewPosts = (newPosts) => {
   const updatedPosts = [...posts]
   updatedPosts.push(newPosts)
   setPosts(updatedPosts)
   console.log(newPosts)
 }

// console.log(posts)
  return (
    <div className="App">
      <PostForm createNewPosts={createNewPosts}/>
     <PostList post={posts}/>
    </div>
  );
}

export default App;
