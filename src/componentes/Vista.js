import '../estilos/Vista.css'
import Card from "./Card";
import Loading from './Loading';
import Pronostico from './Pronostico';
import Select from "./Select";
import React, { useEffect, useState } from 'react'

function Vista(props) {

    const [provincias, setDatos] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [today, setToday] = useState('');
    const [tomorrow, setTomorrow] = useState('');
    
    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = () => {
        let url = 'https://www.el-tiempo.net/api/json/v2/provincias'
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => setDatos(resultado.provincias));
    }
    const consultarApiCiudades = codigo => {
        let url = `https://www.el-tiempo.net/api/json/v2/provincias/${codigo}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => setCiudades(resultado.ciudades));
    }
    const consultarApiToday = codigo => {
        let url = `https://www.el-tiempo.net/api/json/v2/provincias/${codigo}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => setToday(resultado.today.p));
    }
    const consultarApiTomorrow = codigo => {
        let url = `https://www.el-tiempo.net/api/json/v2/provincias/${codigo}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => setTomorrow(resultado.tomorrow.p));
    }
    const consultarApiTitulo = codigo => {
        let url = `https://www.el-tiempo.net/api/json/v2/provincias/${codigo}`
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => props.setTitulo(resultado.title));
    }
    const borrarCiudades = () => {
        setCiudades([]);
    }

    return (
        <React.Fragment>
            <Select
                provincias={provincias}
                consultarApiCiudades={consultarApiCiudades}
                borrarCiudades={borrarCiudades}
                consultarApiToday={consultarApiToday}
                consultarApiTomorrow={consultarApiTomorrow}
                consultarApiTitulo={consultarApiTitulo}
                setTitulo={props.setTitulo}
                setCargando={props.setCargando}
            />

            {
                props.cargando ? 
                <div className='d-flex justify-content-center align-items-center'><Loading /></div>
                :
                <>
                    {ciudades.length === 0 ? '' :
                        <React.Fragment>
                            <Pronostico today={today} tomorrow={tomorrow} />
                            <h3 className='text-center'>Información sobre ciudades principales</h3>
                            <hr className='mb-3' />
                        </React.Fragment>
                    }
                    
                    
                    <div className="d-flex gap-2 flex-wrap justify-content-center">
                        {ciudades.map(ciudad => {
                            return (
                                <Card
                                    key={ciudad.id}
                                    nombre={ciudad.name}
                                    descripcion={ciudad.stateSky.description}
                                    max={ciudad.temperatures.max}
                                    min={ciudad.temperatures.min}
                                />
                            );
                        })}
                    </div>
                </>
            }
        </React.Fragment>
    );
}

export default Vista;