function addToBasket(id){
alert(id);
}



function createNewProduct(){
    var productTemplate = document.getElementById("productTemplate");

    var productTemplateCloned = productTemplate.cloneNode(true);

var newProductImage=document.getElementById('image').value;
var newProductName=document.getElementById('name').value;

 productTemplateCloned.getElementsByTagName('img')[0].src=newProductImage;
 productTemplateCloned.getElementsByTagName('h4')[0].innerHTML =newProductName;
    document.getElementById("productContainer").appendChild(productTemplateCloned);
}