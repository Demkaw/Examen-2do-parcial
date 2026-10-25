
[
  {
    "id": "a1",
    "nombre": "Vorpal Blade",
    "tipo": "Cuerpo a cuerpo",
    "origen": "Wonderland",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563737902335270972/images.png?ex=6adeb7e8&is=6add6668&hm=4fa9ff39240317f65048e7c99f1ee22818ce9cc822e5b84d2beb75155c9363e3&=&format=webp&quality=lossless",
    "descripcion": "El cuchillo de cocina de Alice. Rápido y ligero, es su arma principal.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a2",
    "nombre": "Hobby Horse",
    "tipo": "Cuerpo a cuerpo",
    "origen": "Wonderland",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563740232476655636/latest.png?ex=6adeba14&is=6add6894&hm=4080c0fd3fda44b6c4041e765c8d3d6ad9f55db231e6910bcba1b295e851ecce&=&format=webp&quality=lossless",
    "descripcion": "Un enorme mazo con forma de caballito de juguete. Lento pero devastador.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a3",
    "nombre": "Pepper Grinder",
    "tipo": "Distancia",
    "origen": "Wonderland",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563738147555254373/images.png?ex=6adeb823&is=6add66a3&hm=bd37861361e95080af1704d43865f5d2d3825d5ebaee9832085af62506af2136&=&format=webp&quality=lossless",
    "descripcion": "Un molino de pimienta que dispara ráfagas rápidas contra los enemigos.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a4",
    "nombre": "Teapot Cannon",
    "tipo": "Artillería",
    "origen": "Wonderland",
    "imagen": "imagenes/teapot.png",
    "descripcion": "https://media.discordapp.net/attachments/1440464582530568364/1563739647971037214/latest.png?ex=6adeb988&is=6add6808&hm=90e18a0bf1fdfddf0bdf0d6dadf5a29c17cbba0a7354f4931b55c048b8adbdd7&=&format=webp&quality=lossless.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a5",
    "nombre": "Clockwork Bomb",
    "tipo": "Explosivo",
    "origen": "Wonderland",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563739854293045298/latest.png?ex=6adeb9ba&is=6add683a&hm=31059533f0be28ae46fdc023e435664d74cb1077eaf1c6dc12687e932b11d3a5&=&format=webp&quality=lossless",
    "descripcion": "Una bomba de relojería que Alice coloca y detona tras unos segundos.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "p1",
    "nombre": "Lámpara de Cheshire",
    "tipo": "Distancia",
    "origen": "Bosque de Espejos",
    "imagen": "imagenes/lampara.png",
    "descripcion": "Una linterna cuya sonrisa luminosa flota hacia el enemigo y lo ciega antes de desvanecerse.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "p2",
    "nombre": "Aguja de Costura Roja",
    "tipo": "Cuerpo a cuerpo",
    "origen": "Taller de la Reina",
    "imagen": "imagenes/aguja.png",
    "descripcion": "Una aguja gigante enhebrada con hilo carmesí que ata a los enemigos al suelo.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "p3",
    "nombre": "Reloj de Arena Roto",
    "tipo": "Explosivo",
    "origen": "Desierto del Tiempo",
    "imagen": "imagenes/reloj.png",
    "descripcion": "Estalla en una nube de arena que ralentiza todo lo que toca durante unos segundos.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  }
]

const CLAVE = 'alice_armas';
const FECHA = '2026-10-14T12:00:00Z';
 
const EJEMPLOS = [
  { id: 'a1', nombre: 'Vorpal Blade', tipo: 'Cuerpo a cuerpo', origen: 'Wonderland', imagen: 'imagenes/vorpal.png', descripcion: 'El cuchillo de cocina de Alice. Rápido y ligero, es su arma principal.', fechaCreacion: FECHA },
  { id: 'a2', nombre: 'Hobby Horse', tipo: 'Cuerpo a cuerpo', origen: 'Wonderland', imagen: 'imagenes/hobbyhorse.png', descripcion: 'Un enorme mazo con forma de caballito de juguete. Lento pero devastador.', fechaCreacion: FECHA },
  { id: 'a3', nombre: 'Pepper Grinder', tipo: 'Distancia', origen: 'Wonderland', imagen: 'imagenes/peppergrinder.png', descripcion: 'Un molino de pimienta que dispara ráfagas rápidas contra los enemigos.', fechaCreacion: FECHA },
  { id: 'a4', nombre: 'Teapot Cannon', tipo: 'Artillería', origen: 'Wonderland', imagen: 'imagenes/teapot.png', descripcion: 'Una tetera cañón que lanza proyectiles explosivos de largo alcance.', fechaCreacion: FECHA },
  { id: 'a5', nombre: 'Clockwork Bomb', tipo: 'Explosivo', origen: 'Wonderland', imagen: 'imagenes/clockwork.png', descripcion: 'Una bomba de relojería que Alice coloca y detona tras unos segundos.', fechaCreacion: FECHA },
  { id: 'a6', nombre: 'Bunny Bomb', tipo: 'Explosivo', origen: 'Wonderland', imagen: 'imagenes/bunnybomb.png', descripcion: 'Un conejo mecánico que corre hacia el enemigo y explota al contacto.', fechaCreacion: FECHA },
  // Creación propia
  { id: 'p1', nombre: 'Lámpara de Cheshire', tipo: 'Distancia', origen: 'Bosque de Espejos', imagen: 'imagenes/lampara.png', descripcion: 'Una linterna cuya sonrisa luminosa flota hacia el enemigo y lo ciega antes de desvanecerse.', fechaCreacion: FECHA },
  { id: 'p2', nombre: 'Aguja de Costura Roja', tipo: 'Cuerpo a cuerpo', origen: 'Taller de la Reina', imagen: 'imagenes/aguja.png', descripcion: 'Una aguja gigante enhebrada con hilo carmesí que ata a los enemigos al suelo.', fechaCreacion: FECHA },
  { id: 'p3', nombre: 'Reloj de Arena Roto', tipo: 'Explosivo', origen: 'Desierto del Tiempo', imagen: 'imagenes/reloj.png', descripcion: 'Estalla en una nube de arena que ralentiza todo lo que toca durante unos segundos.', fechaCreacion: FECHA }
];
 
// ====== Estado ======
const $ = (id) => document.getElementById(id);
let armas = cargarArmas();
let idActual = null;
let idEditando = null;
 
// ====== Persistencia ======
function cargarArmas() {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (crudo === null) {                      // primera visita: sembrar ejemplos
      localStorage.setItem(CLAVE, JSON.stringify(EJEMPLOS));
      return [...EJEMPLOS];
    }
    const datos = JSON.parse(crudo);
    if (!Array.isArray(datos)) throw new Error('Formato inválido');
    return datos.filter(a => a && a.id && typeof a.nombre === 'string' && typeof a.tipo === 'string');
  } catch (e) {
    mostrarAviso('Los datos guardados estaban dañados. Empiezas con una colección nueva.', 'es-aviso');
    return [];
  }
}
 
