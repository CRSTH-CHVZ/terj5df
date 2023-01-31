import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: [],
      name: '',
      surename: ''
    }
  }
  changeName = (e) => {
    const newString = e.target.value;
    this.setState( () => {
      return{ name: newString}
    })
  }
  changeSurename = (e) => {
    const newString = e.target.value;
    this.setState( () => {
      return{ surename: newString}
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // const newGuest = `${this.state.name} ${this.state.surename}`;
    const otherGuest = this.state.guests;
    const newGuest = {
      name: this.state.name,
      surename: this.state.surename
    };
    this.setState( ( state ) => {
      return {
        guests: [ ...otherGuest, newGuest],
        name: '',
        surename: ''
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text"
                       className="form-control"
                       name="first-name"
                       value={ this.state.name }
                       onChange={ this.changeName }
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    name="last-name"
                    value={ this.state.surename }
                    onChange={ this.changeSurename }
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.guests.length >= 1 ?
                      this.state.guests.map( ( el, i ) => {
                        return(
                            <tr key={i}>
                              <th>{el.name}</th>
                              <th>{el.surename}</th>
                            </tr>
                        )
                      })
                      : 'No hay invitados registrados'
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


