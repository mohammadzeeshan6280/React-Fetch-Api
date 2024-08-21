import { useState } from "react"



export default function PostMethod() {
    // UseState
    const [formData, setFormData] = useState({
        title : "",
        body : "",
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name]: value,

        })

    }

    const handleSubmit = (e) => {
e.preventDefault();

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Create The Request Object
const requestOptions = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
    },
    body:JSON.stringify(formData),
};

// Send the Post Request
fetch(apiUrl, requestOptions)
.then((response) => response.json())
// Handle The response Data
.then((data) => console.log("Response Data",data))
.catch((error) => console.log("Error", error))
    }

  return (
    <>
      <h1>Post Method Fetch API</h1>
      <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="">Title</label>
    <input type="text" name="title" value={FormData.title} onChange={handleChange}/>
    </div>

    <div>
    <label htmlFor="">Body</label>
   <textarea name="body" id="" value={FormData.body} onChange={handleChange}/>
    </div>
    <button type="submit">Submit</button>

    
       
      </form>

    </>
  )
}
