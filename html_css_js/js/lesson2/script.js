

function onAddTask() {
// id-si task olan elemetin deyerini task deyisenine menimset
var task=document.getElementById('task').value;// var task='java oyren';
var day=document.getElementById('day').value;
// yeni tr elementi yarat
var tr = document.createElement('tr');
// id-si tbody olan elementi tbody deyisenine menimsedir
var tbody=document.getElementById('tbody');
// tr elementini tbody-ye eleve edir
tbody.appendChild(tr);
// yeni td elementi yaradir ve onu tdTask deyisenine menimsedir 
var tdTask=document.createElement('td');
// tdTask elementinin daxiline task deyiseninde olan deyeri daxil edir.
tdTask.innerHTML=task;
// tdTask elementini tr elementine daxil edir
 
var tdId=document.createElement('td');
tdId.innerHTML='1';// burada ki olan default 1 deyerini avtomatik artana cevirek,

var tdDay=document.createElement('td');
tdDay.innerHTML=day;

tr.appendChild(tdId);
tr.appendChild(tdTask);
tr.appendChild(tdDay);
}