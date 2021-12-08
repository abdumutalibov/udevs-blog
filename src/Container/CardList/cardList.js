
// import axios from 'axios';
// import React, { Component } from 'react'
// import Items from '../Items/Items';
// export default class cardList extends Component {
//     state = {

//         persons: [],
//     };

//     componentDidMount() {
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(res => {
//     console.log(res);
//     this.setState({persons: res.data});
// })
//     }
//     render() {
//         return (
//          <ul>{this.state.persons.map(person =>  <Items key={person.id} title={person.title} id={person.id} >{person.id}/</Items> )}
                
//             </ul>
//         )
//     }
// }













// import './cardList.css'
// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// export default function cardList() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         getPosts();
//     }, []);

//     function getPosts() {
//         axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then(({data}) => {
//             setPosts(data);
//         })
//         .catch((error) => console.error(error));
//     }
//     return (
//         <div className='container'>
//             <div className='cardList'>
//                 {posts.map((item) => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </div>
//         </div>
//     )
// }

import "./cardList.css";
import React from "react";
import Items from "../Items/Items";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="d-grid blog-list">
        {posts.map((item) => (
          <Items key={item.id} title={item.title} id={item.id} />
        // <li key={item.id}>{item.id} {item.title}</li>
          
        )).splice(0,12)}
      </div>
    </div>
  );
}
