import { useEffect, useState } from "react";
import axios from "axios";


export default function AxiosApi() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState({});
    const [updatedData, setUpdatedData] = useState({});
    const [idToDelete, setIdToDelete] = useState(null);
  
    // Function to fetch data with a GET request
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          // Update the component state with the fetched data
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
  
    // Function to update data with a PUT request
    const updateData = () => {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", updatedData)
        .then((response) => {
          // Handle the PUT request response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
  
    // Function to create data with a POST request
    const createData = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", newData)
        .then((response) => {
          // Handle the POST request response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
  
    // Function to delete data with a DELETE request
    const deleteData = () => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${idToDelete}`)
        .then((response) => {
          // Handle the DELETE request response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
  
    // Fetch data when the component mounts
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <>
      <h1>Axios Library</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={createData}>Create Data</button>
      <button onClick={deleteData}>Delete Data</button>

      {/* Render data and input fields for newData and updatedData */}

       {/* Input fields for newData */}
       <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newData.title}
          onChange={(e) => setNewData({ ...newData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newData.body}
          onChange={(e) => setNewData({ ...newData, body: e.target.value })}
        />
      </div>

      {/* Input fields for updatedData */}
      <div>
        <h2>Update Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={updatedData.title}
          onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={updatedData.body}
          onChange={(e) => setUpdatedData({ ...updatedData, body: e.target.value })}
        />
      </div>

      {/* Input field for idToDelete */}
      <div>
        <h2>Delete Post</h2>
        <input
          type="number"
          placeholder="ID of Post to Delete"
          value={idToDelete || ""}
          onChange={(e) => setIdToDelete(e.target.value)}
        />
      </div>

      {/* Render fetched data */}
      <div>
        <h2>Fetched Data</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}
