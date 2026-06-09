import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import SizeGuide from './SizeGuide';
import ProductCard from './ProductCard';

function ProductPage({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  onBack,
  allProducts,
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const savedViews = JSON.parse(
      localStorage.getItem('recentlyViewed') || '[]',
    );
    const updated = [
      product,
      ...savedViews.filter((p) => p.id !== product.id),
    ].slice(0, 6);
    localStorage.setItem('recentlyViewed', JSON.stringify(updated));
  }, [product]);

  useEffect(() => {
    if (allProducts && product) {
      const sameCategory = allProducts.filter(
        (p) => p.category === product.category && p.id !== product.id,
      );
      setRecommended(sameCategory.slice(0, 4));
    }
  }, [product, allProducts]);

  const handleAdd = () => {
    onAddToCart(product);
  };

  return (
    <div className='product-page'>
      <div className='product-page-container'>
        <button className='back-button' onClick={onBack}>
          ← BACK
        </button>

        <div className='product-page-grid'>
          <div className='product-page-image'>
            <img src={product.image} alt={product.name} />
          </div>

          <div className='product-page-info'>
            <div className='product-page-brand'>{product.brand}</div>
            <h1>{product.name}</h1>
            <div className='product-page-price'>
              ₽{product.price.toLocaleString()}
            </div>

            <div className='product-page-description'>
              <p>{product.description}</p>
            </div>

            <div className='product-page-sizes'>
              <div className='sizes-header'>
                <h4>SIZE</h4>
                <button
                  className='size-guide-link'
                  onClick={() => setIsSizeGuideOpen(true)}>
                  Size Guide →
                </button>
              </div>
              <div className='size-grid'>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='product-page-actions'>
              <button className='add-to-cart-page' onClick={handleAdd}>
                ADD TO CART
              </button>
              <button
                className={`favorite-page ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(product.id)}>
                {isFavorite ? '✦' : '☆'}
              </button>
            </div>

            <div className='product-page-meta'>
              <p>FREE SHIPPING ON ORDERS OVER ₽50,000</p>
              <p>14 DAYS RETURN POLICY</p>
            </div>
          </div>
        </div>

        {recommended.length > 0 && (
          <div className='recommended-section'>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className='recommended-grid'>
              {recommended.map((rec) => (
                <div key={rec.id} onClick={() => window.location.reload()}>
                  <ProductCard
                    product={rec}
                    onAddToCart={onAddToCart}
                    onToggleFavorite={onToggleFavorite}
                    isFavorite={false}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <SizeGuide
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

export default ProductPage;
