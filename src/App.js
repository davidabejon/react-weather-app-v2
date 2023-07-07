import './App.css';
import Footer from './componentes/Footer';
import Vista from './componentes/Vista'
import React, { useState } from 'react'

function App() {

  const [titulo, setTitulo] = useState('')

  return (
    <React.Fragment>
      <h1 className='text-center mt-4'>{titulo === '' ? 'El tiempo' : titulo}</h1>
      <hr></hr>
      <div className="container">
        <Vista
          setTitulo={setTitulo}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
