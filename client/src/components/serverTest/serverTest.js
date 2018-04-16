import React from 'react';
import {API_BASE_URL} from '../../config.js';
import axios from 'axios';

const postTest = () => {
    console.log(document.getElementById("title").value);
    console.log(document.getElementById("content").value);
    const data = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    }

    fetch(`${API_BASE_URL}/insert`, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(function(response) {
        console.log(response)
      }).then(function(body) {
        console.log(body);
      })
      .catch(function (error) {
        console.log(error);
      });
      

    // axios.post(url, {
    //     title: document.getElementById("title").value,
    //     content: document.getElementById("content").value
    // })
    // .then(response => {
    //     console.log(response)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}


// axios({
//     method: 'post',
//     url: 'http://localhost:8000/insert',
//     data: {
//         title: document.getElementById("title").value,
//         content: document.getElementById("content").value
//     }
// }


const ServerTest = () => {
    return(
        <div>
            <div >
                <div className="input">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div class="input">
                    <label for="content">Content</label>
                    <input type="text" id="content" name="content" />
                </div>
                <button onClick={postTest}>Insert</button>
            </div>
        </div>
    )
}

export default ServerTest