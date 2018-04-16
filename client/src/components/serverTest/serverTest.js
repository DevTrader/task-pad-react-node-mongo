import React from 'react';
import axios from 'axios';

const postTest = () => {
    const url = 'http://localhost:8000/insert'

    console.log(document.getElementById("title").value);
    console.log(document.getElementById("content").value);

    fetch(url, { 
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        data: {
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        }
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