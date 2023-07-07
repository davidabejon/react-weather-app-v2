import '../estilos/Footer.css'

function Footer() {
    return (
        <footer className='text-center mt-2 mb-2 pt-1 pb-1'>
            <p>
                Información meteorológica creada por © AEMET (<a href='https://www.aemet.es' target='_blank'>aemet.es</a>)
                <br></br>
                API desarrollada por <a href='https://www.el-tiempo.net/api' target='_blank'>el-tiempo-net</a>
            </p>
        </footer>
    );
}

export default Footer;