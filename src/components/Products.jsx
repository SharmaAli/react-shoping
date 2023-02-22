import Product from "./Product";

const products = [
    {
      id: 1,
      name: "pizza",
      urlImage:
        "https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 0.01,
    },
    {
      id: 2,
      name: "waxkle",
      urlImage:
        "https://images.pexels.com/photos/616415/pexels-photo-616415.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 0.01,
    },
    {
      id: 3,
      name: "kanna fiiri",
      urlImage:
        "https://images.pexels.com/photos/768009/pexels-photo-768009.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 0.01,
    },
    {
      id: 4,
      name: "waxkle",
      urlImage:
        "https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 0.01,
    },
    {
      id: 5,
      name: "waxkle",
      urlImage:
        "https://images.pexels.com/photos/1120581/pexels-photo-1120581.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 0.01,
    },
    {
        id: 6,
        name: "waxkle",
        urlImage:
          "https://images.pexels.com/photos/1120581/pexels-photo-1120581.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 0.01,
    }
  ];

const Products = () => {
  return (
    <div className="grid">
    {products.map(product =>(
        
        <Product key={product.id} product={product} />
   
        
    ))}
    </div>
  )
}

export default Products