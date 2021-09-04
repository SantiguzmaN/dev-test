export function validarSerial(serial) {
  return fetch(`http://localhost:3000/post/${serial}`)
    .then((resp) => resp.json())
    .then(resp => {
      if (resp.dueño === null) {
        return 'registrar';
      } else if (resp.dueño !== null && resp.dueño !== undefined) {
        return 'dueño';
      } else {
        return 'no existe';
      }
    })
    .catch(() => false);
};

const patchFakeApi = (serial, nombre, mail) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ dueño: nombre, emailDueño: mail }),
  };
  return fetch(`http://localhost:3000/post/${serial}` , requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

export function registroDotacion(body) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ ...body }),
  };
  return fetch('https://g8zx1ghp8j.execute-api.us-east-1.amazonaws.com/crearDotacion', requestOptions)
    .then(response => response.json())
    .then(result => {
      patchFakeApi(body.serialEquipo, body.nombrePropietario, body.mailPropietario);
      return result;
    })
    .catch(error => console.log('error', error));
};
