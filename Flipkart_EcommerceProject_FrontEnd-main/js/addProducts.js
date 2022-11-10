
function addProduct(){
    var electonics_id=Number(document.getElementById('electonics_id').value)
    var category_id=Number(document.getElementById('category_id').value)
    var product_id=Number(document.getElementById('product_id').value)
    var product_name=document.getElementById('product_name').value
    var category=document.getElementById('category').value
    var image=document.getElementById('image').value
    var Color=document.getElementById('Color').value
    var Brand=document.getElementById('Brand').value
    var Price=Number(document.getElementById('Price').value)
    var quantity=Number(document.getElementById('quantity').value)

    if(electonics_id!="" && category_id!=""&& product_id!=""&&
    product_name!="" && category!=""&&
    image!="" && Color!=""&&
    Brand!="" && Price!=""&&quantity!=""  
    ){
        createProductsData(electonics_id,category_id, product_name,category,image,Color,Brand,Price,quantity)
        
    }else{
        console.log("Enter all the fields")
    }

    


}

async function createProductsData(electonics_id,category_id, product_name,category,image,Color,Brand,Price,quantity){
    let url="https://6350df063e9fa1244e4f2704.mockapi.io/productsdata"
    let ProductsData=
    {
        "electonics_id":electonics_id,
        "category_id":category_id,
        "product_id":product_id,
        "product_name":product_name,
        "category":category,
        "image":image,
        "Color":Color,
        "Brand":Brand,
        "Price":Price,
        "quantity":quantity
    }          

    let data=await fetch(url,{
        method:"POST",
        headers:{'Content-Type': "application/json"},
        body:JSON.stringify(ProductsData)
    })
    let res=await data.json();
    console.log(res)
}