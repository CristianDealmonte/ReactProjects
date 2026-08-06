import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Guitar from './components/Guitar.jsx';
import { db } from './data/db.js';

function App() {

  // Estados para el carrito de compras
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos desde una API o base de datos
    setData(db);
  }, []);
  
  return (
    <>
      <Header />
      

      <main class="container-xl mt-5">
          <h2 class="text-center">Nuestra Colección</h2>

          <div class="row mt-5">
              <Guitar />
              <Guitar />
              <Guitar />
          </div>
      </main>


      <footer class="bg-dark mt-5 py-5">
          <div class="container-xl">
              <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>

    </>
  )
}

export default App
