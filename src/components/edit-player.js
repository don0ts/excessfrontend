import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerAcademy: '',
            playerName: '',
            playerPosition: '',
            playerClass: '',
            playerDOB: new Date(),
            playerHeight: '',
            playerWeight: '',
            playerBats: '',
            playerThrows: ''
        }
    }

    componentDidMount() {

        axios.get('https://excessbackend.herokuapp.com/players/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    playerAcademy: response.data.playerAcademy,
                    playerName: response.data.playerName,
                    playerPosition: response.data.playerPosition,
                    playerClass: response.data.playerClass,
                    playerDOB: new Date(response.data.playerDOB),
                    playerHeight: response.data.playerHeight,
                    playerWeight: response.data.playerWeight,
                    playerBats: response.data.playerBats,
                    playerThrows: response.data.playerThrows
                })
            })
    }

    onChangePlayerAcademy = (e) => {
        this.setState({
            playerAcademy: e.target.value
        });
    }

    onChangePlayerName = (e) => {
        this.setState({
            playerName: e.target.value
        });
    }

    onChangePlayerPosition = (e) => {
        this.setState({
            playerPosition: e.target.value
        });
    }

    onChangePlayerClass = (e) => {
        this.setState({
            playerClass: e.target.value
        });
    }

    onChangePlayerDOB = (date) => {
        this.setState({
            playerDOB: date
        });
    }

    onChangePlayerHeight = (e) => {
        this.setState({
            playerHeight: e.target.value
        });
    }

    onChangePlayerWeight = (e) => {
        this.setState({
            playerWeight: e.target.value
        });
    }

    onChangePlayerBats = (e) => {
        this.setState({
            playerBats: e.target.value
        });
    }

    onChangePlayerThrows = (e) => {
        this.setState({
            playerThrows: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        window.alert('Informacion actualizada con éxito');
        const player = {
            playerAcademy: this.state.playerAcademy,
            playerName: this.state.playerName,
            playerPosition: this.state.playerPosition,
            playerClass: this.state.playerClass,
            playerDOB: this.state.playerDOB,
            playerHeight: this.state.playerHeight,
            playerWeight: this.state.playerWeight,
            playerBats: this.state.playerBats,
            playerThrows: this.state.playerThrows
        }

        console.log(player);

        axios.put('https://excessbackend.herokuapp.com/players/update/' + this.props.match.params.id, player)
            .then(res => console.log(res.data));

        window.location = '/listofplayers000/'

    }

    render() {
        return (
            <div className='text-light mx-auto'>
                <h3>Editar información del Prospecto</h3>
                <br />

                <form onSubmit={this.onSubmit}>

                <div className='form-group'>
                        <label>Academia, Programa o Agente: </label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.playerAcademy}
                            onChange={this.onChangePlayerAcademy}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Nombre del Prospecto: </label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.playerName}
                            onChange={this.onChangePlayerName}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Posicion: </label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.playerPosition}
                            onChange={this.onChangePlayerPosition}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Clase: </label>
                        <input
                            type='number'
                            className='form-control'
                            value={this.state.playerClass}
                            onChange={this.onChangePlayerClass}
                        />
                    </div>

                    <br />

                    <div className='form-group'>
                        <label>Fecha de Nacimiento (Mes/Dia/Año): </label>
                        <DatePicker
                            selected={this.state.playerDOB}
                            onChange={this.onChangePlayerDOB}
                        />
                    </div>

                    <br />

                    <div className="form-row">
                        <div className="col">
                            <input
                                className='form-control'
                                placeholder="Estatura en pies"
                                value={this.state.playerHeight}
                                onChange={this.onChangePlayerHeight}
                            />
                        </div>
                        <div className="col">
                            <input
                                className='form-control'
                                placeholder="Peso en libras"
                                value={this.state.playerWeight}
                                onChange={this.onChangePlayerWeight}
                            />
                        </div>
                    </div>

                    <br />

                    <div className="form-row">
                        <div className="col">
                            <input
                                className='form-control'
                                placeholder="Batea (R/L/S)"
                                value={this.state.playerBats}
                                onChange={this.onChangePlayerBats}
                            />
                        </div>
                        <div className="col">
                            <input
                                className='form-control'
                                placeholder="Lanza (R/L/S)"
                                value={this.state.playerThrows}
                                onChange={this.onChangePlayerThrows}
                            />
                        </div>
                    </div>

                    <br />

                    <div className='form-group'>
                        <input type='submit' value='Guardar' className='btn btn-warning' />
                    </div>

                </form>
            </div>
        );
    }
}