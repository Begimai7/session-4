import { useState } from "react"
import Button from "../UI/button/Button"
import MyInput from "../UI/input/MyInput"

export const PostForm = (props) => {

const [title, setTitle] = useState("")
const [body, setBody] = useState("")

const titleInputChange = (event) => {
 setTitle(event.target.value)
}
const bodyInputChange = (event) => {
 setBody(event.target.value)
}

 const addNewPosts = (event) => {
event.preventDefault()

const newPosts = {
 id: Math.random(),
 title,
 body
}
  props.createNewPosts(newPosts)

  setTitle("")
  setBody("")
 }

 return (
  <form>
   <MyInput value={title} onChange={titleInputChange} type="text" placeholder="Name of post" />
   <MyInput value={body} onChange={bodyInputChange} type="text" placeholder="Description of post" />
   <Button onClick={addNewPosts}>Add post</Button>
  </form>
 )
}