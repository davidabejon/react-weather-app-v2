import '../estilos/Select.css'

function Select(props) {

    const handleChange = (e) => {
        const value = document.getElementById("selectProvincia").value;
        if (value !== "") {
            props.consultarApiCiudades(value);
            props.consultarApiToday(value);
            props.consultarApiTomorrow(value);
            props.consultarApiTitulo(value);
        }
        else {
            props.borrarCiudades();
            props.setTitulo('')
        }
    }

    return (
        <div className="form-group select text-center">
            <label htmlFor="selectProvincia" className="form-label mt-4">Seleccione una provincia</label>
            <select onChange={handleChange} className="form-select mb-4" id="selectProvincia">
                <option value="">------</option>
                {props.provincias.map(provincia => {
                    return (
                        <option value={provincia.CODPROV} key={provincia.CODPROV}>{provincia.NOMBRE_PROVINCIA}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default Select;