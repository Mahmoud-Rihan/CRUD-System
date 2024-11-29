
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategeroyInput = document.getElementById('productCategeroyInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var updateFormIndex = 0;
var productContainer  = [];

if (localStorage.getItem('myProduct') != null) 
{
    productContainer =JSON.parse( localStorage.getItem('myProduct'));
    displayProduct(productContainer)
    
}


function addProduct()
{
    var product = 
    {
        name:productNameInput.value,
        price:productPriceInput.value,
        categroy:productCategeroyInput.value,
        description:productDescriptionInput.value,
    }
    productContainer.push(product);
    console.log(productContainer);
    localStorage.setItem('myProduct',JSON.stringify(productContainer));
    clearForm();
    displayProduct(productContainer);
}

function clearForm()
{
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategeroyInput.value = '';
    productDescriptionInput.value = '';
}

function displayProduct(productList)
{
    var cartoonaa = ``;
    for (var i = 0; i < productList.length; i++) 
    {
        cartoonaa +=`
        <tr>
            <td>${ [i] }</td>
            <td>${ productList[i].name }</td>
            <td>${ productList[i].price }</td> 
            <td>${ productList[i].categroy }</td>
            <td>${ productList[i].description }</td>
            <td><button onclick="setUpdate(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
        document.getElementById("tbody").innerHTML = cartoonaa;
    }   
}

function searchProduct(searchTerm) 
{
    var searchResult = [];
    for (var i = 0; i < productContainer.length; i++)
    {
        if (productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) 
        {
            searchResult.push(productContainer[i]);
        }
    } 
    displayProduct(searchResult);
}

function deleteProduct(deleteIndex) 
{
    productContainer.splice(deleteIndex,1);
    localStorage.setItem('myProduct',JSON.stringify(productContainer));
    displayProduct(productContainer)
}

function setUpdate(updateIndex) 
{
    productNameInput.value = productContainer[updateIndex].name;
    productPriceInput.value = productContainer[updateIndex].price;
    productCategeroyInput.value = productContainer[updateIndex].categroy;
    productDescriptionInput.value = productContainer[updateIndex].description;
    updateFormIndex = updateIndex;
    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none')
}
function updateProduct(updateFormIndex)
{
    
    productContainer[updateFormIndex].name = productNameInput.value,
    productContainer[updateFormIndex].price = productPriceInput.value,
    productContainer[updateFormIndex].categroy = productCategeroyInput.value,
    productContainer[updateFormIndex].description = productDescriptionInput.value,     
    localStorage.setItem('myProduct',JSON.stringify(productContainer));
    clearForm();
    displayProduct(productContainer);
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none')
}

productNameInput.onkeyup = function()
{
    var rejexName = /^[A-Z][a-z]{2,9}$/
    var alertName = document.getElementById("alertName");

    if (rejexName.test(productNameInput.value)) 
    {
        addBtn.removeAttribute("disabled");
        productNameInput.classList.remove("is-invalid");
        productNameInput.classList.add("is-valid");
        alertName.classList.add("d-none");
    } else 
    {
        addBtn.disabled=true;
        productNameInput.classList.remove("is-valid");  
        productNameInput.classList.add("is-invalid");
        alertName.classList.remove("d-none");

    } 
}
productPriceInput.onkeyup = function()
{
    var rejexPrice = /^[1-9][0-9][0-9]?[0-9]?[0-9]?$/
    var alertPrice = document.getElementById("alertPrice");

    if (rejexPrice.test(productPriceInput.value)) 
    {
        addBtn.removeAttribute("disabled");
        productPriceInput.classList.remove("is-invalid");
        productPriceInput.classList.add("is-valid");
        alertPrice.classList.add("d-none");
    } else 
    {
        addBtn.disabled=true;
        productPriceInput.classList.remove("is-valid");  
        productPriceInput.classList.add("is-invalid");
        alertPrice.classList.remove("d-none");

    } 
}
productCategeroyInput.onkeyup = function()

{
    var rejexCategroy = /^[A-Z][a-z]{1,9}$/
    var alertCategroy = document.getElementById("alertCategroy");

    if (rejexCategroy.test(productCategeroyInput.value)) 
    {
        addBtn.removeAttribute("disabled");
        productCategeroyInput.classList.remove("is-invalid");
        productCategeroyInput.classList.add("is-valid");
        alertCategroy.classList.add("d-none");
    } else 
    {
        addBtn.disabled=true;
        productCategeroyInput.classList.remove("is-valid");  
        productCategeroyInput.classList.add("is-invalid");
        alertCategroy.classList.remove("d-none");

    } 
}
