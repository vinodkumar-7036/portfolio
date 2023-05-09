import React, { useState } from "react";
import axios from "axios";

function Orders() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState();
  const [cartData, setCartData] = useState([]);
  const [cost, setCost] = useState(0);
  const [viewCart, setViewCart] = useState(true);
  const getData = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${category}`)
      .then((response) => setProducts(response.data.products));
  };

  const addToCart = (data, optional) => {
    data.itemsInCart = 1;
    if (!cartData.includes(data)) {
      setCartData([...cartData, data]);
      setCost(cost + data?.price);
    }
    if (optional === "increase") {
      console.log("::::>");
      data.itemsInCart = data.itemsInCart + 1;
      setCost(cost + data?.price);
    } else if (optional === "decrease") {
      data.itemsInCart = data.itemsInCart - 1;
      setCost(cost - data?.price);
    }
  };
  return (
    <>
      <div className="App">
        {viewCart && (
          <div>
            <label>Enter Product:</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
            <button onClick={getData}>Get Data</button>

            {products && (
              <div className="container">
                <div>
                  <figure>
                    <img
                      src={products[0].images[0]}
                      alt="Trulli"
                      width="500"
                      height="333"
                    ></img>

                    <figcaption>{`${products[0].title} and price is${products[0].price} and discount is${products[0].discountPercentage} `}</figcaption>
                  </figure>
                  <button onClick={() => addToCart(products[0])}>
                    Add to Cart
                  </button>
                  <button onClick={() => setViewCart(!viewCart)}>
                    View Cart
                  </button>
                </div>
                <div>
                  <figure>
                    <img
                      src={products[1].images[0]}
                      alt="Trulli"
                      width="500"
                      height="333"
                    ></img>

                    <figcaption>{`${products[1].title} and price is${products[1].price} and discount is${products[1].discountPercentage} `}</figcaption>
                  </figure>
                  <button onClick={() => addToCart(products[1])}>
                    Add to Cart
                  </button>
                  <button>Go to Cart</button>
                </div>
                <div>
                  <figure>
                    <img
                      src={products[2].images[2]}
                      alt="Trulli"
                      width="500"
                      height="333"
                    ></img>

                    <figcaption>{`${products[2].title} and price is${products[2].price} and discount is${products[2].discountPercentage} `}</figcaption>
                  </figure>
                  <button onClick={() => addToCart(products[2])}>
                    Add to Cart
                  </button>
                  <button>Go to Cart</button>
                </div>
              </div>
            )}
          </div>
        )}
        {!viewCart && (
          <div>
            <div>
              <button onClick={() => setViewCart(!viewCart)}>Go Back</button>
            </div>

            {cartData.map((product) => {
              return (
                <div>
                  <p>{product.title}</p>
                  <figure>
                    <img
                      src={product?.images[0]}
                      alt="Trulli"
                      width="500"
                      height="333"
                    ></img>

                    <figcaption>{`${product.title} and price is${product.price} and discount is${product.discountPercentage} `}</figcaption>
                  </figure>
                  <button onClick={addToCart(product, "increase")}>
                    increment
                  </button>
                  <p>{product.itemsInCart}</p>
                  <button>decrement</button>
                </div>
              );
            })}

            <button onClick={() => addToCart(products[0])}>Add to Cart</button>
            <button onClick={() => viewCart()}>View Cart</button>
            <h3>Toatal amount:{cost >= 0 ? cost : 0}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
