import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import FetchApi from './Components/FetchApi.jsx'
import GetMethod from './Components/GetMethod.jsx'
// import PostMethod from './Components/PostMethod.jsx'
// import PutMethod from './Components/PutMethod.jsx'
// import DeleteMethod from './Components/DeleteMethod.jsx'
// import AxiosApi from './Components/AxiosApi.jsx'
// import AxiosGetData from './Components/AxiosGetData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <FetchApi/> */}
    <GetMethod/>
    {/* <PostMethod/> */}
    {/* <PutMethod/> */}
    {/* <DeleteMethod/> */}
    {/* <AxiosApi/> */}
   {/* <AxiosGetData/>  */}
  </React.StrictMode>,
)