function guardarArmas(nuevas) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(nuevas));
    armas = nuevas;
    return true;
  } catch (e) {
    mostrarAviso('No se pudo guardar: almacenamiento lleno o bloqueado.', 'es-error');
    return false;
  }
}
 
// ====== Utilidades ======
function mostrarAviso(texto, clase = '') {
  const a = $('aviso');
  a.className = `notification aviso ${clase}`;
  a.textContent = texto;
  a.hidden = false;
}
 
function normalizar(t) {
  return String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
 
function coincide(arma, q) {
  return normalizar(arma.nombre).includes(q) || normalizar(arma.tipo).includes(q);
}
 
// Búsqueda: el ciclo while avanza hasta hallar la primera coincidencia; luego se recorre el resto.
function buscarArmas(texto) {
  const q = normalizar(texto);
  const resultados = [];
  let i = 0;
  while (resultados.length === 0 && i < armas.length) {
    if (coincide(armas[i], q)) resultados.push(armas[i]);
    i++;
  }
  for (; i < armas.length; i++) {
    if (coincide(armas[i], q)) resultados.push(armas[i]);
  }
  return resultados;
}
 
// ====== Renderizado ======
function crearFoto(arma, grande = false) {
  const cont = document.createElement('div');
  cont.className = 'foto' + (grande ? ' grande' : '');
  const ini = document.createElement('span');
  ini.className = 'iniciales';
  ini.textContent = arma.nombre.slice(0, 2).toUpperCase();
  cont.appendChild(ini);
  if (arma.imagen) {
    const img = document.createElement('img');
    img.src = arma.imagen;
    img.alt = arma.nombre;
    img.loading = 'lazy';
    img.addEventListener('load', () => { ini.hidden = true; });
    img.addEventListener('error', () => img.remove());   // respaldo: iniciales
    cont.appendChild(img);
  }
  return cont;
}
 
function crearTarjeta(arma) {
  const col = document.createElement('div');
  col.className = 'column is-12-mobile is-6-tablet is-4-desktop';
  const card = document.createElement('article');
  card.className = 'tarjeta';
  const cuerpo = document.createElement('div');
  cuerpo.className = 'tarjeta-cuerpo';
  const tag = document.createElement('span');
  tag.className = 'tag etiqueta';
  tag.textContent = arma.tipo;
  const h3 = document.createElement('h3');
  h3.className = 'tarjeta-nombre';
  h3.textContent = arma.nombre;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'button btn-gris';
  btn.textContent = 'VER DETALLE →';
  btn.addEventListener('click', () => mostrarDetalle(arma.id));
  cuerpo.append(tag, h3, btn);
  card.append(crearFoto(arma), cuerpo);
  col.appendChild(card);
  return col;
}
 
function renderizarGrid() {
  const texto = $('buscar').value;
  const resultados = buscarArmas(texto);
  const grid = $('grid');
  grid.replaceChildren(...resultados.map(crearTarjeta));
  $('contador').textContent = `${resultados.length} arma(s) encontrada(s)`;
 
  const vacio = resultados.length === 0;
  const buscando = texto.trim() !== '';
  $('estadoVacio').hidden = !vacio;
  $('vacioTitulo').textContent = buscando ? '¡SIN RESULTADOS!' : '¡TU ARSENAL ESTÁ VACÍO!';
  $('vacioTexto').textContent = buscando ? 'Prueba con otro nombre o tipo de arma.' : 'Agrega tu primera arma para empezar.';
  $('btnVacio').textContent = buscando ? 'LIMPIAR BÚSQUEDA' : 'AGREGAR ARMA';
}
 
function cambiarVista(v) {
  $('vistaColeccion').hidden = v !== 'coleccion';
  $('vistaDetalle').hidden = v !== 'detalle';
  $('vistaFormulario').hidden = v !== 'formulario';
  window.scrollTo(0, 0);
}
 
function mostrarDetalle(id) {
  const a = armas.find(x => x.id === id);
  if (!a) return;
  idActual = id;
  $('aviso').hidden = true;
  $('detalleFoto').replaceChildren(crearFoto(a, true));
  $('detalleNombre').textContent = a.nombre;
  $('detalleTipo').textContent = a.tipo;
  $('detalleOrigen').textContent = a.origen || 'Desconocido';
  $('detalleDescripcion').textContent = a.descripcion || 'Sin descripción.';
  $('detalleFecha').textContent = a.fechaCreacion ? new Date(a.fechaCreacion).toLocaleDateString('es-MX') : 'Sin fecha';
  cambiarVista('detalle');
}
 
// ====== Formulario ======
function limpiarErrores() {
  ['Nombre', 'Tipo', 'Imagen'].forEach(c => {
    $('err' + c).textContent = '';
    $(c.toLowerCase()).classList.remove('is-danger');
  });
}
 
function abrirFormulario(id = null) {
  idEditando = id;
  $('aviso').hidden = true;
  $('formArma').reset();
  limpiarErrores();
  $('formTitulo').textContent = id ? 'EDITAR ARMA' : 'NUEVA ARMA';
  if (id) {
    const a = armas.find(x => x.id === id);
    if (!a) return;
    $('nombre').value = a.nombre;
    $('tipo').value = a.tipo;
    $('origen').value = a.origen || '';
    $('imagen').value = a.imagen || '';
    $('descripcion').value = a.descripcion || '';
  }
  cambiarVista('formulario');
}
 
function validar(d) {
  limpiarErrores();
  let ok = true;
  const error = (campo, msg) => {
    $('err' + campo[0].toUpperCase() + campo.slice(1)).textContent = msg;
    $(campo).classList.add('is-danger');
    ok = false;
  };
  if (!d.nombre) error('nombre', 'Escribe el nombre del arma.');
  else if (armas.some(a => normalizar(a.nombre) === normalizar(d.nombre) && a.id !== idEditando)) {
    error('nombre', 'Ya existe un arma con ese nombre.');
  }
  if (!d.tipo) error('tipo', 'Selecciona un tipo.');
  if (d.imagen && !/^(imagenes\/[\w./-]+|https?:\/\/\S+)\.(png|jpe?g|webp|gif)$/i.test(d.imagen)) {
    error('imagen', 'Usa una ruta como imagenes/arma.png o una URL de imagen.');
  }
  return ok;
}
 
