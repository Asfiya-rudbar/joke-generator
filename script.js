// function getuser(){
//     const body = document.body;
//     let username = prompt("write username here.....");
//     if (!username) {
//         body.innerHTML = `user not found`;
//     }
//     fetch(`https://api.github.com/users/${username}`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error `user not found`;
//         }

//         return response.json();
//     })
//     .then((user) => {
//         body.innerHTML = `
//                     <div style="text-align: center; font-family: Arial, sans-serif;">
//                       <img src="${
//                         user.avatar_url
//                       }" alt="Avatar" style="border-radius: 50%; width: 150px; height: 150px;"/>
//                       <h2>${user.name || "No Name"}</h2>
//                       <p>${user.bio || "No bio available"}</p>
//                       <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
//                       <p><strong>Followers:</strong> ${user.followers}</p>
//                     </div>
//                   `;
//               })
//               .catch((error) => {
//                 body.innerHTML = `Error ${error.message}`;
//               });
//           }
//           getuser();


function getJoke() {
    const body = document.body;
    fetch(`https://v2.jokeapi.dev/joke/Programming`)
      .then((response) => {
        if (!response.ok) {
          throw new Error`Joke not found`();
        }
        return response.json();
      })
      .then((data) => {
        printJoke.innerHTML = `
            ${data.joke}
          `;
      })
      .catch((error) => {
        body.innerHTML = `Error ${error.message}`;
      });
  }
  getJoke();

 

// function getuser() {
//     const body = document.body;
//     let username = prompt("write username here.....");
    
//     if (!username) {
//         body.innerHTML = `User not found`;
//         return; // Stop the function execution if no username is provided
//     }
    
//     fetch(`https://api.github.com/users/${username}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("User not found"); // Fix the error handling
//             }
//             return response.json();
//         })
//         .then((user) => {
//             body.innerHTML = `
//                 <div style="text-align: center; font-family: Arial, sans-serif;">
//                     <img src="${user.avatar_url}" alt="Avatar" style="border-radius: 50%; width: 150px; height: 150px;"/>
//                     <h2>${user.name || "No Name"}</h2>
//                     <p>${user.bio || "No bio available"}</p>
//                     <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
//                     <p><strong>Followers:</strong> ${user.followers}</p>
//                 </div>
//             `;
//         })
//         .catch((error) => {
//             body.innerHTML = `Error: ${error.message}`; // Display the error message correctly
//         });
// }

// getuser();
