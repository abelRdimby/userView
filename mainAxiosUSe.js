

axios.get('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
    response.data.forEach(function (element, index, array){
        console.log(element)
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