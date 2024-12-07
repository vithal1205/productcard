import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden sm:max-w-md md:max-w-lg lg:max-w-xl">
      {/* Product Image */}
      <img 
        className="w-full h-48 object-cover" 
        src="https://via.placeholder.com/300x200.png?text=Product+Image" 
        alt="Product" 
      />

      <div className="p-6">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Name</h2>

        {/* Product Description */}
        <p className="text-gray-600 mb-4">
          This is a short description of the product. It highlights the key features and benefits of the product in a concise way.
        </p>

        {/* Buy Now Button */}
        <button 
          className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
