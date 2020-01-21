import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	// This code stores the state passed down via ProductContext in the stateFromApp variable
	const { products, addItem } = useContext(ProductContext);

	// This code returns a card for each product (book in this case), and sets the properties (key, product, addItem) equal to those passed down from App.js via ProductContext
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
