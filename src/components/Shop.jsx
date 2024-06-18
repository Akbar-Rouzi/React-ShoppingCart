import { products } from "../products"
import Product from "./Product"

export default function Shop() {
    return (
        <section id="shop">
            <h2>Elegant Clothing For Everyone</h2>
            <ul id="products">
                {
                    products.map(product => (
                        <li key={product.id}>
                            <Product {...product} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}