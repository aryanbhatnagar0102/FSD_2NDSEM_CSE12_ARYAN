let employees=[];

function addEmployee(){
let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let salary=parseFloat(document.getElementById("salary").value);
let dept=document.getElementById("dept").value;

if(name==""||id==""||isNaN(salary)||dept==""){
alert("Fill all fields");
return;
}

employees.push({name:name,id:id,salary:salary,dept:dept});

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("dept").value="";
}

function displayEmployees(){
let out="<h3>All Employees</h3>";
employees.forEach(e=>{
out+=`Name: ${e.name} | ID: ${e.id} | Salary: ₹${e.salary} | Dept: ${e.dept}<br>`;
});
document.getElementById("output").innerHTML=out;
}

function filterSalary(){
let out="<h3>Salary > 50000</h3>";
employees.filter(e=>e.salary>50000).forEach(e=>{
out+=`Name: ${e.name} | Salary: ₹${e.salary}<br>`;
});
document.getElementById("output").innerHTML=out;
}

function totalSalary(){
let total=employees.reduce((s,e)=>s+e.salary,0);
document.getElementById("output").innerHTML="Total Salary: ₹"+total;
}

function averageSalary(){
if(employees.length==0){
document.getElementById("output").innerHTML="No data";
return;
}
let total=employees.reduce((s,e)=>s+e.salary,0);
document.getElementById("output").innerHTML="Average Salary: ₹"+(total/employees.length).toFixed(2);
}

function countDept(){
let d=prompt("Enter Department");
let count=employees.filter(e=>e.dept==d).length;
document.getElementById("output").innerHTML="Employees in "+d+": "+count;
}