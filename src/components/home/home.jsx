import React from 'react';

const Home = () => {
  const handleEditSubmit = (e) => {
    e.preventDefault();
    //aca va el metodo para el submit
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-center bg-light">
          <form
            className="text-center border w-50 p-5"
            data-testid="login-form"
            onSubmit={handleEditSubmit}
          >
            <h2 className="w-100">
              validacion de equipo
            </h2>
            <input
              type="input"
              className="form-control"
              name="input"
              placeholder="Input"
            />
            <button className="btn btn-info btn-block my-2" type="submit" data-testid="submit">
              Validar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
