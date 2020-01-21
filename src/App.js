import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import { ProductContext } from "./contexts/ProductContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  console.log("This is products: ", products);

  const addItem = item => {
    // This code enables the Add to Cart button at the bottom of each book card
    // When the button is pressed, the addItem function creates the object newItem, and then sets its key/value pairs based on the book's key/value pairs in the data.js file.
    console.log(item);
    const newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image
    };
    // setCart sets new state (?) for 'cart' by spreading in the existing contents of 'cart' and adding newItem
    setCart([...cart, newItem]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      {/* ProductContext.Provider passes to the Products component an object containing the array of books and the addItem function */}
      <ProductContext.Provider value={{ products: products, addItem: addItem }}>
        <Route
          exact
          path="/"
          // render={() => <Products products={products} addItem={addItem} />}
          // This code replaces the above code now that we're passing products and addItem through ProductContext
          component={Products}
        />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
