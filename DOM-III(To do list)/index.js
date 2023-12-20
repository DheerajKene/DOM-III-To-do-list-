let inp1 = document.getElementById('task');
let inp2 = document.getElementById('priority');
let Form = document.querySelector('form');
let tableBody = document.querySelector('tbody');

alltask = [];
Form.addEventListener('submit', function(e){
e.preventDefault();
Data = {};
Data.task = inp1.value;
Data.priority = inp2.value;
alltask.push(Data);
tableBody.innerHTML = null;

alltask.map((ele)=>{
let row = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');

td1.innerText = ele.task;
td2.innerText  =ele.priority;

row.append(td1, td2);
tableBody.append(row);


})
})