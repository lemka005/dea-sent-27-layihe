// bu massivdir!!!
// biz her defe yeni mehsul qeydiyyat ederken, bu yeni mehsul, bu massive elave
// olunacaq, ve bu massivin yaradilmasinda olan novbeti meqsed butun mehsullari bir
// yere toplamaq ve onlari satis penceresinde gostermek.
var products = [];

// bu lazim deyil
function addToBasket(id) {
    alert(id);
}

// bu funksiya yeni mehsul qeydiyyati edir.
function createNewProduct() {

    // bu setirde idsi productTemplate olan div elementi elde edilir.
    // yeni html in daxilinde olan bu element productTemplate deyisenine menimsedilir,
    var productTemplate = document.getElementById("productTemplate");

    // burada productTemplate elementinden klon alinir (yaradilir).
    // bu element yeni yaratmaq istediyimiz mehsul ucun istifade olunacaq.
    // burada olan true deyeri cloneNode funksiyasinda klon olunan obyektin hemde daxilinde olan butun
    // elementlerinde klon olunmasini teskil edir
    var productTemplateCloned = productTemplate.cloneNode(true);

    // bu setirde olan kod, id'si image olan input elementinin daxilinde olan setir deyerini elde edir.
    // ve newProductImage deyisenine menimsedir.
    var newProductImage = document.getElementById('image').value;

    // bu setirde olan kod, id'si name olan input elementinin daxilinde olan setir deyerini elde edir.
    // ve newProductName deyisenine menimsedir
    var newProductName = document.getElementById('name').value;

    // bu setirde olan kod, id'si description olan input elementinin daxilinde olan setir deyerini elde edir.
    // ve newProductDescription deyisenine menimsedir
    var newProductDescription = document.getElementById('description').value;

    // bu setirde olan kod, id'si price olan input elementinin daxilinde olan setir deyerini elde edir.
    // ve newProductPrice deyisenine menimsedir
    var newProductPrice = document.getElementById('price').value;

    // bu kod klonlanmis olan mehsul elementinin daxilinde olan img elementlerinden
    // 1-cisinin src atributunun deyerini teyin edir.
    productTemplateCloned.getElementsByTagName('img')[0].src = newProductImage;

    // bu kod klonlanmis olan mehsul elementinin daxilinde olan 1-ci h4 elementinin 
    // daxilinde olan yazini teyin edir
    productTemplateCloned.getElementsByTagName('h4')[0].innerHTML = newProductName;

    // bu kod klonlanmis olan mehsul elementinin daxilinde olan paraqraflardan 1-cinin
    // daxilinde olan yazini teyin edir
    productTemplateCloned.getElementsByTagName('p')[0].innerHTML = newProductDescription;

    // bu kod klonlanmis olan mehsul elementinin daxilinde olan paraqraflardan 2-cinin
    // daxilinde olan yazini teyin edir
    productTemplateCloned.getElementsByTagName('p')[1].innerHTML = newProductPrice + ' [AZN]';


    // bu kod, butun mehsullari ozunde saxlayan umumi div elementine yeni klonlanmis mehsulu elave edir
    document.getElementById("productContainer").appendChild(productTemplateCloned);

    // bu kod kopiyalanmis olan mehsulu qlobal deyisen olan products massivine daxil edir.
    // bu products massivi butun mehsullarin yuklenmesi zamani istifade olunur 
    products.push(productTemplateCloned);
}// burada mehsul elavesi funksiyasi bitir

// bu funksiya butun qeydiyyat olunmus mehsullari siyahida gostermek ucundur.
function getAllProducts() {
    // bu kod html-de olan id'si products olan div elementini elde edir,
    var productsLocal = document.getElementById('products');
// bu kod mehsulun elave olunmasi zamani, elave olunan yeni mehsulun 
// daxil edildiyi massivin kopiyasini alir
    var productsCopied = products.slice();

    // burada butun movcud mehsullarin uzerinde dovr olunur
    for (var i = 0; i < productsCopied.length; i++) {
        // burada kopiya olunmus massivin i indeksinde olan element elde olunur
        var p = productsCopied[i];
        // cari mehsulun eni teyin olunur
        p.style.width = '200px';
        p.style.float='left';
        // bu kod ise mehsulu satis ucun olan penceredeki siyahiya elave edir
        productsLocal.appendChild(p);
    }
}
