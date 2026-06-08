import React from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite }) {
  const stockClass = product.stock <= 3 ? 'stock-badge low' : 'stock-badge';
  const stockText = product.stock <= 3 ? `LAST ${product.stock}` : 'IN STOCK';

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <motion.div
      className='product-card-premium'
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}>
      <div className='product-image-wrapper'>
        <img
          src={product.image}
          alt={product.name}
          className='product-image-premium'
        />
        <div className='product-overlay-premium'>
          <button className='quick-view-premium' onClick={handleAddToCart}>
            QUICK ADD
          </button>
        </div>
        <div className={stockClass}>{stockText}</div>
      </div>

      <div className='product-info-premium'>
        <div className='product-brand'>{product.brand}</div>
        <h3 className='product-title-premium'>{product.name}</h3>
        <div className='product-price-premium'>
          <span className='price-amount'>
            ₽{product.price.toLocaleString()}
          </span>
        </div>

        <div className='product-actions-premium'>
          <button className='add-to-cart-premium' onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <button
            className={`favorite-btn-premium ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}>
            {isFavorite ? '✦' : '☆'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
