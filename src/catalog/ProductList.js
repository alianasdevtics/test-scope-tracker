// Product list: each product shows its name and price.
export function ProductList({ products }) {
  return products.map((p) => `${p.name} - PKR ${p.price}`).join('\n')
}
