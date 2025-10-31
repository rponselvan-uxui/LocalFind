
import React, { useState } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img className="w-full h-48 object-cover" alt={product.name} src={product.imageUrl} />
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white transition-all"
        >
          <span className={`material-symbols-outlined ${isFavorite ? 'text-primary' : ''}`} style={{ fontSize: '20px' }}>
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-text-light dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.shopName}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-bold text-lg text-primary">{product.price}</p>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-accent" style={{ fontSize: '16px' }}>star</span>
            <span className="text-sm font-medium text-text-light dark:text-text-dark">{product.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{product.distance}</p>
      </div>
    </div>
  );
};

export default ProductCard;
