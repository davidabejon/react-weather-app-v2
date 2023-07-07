import '../estilos/Card.css'

function Card(props) {
    return (
        <div className="card ciudad-card border-secondary">
            <div className="card-header">El tiempo en...</div>
            <div className="card-body">
                <h4 className="card-title">{props.nombre}</h4>
                <p className="card-text">
                    {props.descripcion}
                </p>
                <ul>
                    <li>Máxima: {props.max} °C</li>
                    <li>Mínima: {props.min} °C</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;