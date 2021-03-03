import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Player = props => (
    <tr>
        <td>{props.player.playerAcademy}</td>   
        <td>{props.player.playerName}</td>
        <td>{props.player.playerPosition}</td>
        <td>{props.player.playerClass}</td>
        <td>{props.player.playerDOB.substring(0, 10)}</td>
        <td>{props.player.playerHeight}</td>
        <td>{props.player.playerWeight}</td>
        <td>{props.player.playerBats}</td>
        <td>{props.player.playerThrows}</td>
        <td>
            <Link className='text-light' to={"/players/edit/" + props.player._id}>Editar</Link> 
               | 
            <a className='text-light' 
            href="#" 
            onClick={() => { if (window.confirm('Estas seguro de eliminar este elemento?')) props.deletePlayer(props.player._id) }}>
            Eliminar
            </a>
        </td>
    </tr>
)

export default class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.deletePlayer = this.deletePlayer.bind(this);

        this.state = { players: [] };
    }

    componentDidMount() {
        axios.get('https://excessbackend.herokuapp.com/players/')
            .then(response => {
                this.setState({ players: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePlayer(id) {
        axios.delete('https://excessbackend.herokuapp.com/players/' + id)
            .then(res => console.log(res.data));
        this.setState({
            players: this.state.players.filter(el => el._id !== id)
        })
    }

    playerList() {
        return this.state.players.map(currentplayer => {
            return <Player
                player={currentplayer}
                deletePlayer={this.deletePlayer}
                key={currentplayer._id} />;
        })
    }

    render() {
        return (
            <div>

                <style type='text/css'>
                    {`
                  th {
                      background-color: #e6ac00;
                      color: #23272A;
                  }
               `}
                </style>

                <h3 className='text-light text-center'>Lista de Prospectos</h3>

                <br />

                <table className="table table-striped table-dark mx-auto">
                    <thead>
                        <tr>
                            <th scope='col'>Academia o Programa</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Posicion</th>
                            <th scope='col'>Clase</th>
                            <th scope='col'>Fecha de Nacimiento</th>
                            <th scope='col'>Estatura</th>
                            <th scope='col'>Peso</th>
                            <th scope='col'>Batea</th>
                            <th scope='col'>Lanza</th>
                            <th scope='col'>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.playerList()}
                    </tbody>
                </table>
            </div>
        )
    }
}