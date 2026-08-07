import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Guitar from './components/Guitar.jsx';
import { db } from './data/db.js';

function App() {

  // Estados para el carrito de compras
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  // Simulando la carga de datos desde una API o base de datos
  useEffect(() => {
    setData(db);
  }, []);

  function addToCart(item) {

    const itemExists = cart.findIndex(element => element.id === item.id);
    if(itemExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity ++;
      setCart(updatedCart);
      return;
    }

    item.quantity = 1;
    setCart(prevState => [...prevState, item]);
  }
  
  return (
    <>
      <Header 
        cart={cart}
      />
      

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
            {data.map((guitar) => (
              <Guitar 
                key={guitar.id}
                guitar={guitar} 
                addToCart={addToCart}
              />
            ))}
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>

    </>
  )
}

export default App
