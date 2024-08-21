import { useEffect, useState } from "react"



export default function PutMethod() {

    const [postData, setPostData] = useState({
        id : 1,
        title : "",
        body : "",
    });

    const [message, SetMessage] = useState("");
    const [loading , setLoading] = useState(false);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setPostData({
            ...postData,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
        
        const requestOptions = {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(postData)
        };

        // Send the Put (Update) Request
        fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            SetMessage("Post Updated Successfully")
            console.log("Data", data)
        })
        .catch((error) => {
            console.log("Error", error)
            SetMessage("Error Updating the post.")
        })
        .finally(() => {
            setLoading(false);
        })

    }


    // Load the initial post data when the component mounts
useEffect(() => {
const postId = postData.id;
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

fetch(apiUrl)
.then((response) => response.json())
.then((data) => {
    setPostData(data)
    console.log("Data", data)
})
.catch((error) => {
    console.log("Error", error)
})


    }, [postData.id]);


  return (
    <>
      <h1>Fetch API Put (Update) Method</h1>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Title</label>
            <input type="text" name="title" value={postData.title} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Body</label>
           <textarea name="body" id="" value={postData.body} onChange={handleChange} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </>
  )
}
