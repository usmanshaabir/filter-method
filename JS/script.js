// JAVASCRIPT
const users = [
    {
        fullName: "Ali",
        country: "Pakistan",
        city: "FSD",
        age: "19",
        status: "active",
        id: "1",
    },
    {
        fullName: "Ali",
        country: "Pakistan",
        city: "FSD",
        age: "19",
        status: "active",
        id: "2",
    },
    {
        fullName: "Ahmad",
        country: "USA",
        city: "LA",
        age: "20",
        status: "inactive",
        id: "3",
    },
    {
        fullName: "Arham",
        country: "UAE",
        city: "Dubai",
        age: "30",
        status: "active",
        id: "4",
    },
    {
        fullName: "usman",
        country: "India",
        city: "Delhi",
        age: "59",
        status: "deleted",
        id: "5",
    },
];
const tableBody = document.getElementById('tableBody');
users.forEach(user => {
    tableBody.innerHTML += `<tr> 
    <td>${user.id} </td>
    <td>${user.fullName} </td>
    <td>${user.country} </td>
    <td>${user.city} </td>
    <td>${user.age} </td>
    <td>${user.status} </td>
    </tr>`

})
function checkActive() {
    let found = users.filter(user => user.status === "active")
    tableBody.innerHTML = ""; // clear existing table
    console.log(found);
    found.forEach (user =>{
        tableBody.innerHTML += `<tr> 
        <td>${user.id} </td>
        <td>${user.fullName} </td>
        <td>${user.country} </td>
        <td>${user.city} </td>
        <td>${user.age} </td>
        <td>${user.status} </td>
        </tr>`
    })

}
function checkInactive() {
    let inactive = users.filter(user => user.status === 'inactive');
    console.log(inactive);
    tableBody.innerHTML = '';
    inactive.forEach(user => {
        tableBody.innerHTML += `<tr> 
        <td>${user.id} </td>
        <td>${user.fullName} </td>
        <td>${user.country} </td>
        <td>${user.city} </td>
        <td>${user.age} </td>
        <td>${user.status} </td>
        </tr>`
    })
}

function checkDelete() {
    let deleted = users.filter ( student => student.status === 'deleted')
    tableBody.innerHTML = '';
    deleted.forEach ( student => {
        tableBody.innerHTML += `<tr> 
        <td>${student.id} </td>
        <td>${student.fullName} </td>
        <td>${student.country} </td>
        <td>${student.city} </td>
        <td>${student.age} </td>
        <td>${student.status} </td>
        </tr>`
    })
} 
  
function checkStatus (){
    let selected=document.querySelector ('#form-select');
    let optionalSelect = selected.options[selected.selectedIndex].value

    if ( optionalSelect ==1 ){
        checkActive();
    } else if (optionalSelect ==2){
        checkInactive();
    } else if (optionalSelect ==3){
        checkDelete();
    }
}




