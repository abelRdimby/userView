// import axios from 'axios';

getData();
function getData() {
    axios.get(
        'https://jsonplaceholder.typicode.com/users'
        )
 .then((response) => {
    response.data.forEach(function (element, index, array){
        // console.log(element)
        document.getElementById('tableau').innerHTML += `

        
        <div class="table">
            <div class="nameBlock">
                <p id="username">${element.username}</p>
                <p id="name">${element.name}</p>
            </div>
            <div class="imageAvatar">
                <img src="src/img/Avatar.png" alt="">
            </div>
            <div class="email">
                <p id="email">${element.email}</p>
            </div>
            
        </div>
        `
    });
 })
 .catch((error) => console.log(error));
}
const block = document.querySelector('#block')
const App = document.getElementById('myApp')
const modifBtn = document.getElementById('modif')
function removeElement() {
    block.remove()  
    addNewBlock()
    console.log('voafafa')
}

function createElement() {
    const myBlock = document.createElement('div')
    myBlock.classList.add('userBlock')
    document.append.append(myBlock)
    console.log('misia')
}
modifBtn.addEventListener('click',createElement)
function addNewBlock() {
    const title = document.getElementById('myTitle').innerHTML ='Add a new users ?'
    document.getElementById('myApp').innerHTML += `
        <div class="useradd" id="signUp" style="transition: all 0.9s;">
            <form class="myForm" id="myForm" method="POST">
                <input class="inputValue" type="text" id="name" placeholder="Your name">
                <input class="inputValue" type="text" id="username" placeholder="Your username">
                <input class="inputValue" type="email" id="email" placeholder="Your email">
                <input type="submit" value="submit">
            </form>
        </div>
     ` 
}
const addUserBtn = document.getElementById('addUserBtn')
addUserBtn.addEventListener('click', function(){
    removeElement()
});


let nameInput =document.getElementById('name')
let usernameInput =document.getElementById('username')
let emailInput =document.getElementById('email')
let addUserForms = document.getElementById("myForm");

addUserForms.addEventListener('submit', function(e) {
    e.preventDefault();
    sendData();
    console.log('coucou');

    const sendData = (data) =>{
        axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(response =>{
            console.log(response)   
        })
        .catch(error =>{
            console.log(error)
            getData()
            createElement()
        })
    }
});













