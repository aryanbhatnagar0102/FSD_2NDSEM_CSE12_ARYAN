function calculateResult(){
let n=document.getElementById("subjects").value;
let total=0;

for(let i=1;i<=n;i++){
let marks=parseFloat(prompt("Enter marks for Subject "+i));
total+=marks;
}

let avg=total/n;
let grade,result;

if(avg>=90) grade="A+";
else if(avg>=75) grade="A";
else if(avg>=60) grade="B";
else if(avg>=50) grade="C";
else grade="F";

if(avg>=40) result="PASS";
else result="FAIL";

document.getElementById("result").innerHTML=
"Total Marks: "+total+"<br>"+
"Average Marks: "+avg.toFixed(2)+"<br>"+
"Grade: "+grade+"<br>"+
"Result: "+result;
}