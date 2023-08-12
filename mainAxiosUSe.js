
axios.get('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
    response.data.forEach(function (element, index, array){
        // console.log(element)
        document.getElementById('tableau').innerHTML += `
        <tr>
            <th style="text-align: left"><p>${element.name}</p></th>
            <th style="text-align: left"><p>${element.username}</p></th>
            <th style="text-align: left"><p>${element.email}</p></th>
        </tr>
        `
    });
 })
 
 .catch((error) => console.log(error));


const block = document.querySelector('#block')
 const homeSection = document.querySelector('.myApp')
const addUserBtn = document.getElementById('addUserBtn')
let nameInput =document.getElementById('name')
let usernameInput =document.getElementById('username')
let emailInput =document.getElementById('email')
addUserBtn.addEventListener('click', removeElement);

function removeElement() {
    const title = document.getElementById('myTitle').innerHTML ='Add a new users ?'
    console.log(title)
    block.remove()  
    document.getElementById('myApp').innerHTML += `
    <div class="useradd" id="signUp">
        <form class="myForm">
            <input class="inputValue" type="text" id="name" placeholder="Your name">
            <input class="inputValue" type="text" id="username" placeholder="Your username">
            <input class="inputValue" type="email" id="email" placeholder="Your email">
            <input type="submit" value="submit">
        </form>
    </div>
    ` 
}
const form = document.getElementsByClassName(".myForm")

console.log(form)
addUserBtn.addEventListener('click', (e) =>{
    
    axios.post("https://jsonplaceholder.typicode.com/users",{
      name: nameInput,
      username: username.value,
      email: email.value
    })
    .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
    })
})




