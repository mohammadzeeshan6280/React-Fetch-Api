import { useEffect, useState} from "react";

export default function GetMethod() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response)
            if(!response.ok){
                throw new Error ("Network response was not ok")
            }
            return response.json();
        }).then((data) => {
            console.log(data)
            setData(data)
            setLoading(false)
        }).catch((error) => {
            console.log("Error",error)
        })      
    }, [])
  return (
    <>
      <h2>Get Method Fetch API</h2>

      {
        loading ? (
            <p>Loading...</p>
        ) : (
            <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((list, index) => (
                <tr key={index}>
                {/* <td>1</td>
                <td>WhiteHat</td>
                <td>Fetch Api</td> */}
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.body}</td>
                </tr>
            ))
        }
           
        </tbody>
      </table>
        )
      }
     
    </>
  )
}
