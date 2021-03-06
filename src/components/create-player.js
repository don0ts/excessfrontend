import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerAcademy: "",
      playerName: "",
      playerPosition: "",
      playerClass: "",
      playerDOB: new Date(),
      playerHeight: "",
      playerWeight: "",
      playerBats: "",
      playerThrows: "",
    };
  }

  onChangePlayerAcademy = (e) => {
    this.setState({
      playerAcademy: e.target.value,
    });
  };

  onChangePlayerName = (e) => {
    this.setState({
      playerName: e.target.value,
    });
  };

  onChangePlayerPosition = (e) => {
    this.setState({
      playerPosition: e.target.value,
    });
  };

  onChangePlayerClass = (e) => {
    this.setState({
      playerClass: e.target.value,
    });
  };

  onChangePlayerDOB = (date) => {
    this.setState({
      playerDOB: date,
    });
  };

  onChangePlayerHeight = (e) => {
    this.setState({
      playerHeight: e.target.value,
    });
  };

  onChangePlayerWeight = (e) => {
    this.setState({
      playerWeight: e.target.value,
    });
  };

  onChangePlayerBats = (e) => {
    this.setState({
      playerBats: e.target.value,
    });
  };

  onChangePlayerThrows = (e) => {
    this.setState({
      playerThrows: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const player = {
      playerAcademy: this.state.playerAcademy,
      playerName: this.state.playerName,
      playerPosition: this.state.playerPosition,
      playerClass: this.state.playerClass,
      playerDOB: this.state.playerDOB,
      playerHeight: this.state.playerHeight,
      playerWeight: this.state.playerWeight,
      playerBats: this.state.playerBats,
      playerThrows: this.state.playerThrows,
    };
    window.alert("Prospecto añadido con éxito");

    console.log(player);

    axios
      .post("https://excessbackend.herokuapp.com/players/add", player)

      .then((res) => console.log(res.data));

      window.location = '/thankyou/'
  };

  render() {
    return (
      <div className="text-light mx-auto">
        <style>
          {`
hr {
    border-color: white;
}
.container{
    height: 100%;
    align-content: center;
    }
    
    .card{
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: auto;
    max-width: 800px;
    background-color: rgba(0,0,0,0.5) !important;
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius: 10px;
    }
    `}
        </style>
        <div className="container card">
          <h3>Planilla de Inscripción</h3>
          <hr />

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>*Academia o Programa: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.playerAcademy}
                onChange={this.onChangePlayerAcademy}
              />
            </div>

            <div className="form-group">
              <label>*Nombre y Apellido del Prospecto: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.playerName}
                onChange={this.onChangePlayerName}
              />
            </div>

            <div className="form-group">
              <label>*Posicion: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.playerPosition}
                onChange={this.onChangePlayerPosition}
              />
            </div>

            <div className="form-group">
              <label>*Clase: </label>
              <input
                type="number"
                required
                className="form-control"
                value={this.state.playerClass}
                onChange={this.onChangePlayerClass}
              />
            </div>

            <br />

            <div className="form-group">
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
                  className="form-control"
                  placeholder="Estatura en pies"
                  value={this.state.playerHeight}
                  onChange={this.onChangePlayerHeight}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
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
                  className="form-control"
                  placeholder="Batea (R/L/S)"
                  value={this.state.playerBats}
                  onChange={this.onChangePlayerBats}
                />
              </div>
              <div className="col ttf">
                <input
                  className="form-control"
                  placeholder="Lanza (R/L/S)"
                  value={this.state.playerThrows}
                  onChange={this.onChangePlayerThrows}
                />
              </div>
            </div>

            <br />
            <p>Nota: Los campos marcados con un asterico son obligatorios.</p>

            <div className="form-group">
              <input
                type="submit"
                value="Inscribir"
                className="btn btn-warning"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
