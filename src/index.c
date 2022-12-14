* {

    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;


}

.App {
    max-width: 1550px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 15px;
    box-shadow: 0 2px 6px #08a05ca4;
    box-sizing: border-box;




}

/* ================  HEADER  =============== */

header {
    margin: 0 auto;
    min-height: 100px;
    width: 97%;
    max-width: 1530px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 5px 10px #08a05c50;

}

a {
    color: rgba(0, 0, 0, 0.765);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
}

a:hover {
    color: brown;


}

li {
    list-style: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

}

li:hover {
    transform: scale(1.1)
}

ul {
    display: flex;
}

header .cart- {
    position: relative;
    cursor: pointer;
}

header .cart- box-icon {
    width: 45px;
    height: 45px;
}

header .item__total {
    position: absolute;
    top: -0.7rem;
    left: 1.5rem;
    width: 2rem;
    height: 2rem;
    background-color: red;
    padding: 1px 5px;
    border-radius: 50%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 0;

}

/* ================== INICIO ========================== */

.inicio {
    width: 100%;
    padding: 10rem 0 0 0;
    padding-top: 9rem;
}

.inicio h1 {
    font-size: 1.5rem;
    color: #08a05c;
}

.inicio img {
    width: 100%;
}

/* ============ PRODUCT ============= */

.title {
    font-size: 2rem;
    padding: 10rem 0 0 0;
    color: #08a05c;
}

.products {
    padding: 5rem 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 3rem 2rem;
    box-sizing: border-box;
}

.product {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 10px 10px 2px rgba(0, 0, 0, 0.2);
    border: 6px solid transparent;
    border-radius: 5px;
}

.product:hover {
    border: 6px solid #08a05c55;
}

.product__img img {
width: 350px;

}

.product__footer {
    text-align: center;
    padding: 1rem;
}

.product__footer h1 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #1a202c;
    font-family: Helvetica, sans-serif;
}

.product__footer p {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.55);
    text-transform: uppercase;
    font-size: 18px;
}

.product .price {
    font-size: 2rem;
    color: #1a202c;
}

.product .button {
    padding: 0 1rem;
    margin: 1rem;
    width: 100%;
    height: 45px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem 3rem;
}


.button .btn {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
}

.button button {
    background-color: #3033d3;
    max-width: 250px;
    width: 100%;
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
}

.button div {
    background-color: #08a05c;
    display: grid;
    align-items: center;
    margin-left: -2rem;
    border-radius: 5px;
    text-align: center;
}

.button div a {
    color: white;
    font-weight: 700;
}

.button div a:hover {
    color: white;
}


/* ================ CARTS =================== */

.carts {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    padding-bottom: 5rem;
    opacity: 0;
    visibility: hidden;
}

.cart {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.5);
    width: 60%;
    height: 80%;
    border-radius: 8px;
    border-radius: 8px;
    overflow-x: scroll;
    transition: all 300ms ease-in-out;
    background-color: white;
    opacity: 0;
    visibility: hidden;
}

.cart h2 {
    text-align: center;
    font-size: 2rem;
}

.cart.show {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
    visibility: visible;
}

.carts.show {
    opacity: 1;
    visibility: visible;
}

.cart__close box-icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transform: all 300ms ease-in-out;
    margin: 3rem 0 0 2rem;
}

.cart__close box-icon:hover {
    fill: crimson;
}

.cart__center {
    width: 90%;
    margin: 0 auto;
}

.cart__item {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    width: 80%;
    margin: 2rem 0;
    border-radius: 5px;
    box-shadow: 0 1px 10px #08a05c;
}

.cart__item img {
    width: 9rem;
}

.cart__item h3 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: Helvetica, sans-serif;
}

.cart__item .price {
    color: #1a202c;
    font-size: 2rem;
    font-weight: bold;
    text-align: start;
    margin-left: -1rem;
}

.cart__item box-icon {
    margin-top: .3rem;
    width: 40px;
    height: 40px;
    fill: #08a05c;
    cursor: pointer;
}

.cart__item .count {
    font-size: 2rem;
    font-weight: bold;
    margin-left: .6rem;
}

.cart__item .remove__item box-icon {
    width: 60px;
    height: 80px;
    fill: crimson;
    margin-top: 2rem;
}

.cart__footer {
    text-align: center;
    margin-bottom: 3rem;
}

.cart__footer h3 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
}

.cart__footer .btn {
    display: inline-block;
    padding: .3rem 1rem;
    font-size: 1.2rem;
    background-color: #08a05c;
    border: 0;
    outline: 0;
    cursor: pointer;
}

.cart__footer .btn:hover {
    background-color: #056b3d;
}

/* ================ DETAIL_PRODUCTS ================ */
/* product */

.detail {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 13rem 1rem 1rem 1rem;
    box-sizing: border-box;
}

.shoe {
   max-width: 800px;
   margin: 0 auto;
}
.detal h2{
    font-size: 3rem;
    width: 100%;
    min-width: 1000px;
    margin: 0 auto;
    font-family: Helvetica, sans-serif;
}
.detail .price{
    width: 100%;
    font-size: 3rem;
    color: #056b3d;
}

.detail button{
    max-width: 300px;
    margin: 1px 0 0 0 ;
    padding: 1rem;
    border: none;
    outline: 0;
    background-color: #3033d3;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    color: white;
}


.detail input{
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 2rem;
}
.detail img{
    min-height: 300px;
    object-fit: contain;
    margin-top: -7rem;
    z-index: -1;
}

.detail .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1rem;
    max-width: 350px;
}
.detail .grid > .new, .size{
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
} 

.detail .grid .new{
    background-color: #056b3d;
}
.detail .grid .size{
    display: flex;
    flex-direction: row-reverse;
    background-color: #f1365b;
    justify-content: space-around;
}

.detail .grid .size select{
    border: none;
    outline: 0;
    font-size: 1rem;
    background-color: #ececec;


}

.detail .description{
    font-size: 1.1rem;
    max-width: 1300px;
    width: 100%;
    letter-spacing: 1.1px;
    color: #5f5d5d;
    margin: 0 auto;
    font-weight: 500;
}

.detail .description b{
    font-size: 1.4rem;
    color: #30333a;
}

.related{
    text-align: center;
    background-color: #2e2e2e;
    color: white;
    max-width: 350px;
    width: 100%;
    margin: 2rem auto;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

/* ============== MEDIA ============ */

@media only screen and (max-width: 600px) {
    header ul {
        display: none;
    }
}

@media only screen and (max-width: 1000px) {
    .cart {
        width: 100%;
        height: 100%;
        padding: 1rem;
    }

    .cart__item h3 {
        font-size: 1.2rem;
    }
}

@media only screen and (max-width: 450px) {
    .cart__item h3 {
        display: .5rem;
    }

    .cart__item .remove__item box-icon {
        width: 30px;
        height: 70px;
    }
}