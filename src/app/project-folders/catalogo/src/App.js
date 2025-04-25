import React, { useState, useEffect } from 'react';

//Componente encabezado con la marca de los productos
//es una fila subencabezado de los productos que ocupa todas las columnas

function ProductBrandRow({ brand }) {
  return (
    <tr>
      <th colSpan="6" style={{ background: 'gray', color: 'white' }}>
        {brand}
      </th>
    </tr>
  );
}

//componente para mostrar un producto por fila, tambien agregar una imagen
function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.rating}</td>
      <td> <img src={product.thumbnail} alt={product.title} style={{
        width: '50px', height: '50px'
      }} /></td>
    </tr>
  );
}

//componente que define la tabla de productos
function ProductTable({ products, filterText, isCheap }) {
  const rows = [];
  let lastBrand = null;
  //es buena practica para buscar texto pasar todo a minusuculas para poder comparar
  products.forEach(product => {
    if (
      product.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }

    {//consideramos baratos los productos menores a 500
    }
    if (isCheap && product.price >= 500) {
      return;
    }

    {//agrupamos por marcas
    }
    if (product.brand !== lastBrand) {
      rows.push(
        <ProductBrandRow
          brand={product.brand}
          key={product.brand}
        />
      );
    }

    //ponemos cada producto en la fila
    rows.push(
      <ProductRow
        product={product}
        key={product.title}
      />
    );
    lastBrand = product.brand;
  });
  return (
    <table style={{
      borderCollapse: 'collapse', border: '1px solid gray'
    }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Calificaciones</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

//componente barra de busqeuda
function SearchBar({ filterText, isCheap, onFilterTextChange,
  onIsCheapChange }) {
  //armamos el campo para busqueda y el checkbox barato
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Buscar..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <br></br>
      <label>
        <input
          type="checkbox"
          checked={isCheap}
          onChange={(e) => onIsCheapChange(e.target.checked)} />
        {' '}
        Solo mostrar productos baratos menores a usd 500
      </label>
    </form>
  );
}

//componente donde esta la estructura de la tabla
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [isCheap, setIsCheap] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isCheap={isCheap}
        onFilterTextChange={setFilterText}
        onIsCheapChange={setIsCheap} />
      <ProductTable
        products={products}
        filterText={filterText}
        isCheap={isCheap} />
    </div>
  );
}

//componente principal
export default function App() {
  const [products, setProducts] = useState([]);
  //obtengo los datos del json publico y los guardo
  useEffect(() => {

    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())      //avisa que es un json el que se recibe
      .then(data => {                         // Almacena los datos en el estado 'products'
        setProducts(data.products);
      })
      .catch(error => {
        console.error('El error es:', error);       //siempre se agrega esto por si ocurre un error: “agarra el error”
      });                                     //y  es para que salga al usuario el aviso y no se rompa todo
  }, []);
  return <FilterableProductTable products={products} />;

  
}