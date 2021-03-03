import React from 'react';
import { Link } from 'react-router-dom';

const GreetingsPage = () => {
    return (
        <div>
        <style type='text/css'>
        {`
.container{
    height: 100%;
    align-content: center;
    }
    
    .card{
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: auto;
    background-color: rgba(0,0,0,0.5) !important;
    padding-bottom: 30px;
    }
   `}
    </style>
        <div className='container card'>
        <div className='text-light text-center'>
            <br />
            <br />
            <h3>¡GRACIAS POR INSCRIBIRTE!</h3>
            <br />
            <h4>Si deseas inscribir a otro prospecto haz <Link to={"/players/create"}>CLICK AQUÍ</Link></h4>
            <br />
            <h4>Si deseas realizar algún cambio contacta a un administrador.</h4>
            <br />
            <p>Admin Contact: +58 424 650 4898 or grios.j98@gmail.com</p>

        </div>
        </div>
        </div>
    );
}

export default GreetingsPage;