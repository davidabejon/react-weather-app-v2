import './App.css';
import Footer from './componentes/Footer';
import Vista from './componentes/Vista'
import React, { useState, useEffect } from 'react'

function App() {

  const [titulo, setTitulo] = useState('');
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(false);
  }, [titulo]);
  

  return (
    <React.Fragment>
      <h1 className='text-center mt-4'>{titulo === '' ? 'El tiempo' : titulo}</h1>
      <hr></hr>
      <div className="container">
        <Vista
          setTitulo={setTitulo}
          cargando={cargando}
          setCargando={setCargando}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
