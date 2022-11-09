var productCard=document.getElementById('productCard')

async function productDetails(){
    let url=`https://6350df063e9fa1244e4f2704.mockapi.io/productsdata`
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)  
    res.map((element)=>{
        var {id}=element
        productCard.innerHTML+=`
                        <div id="product${id}"class="col">
                            <div class="card">
                                <img src="https://i.ibb.co/pyPB1v4/14.jpg" style="height: 270px;" class="p-1 card-img-top" alt="...">
                                <div class="card-body m-0 py-0 border">
                                    <h6 class="card-title m-0">${element.product_name}</h6>

                                    <div class="d-flex justify-content-between">
                                        <div id="price${id}"class="m-0 p-0"><b>Price:</b>${element.Price}</div>
                                        <div class="m-0 p-0">
                                            <span id="decrement${id}" onclick="decrementQuantity(${id})"><i class="m-0 p-0 bi bi-dash"></i></span>
                                            <span id="${id}" class="m-0 p-0 card-text">0</span>
                                            <span id="increment${id}" onclick="incrementQuantity(${id})"><i class="m-0 p-0 bi bi-plus"></i></span>
                                            <span id="wishlist${id}"><i class="m-0 p-0 bi bi-heart-fill"></i></span>
                                            <span id="cart${id}"><i class=" m-0 p-0 bi bi-cart-check-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            })
}

productDetails()

let basket=[];
var count=0;

function incrementQuantity(id){
    if(count>=0){
        count++;
        console.log(count)
        // searching in the basket 
        let search=basket.find((x)=> x.id===id)
        if(search===undefined){
            basket.push({
                "id":id,
                "item":1
            })
        }else{
            search.item+=1;
        }       
        console.log(basket)
        update(id)
        
    }else{
        console.log("Cant be incremented")
    }
   
}
function decrementQuantity(id){
    if(count>=1){
        count--;
        console.log(count)
        let search=basket.find((x)=> x.id===id)
        
        if(search.item===0) return;
        else{
            search.item-=1;
        }       
        console.log(basket)
        update(id)
       
    }else{
        console.log("Cant be incremented")
    }
   
}

function update(id){
    let search=basket.find((x)=> x.id===id)
    console.log(search)
    console.log(search.item)
    document.getElementById(id).innerHTML=search.item
}