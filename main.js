fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)

                
            let productEl=""

            for (let product of json){
                productEl+= `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                <div class="card" >
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">$${product.price}</p>
                      <a href="#" class="btn btn-primary">View product</a>
                    </div>
                    </div>
                </div> `
                



            }
            let  product_list=document.getElementById("product_list")
            product_list.innerHTML=productEl
        })

       
        document.getElementById("searchForm").addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form from refreshing the page
        
            let searchInput = document.getElementById("searchInput").value.toUpperCase();
            let allProducts = document.querySelectorAll(".card"); // Select all products
            let productList = document.getElementById("product_list"); // The parent container for products
        
            let filteredProducts = Array.from(allProducts).filter((card) => {
                let title = card.querySelector(".card-title").innerHTML.toUpperCase();
                return title.includes(searchInput);
            });
        
           
            productList.innerHTML = ""; 
            filteredProducts.forEach((product) => {
                productList.appendChild(product);
            });
        });
        