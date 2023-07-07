import React from 'react'
import '../estilos/Pronostico.css'

function Pronostico(props) {
    return (
        <React.Fragment>
            <h3 className='text-center'>Pronóstico para hoy y mañana</h3>
            <hr className='mb-3' />
            <div className='d-flex flex-wrap justify-content-center gap-3 mb-3'>
                <div className="card pronostico-card border-secondary">
                    <div className="card-header">Hoy</div>
                    <div className="card-body">
                        <p className="card-text">
                            {props.today}
                        </p>
                    </div>
                </div>
                <div className="card pronostico-card border-secondary">
                    <div className="card-header">Mañana</div>
                    <div className="card-body">
                        <p className="card-text">
                            {props.tomorrow}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Pronostico;