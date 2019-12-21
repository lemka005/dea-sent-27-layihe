var idIndex=0;
 

function onAddTask() {
var task=document.getElementById('task').value;
var day=document.getElementById('day').value;
var registerDate=document.getElementById('registerDate').value;
var category=document.getElementById('category').value;
var tr = document.createElement('tr');
 
var tbody=document.getElementById('tbody');

tbody.appendChild(tr);

var tdTask=document.createElement('td');

tdTask.innerHTML=task;

var tdId=document.createElement('td');
tdId.innerHTML=++idIndex;

var tdDay=document.createElement('td');
tdDay.innerHTML=day;

var tdRegisterDate=document.createElement('td');
tdRegisterDate.innerHTML=registerDate;

var tdCategory=document.createElement('td');
tdCategory.innerHTML=category;

tr.appendChild(tdId);
tr.appendChild(tdTask);
tr.appendChild(tdDay);
tr.appendChild(tdRegisterDate);
tr.appendChild(tdCategory);
}
function onCreateCategory(){
var newCategory=prompt('yeni kateqoriyanin adini daxil edin','k2');

  var category=document.createElement('option');
  category.innerHTML=newCategory;
  var categories=document.getElementById('category');
  var allCategoryOptions=categories.getElementsByTagName('option');
var size=allCategoryOptions.length;
var thisAlreadyInList=false;
for(var i=0;i<size;i++){
    if(newCategory.toLowerCase()==allCategoryOptions[i].innerHTML.trim().toLowerCase()){
        thisAlreadyInList=true;
        break;
    }
}
if(thisAlreadyInList){
    alert('bu artiq var');
}else{
    if(newCategory==''){
        alert('bos qoymayin');
    }else{
        categories.appendChild(category);
    }}
}