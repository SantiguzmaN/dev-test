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
