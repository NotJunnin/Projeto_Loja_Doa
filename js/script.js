document.addEventListener('DOMContentLoaded', function(){
    let products = document.querySelector('.products')
    const searchInput = document.querySelector('[dataSearch]')
        async function fetchProducts(url){
            try {
                let data = await fetch(url);
                let response = await data.json();

                for (let i = 0; i < response.length; i++) {
                    let description = response[i].description;
                    let title = response[i].title;
                    products.innerHTML += `
                    <div class="item">
                        <img src="${response[i].image}" alt="${response[i].category}" class="itemImg">
                        <div class="itemProduct">
                            <h2 class="itemTitle">${title.length > 21 ? title.substring(0, 20).concat('...') : title}</h2>
                            <h4 class="itemCategory">${response[i].category}</h4>
                            <p class="itemDescription">${description.length > 40 ? description.substring(0, 40).concat('...more') : description}</p>
                            <div class="itemPriceAndRatingBox">
                                <h3 class="itemPrice">${response[i].price}</h3>
                                <h3 class="itemRating">${response[i].rating.rate}</h3>
                            </div>
                            <div class="addCartBox">
                            <h4 class="itemCount">Unit(s): ${response[i].rating.count}</h4>
                                <a href="#!" dataItemId="${response[i].id}" class="addToCart"><ion-icon name="cart-outline"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                    `;
                }
            }
        catch(err){
            console.log(err);
        }
    };
    fetchProducts('https://fakestoreapi.com/products');
});