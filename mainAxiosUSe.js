// import axios from 'axios'

var url = "http://localhost:3000/users"
getData();
function getData() {
    axios.get(url)
 .then((response) => {
    // console.log(response.data)
    response.data.forEach(function (element, index, array){
        // console.log(element)
        document.getElementById('tableau').innerHTML += `

        
        <div class="table">
        <div class="point"></div>
            <div class="nameBlock">
                <p id="username">${element.firstname}</p>
                <p id="name">${element.lastname}</p>
            </div>
            <div class="imageAvatar">
                <img src="${element.image}" alt="">
            </div>
            <div class="email">
                <p id="email">${element.email}</p>
            </div>
            
        </div>
        `
    });
 })

// axios.get(
//     'http://localhost:3000/users'
// )
// .then (Response => {
//     console.log(Response.data)
// })
// .then(response => {
//     // La réponse de l'API est dans response.data (pas besoin de response.data si l'API renvoie directement un objet)
//     const apiResponse = response.data;

//     // Maintenant, vous pouvez accéder aux propriétés de l'objet
//     console.log(apiResponse);

//     Object.entries(apiResponse).forEach((element, index, array) => {
//         console.log(element)
//     })

//     // Par exemple, pour accéder à une propriété spécifique
//     console.log(apiResponse.name);
//   })
 .catch((error) => console.log(error));
}

selectElement()
function selectElement() {
    var elementSelectioned = document.querySelector(".table").nodeValue
    console.log(elementSelectioned)
}
const block = document.querySelector('#block')
const App = document.getElementById('myApp')
const modifBtn = document.getElementById('modif')
// function removeElement() {
//     block.remove()  
//     addNewBlock()
//     console.log('voafafa')
// }

// function createElement() {
//     const myBlock = document.createElement('div')
//     myBlock.classList.add('userBlock')
//     document.append.append(myBlock)
//     console.log('misia')
// }
// modifBtn.addEventListener('click',createElement)
// function addNewBlock() {
//     const title = document.getElementById('myTitle').innerHTML ='Add a new users ?'
//     document.getElementById('myApp').innerHTML += `
//         <div class="useradd" id="signUp" style="transition: all 0.9s;">
//             <form class="myForm" id="myForm" method="POST">
//                 <input class="inputValue" type="text" id="name" placeholder="Your name">
//                 <input class="inputValue" type="text" id="username" placeholder="Your username">
//                 <input class="inputValue" type="email" id="email" placeholder="Your email">
//                 <input type="submit" value="submit">
//             </form>
//         </div>
//      ` 
// }
// const addUserBtn = document.getElementById('addUserBtn')
// addUserBtn.addEventListener('click', function(){
//     removeElement()
// });


// let nameInput =document.getElementById('name')
// let usernameInput =document.getElementById('username')
// let emailInput =document.getElementById('email')
// let addUserForms = document.getElementById("myForm");

// addUserForms.addEventListener('submit', function(e) {
//     e.preventDefault();
//     sendData();
//     console.log('coucou');

//     const sendData = (data) =>{
//         axios.post('https://jsonplaceholder.typicode.com/users', data)
//         .then(response =>{
//             console.log(response)   
//         })
//         .catch(error =>{
//             console.log(error)
//             getData()
//             createElement()
//         })
//     }
// });













