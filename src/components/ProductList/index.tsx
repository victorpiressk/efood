import ProductCard from '../ProductCard'
import { List } from './styles'

const ProductList = ({ products }: ProductListProps) => (
  <div>
    <div className="container">
      <List>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </List>
    </div>
  </div>
)

export default ProductList
