let listaContactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Pérez",
    teléfono: "123456789",
    ubicaciones: {
      ciudad: "Ciudad de México",
      dirección: "Calle 123"
    }
  },
  {
    id: 2,
    nombres: "María",
    apellidos: "Gómez",
    teléfono: "987654321",
    ubicaciones: {
      ciudad: "Bogotá",
      dirección: "Carrera 456"
    }
  }
];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function borrarContacto(id) {
  const indice = listaContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  for (let contacto of listaContactos) {
    console.log(contacto);
  }
}

const nuevoContacto = {
  id: 3,
  nombres: "Laura",
  apellidos: "Martínez",
  teléfono: "567890123",
  ubicaciones: {
    ciudad: "Santiago",
    dirección: "Avenida 789"
  }
};
agregarContacto(nuevoContacto);

imprimirContactos();

borrarContacto(1);

imprimirContactos();

function actualizarContacto(id, nuevoInfo) {
  const indice = listaContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    listaContactos[indice] = { ...listaContactos[indice], ...nuevoInfo };
  }
}

const idActualizar = 2;
const nuevaInfo = {
  teléfono: "555555555",
  ubicaciones: {
    ciudad: "Medellín",
    dirección: "Calle 789"
  }
};
actualizarContacto(idActualizar, nuevaInfo);

imprimirContactos();