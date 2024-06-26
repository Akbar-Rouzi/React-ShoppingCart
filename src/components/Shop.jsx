import Product from '../components/Product';
import { PRODUCTS } from '../products';
export default function Shop() {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Product {...product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
