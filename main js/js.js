let carts = document.querySelectorAll('.add-cart');


let products = [ //3melta kermel bas ekbos 3l product l bde a3mela add tbayen l details te3a bl local storage
    
    {

    	name: 'Macrame Long Dress',
      tag: 'Macrame Long Dress',
      image: 'shop.html',
       price: 25,
       inCart: 0
    },

     {

    	name: 'Rosey Dress',
      tag: 'Rosey Dress',
       price: 35,
       inCart: 0
    },
    
        {

    	name: 'Gold Dress',
      tag: 'Gold Dress',
       price: 40,
       inCart: 0
    },


   {

    	name: 'Red V-neck Dress',
      tag: 'Red V-neck Dress',
       price: 75,
       inCart: 0
    },

   {

    	name:' Black Elegant Dress',
      tag: 'Black Elegant Dress',
       price: 50,
       inCart: 0
    },
 {

    	name:' Royal Dress',
      tag: 'Royal Dress',
       price: 60,
       inCart: 0
    },

];



    
//when i click it shows it was added 
for(let i=0; i<carts.length; i++)
{
	carts[i].addEventListener('click' , () => {
		cartnumber (products[i]);
		totalprice(products[i])
	})
}


//bas a3mel load lal page ydalo l cart number lal products l i added
function onloadCartNB()
{
   let productnumber = localStorage.getItem('cartnumber'); //it will check local storage of an item if it exists

   if(productnumber) //eza fi product nb from local storage 
   {
      document.querySelector('.cart span').textContent = productnumber; //t7otele l nb of products l mawjudden bl localStorage, t7otton bl cart

   }
}




// to know how many items i added/ saves in local storage
function cartnumber (products) {

	let productnumber = localStorage.getItem('cartnumber');
productnumber = parseInt(productnumber); //bt 7awele l characters la string (l2eno bl console bt bayen string w ana bde yeha nb)

   if (productnumber) //if i press 3al product for the first time ha tfut bl else l2eno it doesnt exist awal shi 
   	                  //so ha t7otele bl local storage 1, bas ekbos marra tenye ha tfut bl if l2eno it already exists
   	                  //so bt hotele 2 and so on... 
   {
   	 localStorage.setItem('cartnumber',productnumber + 1);
   	 document.querySelector('.cart span').textContent = productnumber + 1; //3m zeeda bl cart bl nav
   }
   else
   {
   	 localStorage.setItem('cartnumber', 1);
   	 document.querySelector('.cart span').textContent = 1;
   
   }

     setItems(products);



}
 
function setItems(products)
{

	let cartsitems = localStorage.getItem('productsInCart');
	cartsitems = JSON.parse(cartsitems);



  if(cartsitems != null) //not first time clicking so incart will be increased by 1
  {

   if(cartsitems[products.name] == undefined)
   {
   	   cartsitems = {         //to be able to add another product not only the same one
   	  
         ...cartsitems,   //grab whatever on the cart item from before using the rest operator from js
         [products.name]: products  //i just put in it the product
   	  }

   }

  	cartsitems[products.name].inCart += 1;
  }
    else // first time clicking so cart item is null
{
   products.inCart=1; //first time i click the incart = 1
  cartsitems = {

  	[products.name]: products
  }

}
   
  localStorage.setItem("productsInCart", JSON.stringify(cartsitems)); //passing the product aas json stringify la yfarjine l text l mktub
}



function totalprice(products)
{
	let cartprice = localStorage.getItem('totalprice');

 if(cartprice != null)
 {
      cartprice = parseInt(cartprice);  //data type of variable tkun number kermel e2dar a3mel calculation lal total price
       localStorage.setItem("totalprice", cartprice + products.price);
 }

  else
  {
  	localStorage.setItem("totalprice", products.price);
  }
		
}


function displaycart()
{
   let cartsitems = localStorage.getItem('productsInCart');
   cartsitems = JSON.parse(cartsitems);
   let productontainer = document.querySelector(".product");

   if(cartsitems && productontainer)
   {
    productontainer.innerHTML = '';
     
    Object.values(cartsitems).map(item => {

       productontainer.innerHTML += 

         

         ` <div class="container">
                         <main class="grid">
                              <article>
                           <img src="${item.image}">

                          <div class="text">
                          <h3>${item.tag}</h3>
                            <p>${item.price}<p>
                                <p>quantity: ${item.inCart}</p>
                                   <p>Total Price:${item.inCart * item.price}</p>
                            </div>
                                 </article>
                                 </main>
                                 </div>

                                 `





    });





   }

}

onloadCartNB(); //calling the function so it works
/* /* <div class="product">
           <h3>x</h3>
           <img src="./web dev project/${item.tag}.png">
           <span>${item.name}</span>
           

            <div class="p">
            ${item.price}  
             </div>
         <div class="quantity">
         <ion-icon name="arrow-down"></ion-icon>
         </div>
         <h3>&nbsp${item.inCart}</h3>
         <div class="qty2"><ion-icon name="arrow-up-outline"></ion-icon></div>
          
          <div class="tot">${item.inCart * item.price}</div>
         </div>`*/