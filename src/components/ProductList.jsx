
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../CartSlice';
import Navbar from './Navbar';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 299, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 2, name: 'Peace Lily', price: 399, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
      { id: 3, name: 'Spider Plant', price: 249, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500' },
      { id: 4, name: 'Areca Palm', price: 499, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500' },
      { id: 5, name: 'Rubber Plant', price: 599, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
      { id: 6, name: 'Boston Fern', price: 349, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' }
    ]
  },
  {
    name: 'Aromatic Fragrant Plants',
    plants: [
      { id: 7, name: 'Lavender', price: 299, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500' },
      { id: 8, name: 'Jasmine', price: 249, image: 'https://images.unsplash.com/photo-1597055181300-a8e4b4b1f4c9?w=500' },
      { id: 9, name: 'Rosemary', price: 199, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500' },
      { id: 10, name: 'Mint', price: 149, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500' },
      { id: 11, name: 'Lemon Balm', price: 199, image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500' },
      { id: 12, name: 'Gardenia', price: 399, image: 'https://images.unsplash.com/photo-1597848212624-e6e9c7e0e7c7?w=500' }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      { id: 13, name: 'ZZ Plant', price: 349, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b8a?w=500' },
      { id: 14, name: 'Aloe Vera', price: 199, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 15, name: 'Jade Plant', price: 249, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
      { id: 16, name: 'Pothos', price: 199, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500' },
      { id: 17, name: 'Succulent', price: 149, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
      { id: 18, name: 'Money Plant', price: 299, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(item => item.id === id);

  return (
    <>
      <Navbar />

      <main className="products-page">
        <h1>Our Beautiful Plants</h1>
        <p className="products-intro">
          Bring home nature and make your space greener.
        </p>

        {plantCategories.map(category => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>

            <div className="plant-grid">
              {category.plants.map(plant => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>
                  <p className="plant-price">₹{plant.price}</p>

                  <button
                    disabled={isAdded(plant.id)}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isAdded(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
