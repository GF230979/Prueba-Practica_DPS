"use client"
import React, { useState } from 'react';
import styles from './page.module.css'; // Importa los estilos CSS utilizando CSS Modules

const peliculas = [
  { nombre: 'Super Mario Bros. La película.', precio: 19.98 },
  { nombre: 'Rapido y Furioso. Pelicula 10.', precio: 14.99 },
  { nombre: 'Mi villano favorito. Pelicula 2.', precio: 12.92 },
  { nombre: 'Diablo que se viste a la moda.', precio: 16.95 },
  { nombre: 'El espanta tiburones. Pelicula.', precio: 11.98 },
  { nombre: 'La era del hielo.La Pelicula 2.', precio: 18.92 },
  { nombre: 'Decendientes.La Pelicula 1.', precio: 19.99 },
  { nombre: 'Duro de matar.La Pelicula.', precio: 14.93 },
  { nombre: 'La llorona.La pelicula 2.', precio: 17.96 }, 
  { nombre: 'El conjuro.La pelicula 3.', precio: 10.91 },
  { nombre: 'La vida secreta animal.', precio: 15.94 },
  { nombre: 'Sonic.La Pelicula 2.', precio: 20.99 },
  
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [compras, setCompras] = useState([]);

  const agregarCompra = () => {
    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.nombre === selectedMovie);
    if (peliculaSeleccionada) {
      const nuevaCompra = { nombre: peliculaSeleccionada.nombre, precio: peliculaSeleccionada.precio, cantidad: 1 };
      setCompras([...compras, nuevaCompra]);
    }
  };

  const eliminarCompra = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(index, 1);
    setCompras(nuevasCompras);
  };

  const aumentarCantidad = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras[index].cantidad++;
    setCompras(nuevasCompras);
  };

  const disminuirCantidad = (index) => {
    const nuevasCompras = [...compras];
    if (nuevasCompras[index].cantidad > 1) {
      nuevasCompras[index].cantidad--;
      setCompras(nuevasCompras);
    }
  };

  const calcularTotal = () => {
    return compras.reduce((total, compra) => total + (compra.precio * compra.cantidad), 0).toFixed(2);
  };

  return (

    <div className={styles.container}>
      <div className={styles.cajitag}>
      <h1 className={styles.h1}>Lista de Compra de Películas</h1>

<div id="picker">
  <select className={styles.cajas} onChange={(e) => setSelectedMovie(e.target.value)}>
    <option value="">Selecciona una película</option>
    {peliculas.map((pelicula, index) => (
      <option key={index} value={pelicula.nombre}>{pelicula.nombre}</option>
    ))}
  </select>
  <button className={styles.agregarbtn} onClick={agregarCompra}>Agregar</button>
</div>

<div id="lista">
<h1 className={styles.h1}>Lista de Compra</h1>
  <ul >
    {compras.map((compra, index) => (
      <li  key={index} className={styles.lista}>
        <div className={styles.infoPelicula}>
<span className={styles.nombre}>{compra.nombre}</span>
<span className={styles.precio}>${compra.precio.toFixed(2)}</span>
</div>
        <div id="cantidad" className={styles.btn}>
          <button className={styles.btnCantidad} onClick={() => disminuirCantidad(index)}>-</button>
          <input className={styles.inputCantidad} type="text" value={compra.cantidad} readOnly />
          <button className={styles.btnCantidad} onClick={() => aumentarCantidad(index)}>+</button>
          
        </div>
        <button className={styles.eliminarbtn} onClick={() => eliminarCompra(index)}>Eliminar</button>
      </li>
      
    ))}
  </ul>
  <p className={styles.total}>Total: ${calcularTotal()}</p>
</div>
      </div>
     
    </div>
  );
}

export default App;
