import React from 'react';
import { products } from '../data'; // Assuming your products data is available
import Cards from '../components/Cards'; // Assuming your Cards component is here
import { useParams } from 'react-router-dom'; // For dynamic category display

function Products() {
  const { category } = useParams(); // Get category from URL if routing is by category

  // Filter products based on category, or show all if no category is specified
  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products; // Show all products if no category is in the URL

  const pageTitle = category
    ? `${category} Products`
    : 'All Products';

  return (
    <div className="products-page-wrapper">
      <h1 className="products-page-title">{pageTitle}</h1>
      {filteredProducts.length === 0 ? (
        <p className="no-products-message">No products found in this category.</p>
      ) : (
        <div className="product-grid-section"> {/* Re-using the grid section class from Home */}
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-4 col-sm-6 col-xs-12 product-card-column" key={product.id}>
                <Cards product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;