import React, { useState } from 'react';
import { validarSerial, registroDotacion } from '../../actions/actions';

const Home = () => {

  const [serialEquipo, setSerialEquipo] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [tipo, setTipo] = useState('');
  const [sistemaOperativo, setSistemaOperativo] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [mailPropietario, setMailPropietario] = useState('');
  const [fechaAsignacion, setFechaAsignacion] = useState('');
  const [hiddenItems, setHiddenItems] = useState(true);



  const handleEditSubmit = (e) => {
    e.preventDefault();
    const body = {
      serialEquipo,
      nombreEquipo,
      tipo,
      sistemaOperativo,
      nombrePropietario,
      mailPropietario,
      fechaAsignacion
    };
    registroDotacion(body).then((data) => {
      if (data.message === 'elemento agregado'){
        alert('La dotacion fue asignada con exito');
        setSerialEquipo('');
        setNombreEquipo('');
        setTipo('');
        setSistemaOperativo('');
        setNombrePropietario('');
        setMailPropietario('');
        setFechaAsignacion('');
        setHiddenItems(true);
      }
    });
  };

  const validar = (e) => {
    e.preventDefault();
    validarSerial(serialEquipo).then((data) => {
      if (data === 'no existe'){
        alert('el serial ingresado no se encuentra registrado en nuestros equipos');
      } else if (data === 'dueño'){
        alert('Ya se encuentra registrado a nombre de otro usuario');
      } else if(data === 'registrar') {
        setHiddenItems(false);
      }
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-center bg-light">
          <form
            className="text-center border w-50 p-5"
            data-testid="login-form"
            onSubmit={e => handleEditSubmit(e)}
          >
            <h2 className="w-100">
              Registro de dotacion
            </h2>
            <div className="row">
              <div className="col-3">
                <p className="mt-1">Serial del equipo</p>
              </div>
              <div className="col-8">
                <input
                  type="input"
                  className="form-control mb-1"
                  name="idForm"
                  placeholder="Serial del equipo"
                  value={serialEquipo}
                  onChange={e => setSerialEquipo(e.target.value)}
                />
              </div>
              <div className="col-1">
                <button className="btn btn-info btn-block" onClick={e => validar(e)}>
                  Validar
                </button>
              </div>
            </div>
            <div className="row" hidden={hiddenItems}>
              <div className="col-3">
                <p className="mt-1">Nombre</p>
              </div>
              <div className="col-9">
                <input
                  type="input"
                  className="form-control mb-1"
                  name="nombre"
                  placeholder="ingrese el nombre"
                  value={nombreEquipo}
                  onChange={e => setNombreEquipo(e.target.value)}
                />
              </div>
            </div>
            <div className="row" hidden={hiddenItems}>
              <div className="col-2">
                <p className="mt-1">Tipo</p>
              </div>
              <div className="col-4">
                <input
                  type="input"
                  className="form-control mb-1"
                  name="nombre"
                  placeholder="ingrese el tipo"
                  value={tipo}
                  onChange={e => setTipo(e.target.value)}
                />
              </div>
              <div className="col-3">
                <p className="mt-1">Sistema operativo</p>
              </div>
              <div className="col-3">
                <input
                  type="input"
                  className="form-control mb-1"
                  name="so"
                  placeholder="ingrese el S.O"
                  value={sistemaOperativo}
                  onChange={e => setSistemaOperativo(e.target.value)}
                />
              </div>
            </div>
            <div className="row" hidden={hiddenItems}>
              <div className="col-3">
                <p className="mt-1">Nombre (propietario)</p>
              </div>
              <div className="col-9">
                <input
                  type="input"
                  className="form-control mb-1"
                  name="nombrePropietario"
                  placeholder="Nombre del propietario"
                  value={nombrePropietario}
                  onChange={e => setNombrePropietario(e.target.value)}
                />
              </div>
            </div>
            <div className="row" hidden={hiddenItems}>
              <div className="col-3">
                <p className="mt-1">Email (propietario)</p>
              </div>
              <div className="col-9">
                <input
                  type="email"
                  className="form-control mb-1"
                  name="mailPropietario"
                  placeholder="Email del propietario"
                  value={mailPropietario}
                  onChange={e => setMailPropietario(e.target.value)}
                />
              </div>
            </div>
            <div className="row" hidden={hiddenItems}>
              <div className="col-3">
                <p className="mt-1">Fecha de Asignacion</p>
              </div>
              <div className="col-9">
                <input
                  type="date"
                  className="form-control mb-1"
                  name="fechaAsignacion"
                  placeholder="Fecha de asignacion"
                  value={fechaAsignacion}
                  onChange={e => setFechaAsignacion(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-info btn-block my-2" type="submit" data-testid="submit" hidden={hiddenItems}>
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
