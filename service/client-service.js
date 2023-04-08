const listaClientes = async () => {
  const respuesta = await fetch("http://localhost:3000/perfil");
  return await respuesta.json();
};

const crearCliente = async (nombre, email) => {
  return await fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = async (id) => {
  return await fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
  return await respuesta.json();
};

const actualizarCliente = async (id, nombre, email) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email }),
    });
    return respuesta;
  } catch (e) {
    console.log(e);
  }
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
