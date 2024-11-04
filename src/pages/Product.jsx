import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescriotion from '../components/ProductDescriotion';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if(!product) {
    return <div>Product Not Found</div>
  }
  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescriotion />
        <RelatedProducts />
      </div>
    </section>
  )
}

export default Product
