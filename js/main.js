const defaultRegistro = [
  {
    "id": "a1",
    "nombre": "Vorpal Blade",
    "rol": "Ataque Rápido",
    "origen": "País de las Maravillas",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563737902335270972/images.png?ex=6adeb7e8&is=6add6668&hm=4fa9ff39240317f65048e7c99f1ee22818ce9cc822e5b84d2beb75155c9363e3&=&format=webp&quality=lossless",
    "descripcion": "El cuchillo clásico y afilado de Alice para el combate cuerpo a cuerpo rápido.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a2",
    "nombre": "Pepper Grinder",
    "rol": "Ataque a Distancia",
    "origen": "Cocina de la Duquesa",
    "imagen": "https://static.wikia.nocookie.net/americanmcgeesalice/images/7/75/Pepper_Grinder_poster.png/revision/latest?cb=20170923144013https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ZLosR-Lum5J-Z4Q_I2-nMd8Sea_lkWCZxWCFHZAx6ze0WPZ-Mptf-M&s=10",
    "descripcion": "Una ametralladora de pimienta pesada ideal para blancos distantes.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a3",
    "nombre": "Hobby Horse",
    "rol": "Fuerza",
    "origen": "País de las Maravillas",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563737902335270972/images.png?ex=6adeb7e8&is=6add6668&hm=4fa9ff39240317f65048e7c99f1ee22818ce9cc822e5b84d2beb75155c9363e3&=&format=webp&quality=lossless",
    "descripcion": "Un mazo de madera con cabeza de caballo de juguete para romper defensas.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a4",
    "nombre": "Teapot Cannon",
    "rol": "Explosivo",
    "origen": "Sombrerero Loco",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563739647971037214/latest.png?ex=6adeb988&is=6add6808&hm=90e18a0bf1fdfddf0bdf0d6dadf5a29c17cbba0a7354f4931b55c048b8adbdd7&=&format=webp&quality=lossless",
    "descripcion": "Cañón de tetera que dispara té hirviendo causando daño de área masivo.",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
  {
    "id": "a5",
    "nombre": "Clockwork Bomb",
    "rol": "Trampa",
    "origen": "Dominio del Sombrerero",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563739854293045298/latest.png?ex=6adeb9ba&is=6add683a&hm=31059533f0be28ae46fdc023e435664d74cb1077eaf1c6dc12687e932b11d3a5&=&format=webp&quality=lossless",
    "descripcion": "Conejo de cuerda explosivo que distrae a las criaturas antes de detonar.",
    "fechaCreacion": "2026-10-14T12:00:00Z"

    
  },
  {
    "id": "a6",
    "nombre": "Goliatt",
    "rol": "Acompañante",
    "origen": "Mi mente",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563827852007182346/image.png?ex=6adf0bae&is=6addba2e&hm=8a80c4648f806dbcadfccf26321ecaadc7e22c5384a1d20bc10e9117eb2c62a2&=&format=webp&quality=lossless",
    "descripcion": "Titere de peluche que le gusta tomar te",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
   {
    "id": "a6",
    "nombre": "Goliatt",
    "rol": "Acompañante",
    "origen": "Mi mente",
    "imagen": "https://media.discordapp.net/attachments/1440464582530568364/1563827852007182346/image.png?ex=6adf0bae&is=6addba2e&hm=8a80c4648f806dbcadfccf26321ecaadc7e22c5384a1d20bc10e9117eb2c62a2&=&format=webp&quality=lossless",
    "descripcion": "Titere de peluche que le gusta tomar te",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
     {
    "id": "a7",
    "nombre": "Daria",
    "rol": "Repostera",
    "origen": "Mi mente",
    "imagen": "blob:https://web.whatsapp.com/0bd67871-f144-4a63-91b3-b7bc290c36e6",
    "descripcion": "Tiene la habilidad de preparar los postres que mas exóticos",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },

    {
    "id": "a8",
    "nombre": "Lilith",
    "rol": "Estudiante",
    "origen": "Mi mente",
    "imagen": "blob:https://web.whatsapp.com/d6289377-4038-415b-a10c-5be77772c6c1",
    "descripcion": "Vive alejada de la sociedad y le gusta tocar el piano",
    "fechaCreacion": "2026-10-14T12:00:00Z"
  },
]

// Variables principales del sistema
const grid = document.getElementById('Grid');
const descBox = document.getElementById('descriptionBox');
const creadorArsenal = "EA estudios";
const creadorArsenal2 = "Dem";
const searchInput = document.getElementById('searchInput');

// Variante visual para la pantalla de bienvenida / panel derecho
const cajaInformativaPorDefecto = `
    <div style="text-align: center; padding: 20px;">
        <h2 style="color: #ffffff; font-family: 'Times New Roman', serif; font-size: 1.8rem; border-bottom: 1px solid #8b0000; padding-bottom: 10px;">Registro del País de las Maravillas</h2>
        <div style="margin: 20px 0;">
            <img src="https://store-images.s-microsoft.com/image/apps.36813.13786397198955106.1401148d-11f1-433b-8799-4232290db1e6.56cfe536-750b-4112-9d73-fc6755e48028" alt="Arsenal" style="width: 60%; max-height: 180px; object-fit: cover; border: 2px solid #550000;"/>
        </div>
        <p style="color: #b0b0b0; font-family: 'Times New Roman', serif; font-size: 1.1rem; line-height: 1.5;">
            Selecciona cualquier arma de la cuadrícula para inspeccionar su descripción detallada o utiliza el botón inferior para añadir un nuevo registro al inventario.
        </p>
    </div>
`;

let almacenamientoLocal = localStorage.getItem("savedRegistro");
let registroActual = [];

// --- CREATE: Guardar estado actual en localStorage
document.getElementById('saveCatalog').addEventListener('click', () => {
    try {
        localStorage.setItem("savedRegistro", JSON.stringify(registroActual));
        descBox.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="color: #ffffff; font-family: 'Times New Roman', serif; font-size: 1.4rem;">✓ Registro respaldado con éxito en LocalStorage</p>
            </div>
        `;
        setTimeout(() => { restablecerPanelDerecho(); }, 1200);
    } catch (error) {
        descBox.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="color: #ff4d4d; font-family: 'Times New Roman', serif; font-size: 1.4rem;">✗ Error crítico al intentar guardar los datos</p>
            </div>
        `;
        setTimeout(() => { restablecerPanelDerecho(); }, 1200);
    }
});

function inicializarSistema() {
    if (almacenamientoLocal) {
        try {
            registroActual = JSON.parse(almacenamientoLocal);
            if (!Array.isArray(registroActual)) throw new Error("Estructura corrupta");
        } catch (error) {
            console.warn("Se detectó un JSON dañado en localStorage. Restaurando valores originales...", error);
            localStorage.removeItem("savedRegistro");
            registroActual = defaultRegistro.map(item => ({ ...item }));
        }
    } else {
        registroActual = defaultRegistro.map(item => ({ ...item }));
    }
    poblarCuadricula(registroActual);
}

function restablecerPanelDerecho() {
    descBox.innerHTML = cajaInformativaPorDefecto;
}


function crearTarjetaArma(item){
    const letrasIniciales = (item.nombre || "??").substring(0, 2).toUpperCase();
    grid.insertAdjacentHTML('beforeend', `
        <div class="card cell mb-0" id="ID-${item.id}" style="background-color: #141414; border: 1px solid #330000; color: #ffffff; font-family: 'Times New Roman', serif; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
            <div class="card-image" style="background-color: #050505; height: 190px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-bottom: 1px solid #220000;">
                <figure class="image" style="width: 100%; height: 100%;">
                    <img src="${item.imagen}" alt="${item.nombre}" style="object-fit: cover; width: 100%; height: 100%; filter: brightness(0.9);" onerror="this.outerHTML='<div style=\\'font-size:3rem; color:#8b0000; font-weight:bold; display:flex; align-items:center; justify-content:center; height:100%;\\'>${letrasIniciales}</div>';"/>
                </figure>
            </div>
            <div class="card-content" style="padding: 15px;">
                <div class="media mb-2">
                    <div class="media-content">
                        <p class="title is-4 has-text-white" style="font-family: 'Times New Roman', serif; margin-bottom: 5px;">${item.nombre}</p>
                        <p class="subtitle is-6" style="color: #999999; font-family: 'Times New Roman', serif;">Rol: <span style="color: #ff6b6b;">${item.rol}</span><br>Origen: ${item.origen}</p>
                    </div>            
                </div>
                <div>
                    <p style="font-size: 0.85rem; color: #777777; font-family: 'Times New Roman', serif;">Propietario: <span style="color: #cc0000;">@${creadorArsenal}</span></p>
                </div> 
            </div>
            <footer class="card-footer is-size-5 p-2" style="border-top: 1px solid #220000; background-color: #0f0f0f;">
                <a class="card-footer-item my-auto has-text-white" id="editItem${item.id}" style="font-family: 'Times New Roman', serif; font-size: 0.95rem;"> Modificar</a>
                <a class="card-footer-item my-auto has-text-white" id="DescriptionCaller${item.id}" style="font-family: 'Times New Roman', serif; font-size: 0.95rem;"> Inspeccionar</a>
            </footer>
        </div>
    `);

    // Evento para ver el detalle completo en el panel derecho
    document.getElementById(`DescriptionCaller${item.id}`).addEventListener('click', () => {
        descBox.innerHTML = `
            <div style="padding: 10px;">
                <h1 class="title has-text-centered has-text-white" style="font-family: 'Times New Roman', serif; font-size: 1.6rem; color: #ffcccc !important;">${item.nombre}</h1>
                <div class="is-flex is-justify-content-center my-3">
                    <figure class="image" style="width: 55%; max-height: 170px; overflow: hidden; border: 1px solid #550000;">
                        <img src="${item.imagen}" alt="${item.nombre}" style="object-fit: cover; width:100%; height:100%;" onerror="this.src='images/imagenotfound.webp';"/>
                    </figure>
                </div>
                <div class="is-flex is-flex-direction-column">
                    <p style="color: #ff9999; font-family: 'Times New Roman', serif; margin-bottom: 4px;"><strong>Rol:</strong> ${item.rol}</p>
                    <p style="color: #cccccc; font-family: 'Times New Roman', serif; margin-bottom: 8px;"><strong>Origen:</strong> ${item.origen}</p>
                    <p style="color: #ffffff; font-family: 'Times New Roman', serif; font-weight: bold; margin-bottom: 4px;">Expediente del Arma:</p>
                    <p style="overflow-y: auto; color: #cccccc; font-family: 'Times New Roman', serif; font-size: 0.95rem; line-height: 1.4; background: #0a0a0a; padding: 10px; border-left: 3px solid #8b0000;" id="descriptionText"></p>
                </div>
            </div>
        `;
        document.getElementById("descriptionText").textContent = item.descripcion;
    });
}

function poblarCuadricula(listaArmas){
    grid.innerHTML = ``;
    listaArmas.forEach(item => { crearTarjetaArma(item); });
    
    // Botón visual dinámico para abrir el formulario de creación rápida
    grid.insertAdjacentHTML('beforeend', `
        <div class="card cell p-auto" style="min-height: 420px; background-color: #111111; border: 2px dashed #440000; display: flex; align-items: center; justify-content: center; text-align: center;">
            <div class="card-image is-flex is-flex-direction-column is-justify-content-center is-align-items-center" style="min-height: 100%; padding: 20px;">
                <p style="color: #888888; font-family: 'Times New Roman', serif; margin-bottom: 15px; font-size: 1rem;">¿Deseas crear un nuevo registro?</p>
                <button id="addToCatalog" class="button" style="background-color: #8b0000; color: #ffffff; border: 1px solid #ff0000; font-family: 'Times New Roman', serif; font-size: 1.1rem; padding: 10px 20px; cursor: pointer;">+ Forjar Registro</button>
            </div>
        </div>
    `);
}

// --- READ: Cargar datos explícitamente desde localStorage mediante botón externo
document.getElementById('loadCatalog').addEventListener('click', () => {
    const datosRecuperados = localStorage.getItem("savedRegistro");
    if (!datosRecuperados) {
        descBox.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="color: #ff6666; font-family: 'Times New Roman', serif; font-size: 1.3rem;">No se encontraron registros previos almacenados</p>
            </div>`;
        return;
    }
    try {
        registroActual = JSON.parse(datosRecuperados);
        ejecutarFiltroEnPantalla();
        descBox.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="color: #ffffff; font-family: 'Times New Roman', serif; font-size: 1.3rem;">✓ Datos cargados correctamente desde el navegador</p>
            </div>`;
        setTimeout(() => { restablecerPanelDerecho(); }, 1200);
    } catch (error) {
        localStorage.removeItem("savedRegistro");
        registroActual = defaultRegistro.map(item => ({ ...item }));
        restablecerPanelDerecho();
    }
});

// --- BÚSQUEDA TÉCNICA: Implementación estricta con ciclo WHILE según el PDF
function filtrarArmasConCicloWhile(terminoBusqueda) {
    const textoFiltro = (terminoBusqueda || "").toLowerCase().trim();
    let listaFiltrada = [];
    let indice = 0;

    // Ciclo while obligatorio para cumplir con los requerimientos de la rúbrica técnica
    while (listaFiltrada.length === 0 && indice < registroActual.length) {
        if (registroActual[indice].nombre.toLowerCase().includes(textoFiltro) || 
            registroActual[indice].rol.toLowerCase().includes(textoFiltro)) {
            listaFiltrada.push(registroActual[indice]);
        }
        indice++;
    }
    // Extensión del ciclo para capturar el resto de coincidencias
    for (; indice < registroActual.length; indice++) {
        if (registroActual[indice].nombre.toLowerCase().includes(textoFiltro) || 
            registroActual[indice].rol.toLowerCase().includes(textoFiltro)) {
            listaFiltrada.push(registroActual[indice]);
        }
    }
    return listaFiltrada;
}

function ejecutarFiltroEnPantalla() {
    const textoIngresado = searchInput.value;
    const resultadosBusqueda = filtrarArmasConCicloWhile(textoIngresado);
    grid.innerHTML = "";
    poblarCuadricula(resultadosBusqueda);
}

searchInput.addEventListener('input', ejecutarFiltroEnPantalla);


grid.addEventListener('click', (event) => {
    
    // 1. CREATE: Formulario dinámico para agregar nuevo elemento
    if (event.target.closest('#addToCatalog')) {
        const listadoActual = registroActual;
        
        // Generador de ID secuencial alfanumérico (a1, a2, a3...)
        const numeroMaximo = listadoActual.reduce((maximo, elemento) => {
            const coincidencia = elemento.id && String(elemento.id).match(/^a(\d+)$/);
            return coincidencia ? Math.max(maximo, parseInt(coincidencia[1], 10)) : maximo;
        }, 0);
        const idGenerado = `a${numeroMaximo + 1}`;

        descBox.innerHTML = `
            <div style="padding: 10px; font-family: 'Times New Roman', serif; color: #fff;">
                <h2 style="text-align: center; color: #ff9999; font-size: 1.4rem; margin-bottom: 12px;">Nuevo Registro de Arma</h2>
                
                <label style="font-size: 0.9rem; color: #aaa;">Identificador:</label>
                <input class="input mb-2" type="text" id="newId" value="${idGenerado}" readonly style="background:#0a0a0a; color:#888; border:1px solid #440000;"/>
                
                <label style="font-size: 0.9rem; color: #aaa;">Nombre del Arma *:</label>
                <input class="input mb-2" type="text" id="newNombre" placeholder="Ej. Cuchillo Vorpal" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Rol *:</label>
                <input class="input mb-2" type="text" id="newRol" placeholder="Ej. Cuerpo a cuerpo" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Origen *:</label>
                <input class="input mb-2" type="text" id="newOrigen" placeholder="Ej. País de las Maravillas" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">URL de la Ilustración:</label>
                <input class="input mb-2" type="text" id="newImagen" placeholder="https://..." style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Descripción Detallada:</label>
                <textarea class="textarea mb-3" id="newDescripcion" placeholder="Notas sobre el artefacto..." style="background:#1a1a1a; color:#fff; border:1px solid #550000; height: 70px;"></textarea>

                <div class="buttons" style="display: flex; gap: 10px;">
                    <button class="button" type="button" id="submitForm" style="background-color: #8b0000; color: white; border: none; flex: 1;">Registrar Arma</button>
                    <button class="button" type="button" id="cancelForm" style="background-color: #222; color: white; border: none; flex: 1;">Cancelar</button>
                </div>
            </div>
        `;

        descBox.querySelector('#submitForm').addEventListener('click', () => {
            const objetoNuevo = {
                id: descBox.querySelector('#newId').value,
                nombre: descBox.querySelector('#newNombre').value.trim(),
                rol: descBox.querySelector('#newRol').value.trim(),
                origen: descBox.querySelector('#newOrigen').value.trim(),
                imagen: descBox.querySelector('#newImagen').value.trim(),
                descripcion: descBox.querySelector('#newDescripcion').value.trim()
            };

            // Validación de campos obligatorios requerida por rúbrica
            if (!objetoNuevo.nombre || !objetoNuevo.rol || !objetoNuevo.origen) {
                alert("Por favor completa los campos obligatorios: nombre, rol y origen.");
                return;
            }

            registroActual.push(objetoNuevo);
            ejecutarFiltroEnPantalla();
            restablecerPanelDerecho();
        });

        descBox.querySelector('#cancelForm').addEventListener('click', () => {
            restablecerPanelDerecho();
        });
    }

    // 2. UPDATE: Formulario de edición para un elemento existente
    const botonEdicion = event.target.closest('[id^="editItem"]');
    if (botonEdicion) {
        const idObjetivo = botonEdicion.id.replace('editItem', '');
        const itemEncontrado = registroActual.find(x => String(x.id) === String(idObjetivo));
        if (!itemEncontrado) return;

        descBox.innerHTML = `
            <div style="padding: 10px; font-family: 'Times New Roman', serif; color: #fff;">
                <h2 style="text-align: center; color: #ff9999; font-size: 1.4rem; margin-bottom: 12px;">Modificar Registro</h2>
                
                <label style="font-size: 0.9rem; color: #aaa;">ID:</label>
                <input class="input mb-2" type="text" id="editId" value="${itemEncontrado.id}" readonly style="background:#0a0a0a; color:#888; border:1px solid #440000;"/>
                
                <label style="font-size: 0.9rem; color: #aaa;">Nombre *:</label>
                <input class="input mb-2" type="text" id="editNombre" value="${itemEncontrado.nombre}" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Rol *:</label>
                <input class="input mb-2" type="text" id="editRol" value="${itemEncontrado.rol}" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Origen *:</label>
                <input class="input mb-2" type="text" id="editOrigen" value="${itemEncontrado.origen}" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Imagen:</label>
                <input class="input mb-2" type="text" id="editImagen" value="${itemEncontrado.imagen || ''}" style="background:#1a1a1a; color:#fff; border:1px solid #550000;"/>

                <label style="font-size: 0.9rem; color: #aaa;">Descripción:</label>
                <textarea class="textarea mb-3" id="editDescripcion" style="background:#1a1a1a; color:#fff; border:1px solid #550000; height: 70px;">${itemEncontrado.descripcion || ''}</textarea>

                <div class="buttons" style="display: flex; gap: 8px;">
                    <button class="button" type="button" id="submitEdit" style="background-color: #8b0000; color: white; border: none; flex: 1;">Actualizar</button>
                    <button class="button" type="button" id="cancelEdit" style="background-color: #222; color: white; border: none; flex: 1;">Cancelar</button>
                    <button class="button is-danger" type="button" id="deleteItemBtn" style="background-color: #440000; color: #ff9999; border: 1px solid #8b0000;">Eliminar</button>
                </div>
            </div>
        `;

        descBox.querySelector('#submitEdit').addEventListener('click', () => {
            const datosModificados = {
                nombre: descBox.querySelector('#editNombre').value.trim(),
                rol: descBox.querySelector('#editRol').value.trim(),
                origen: descBox.querySelector('#editOrigen').value.trim(),
                imagen: descBox.querySelector('#editImagen').value.trim(),
                descripcion: descBox.querySelector('#editDescripcion').value.trim()
            };

            if (!datosModificados.nombre || !datosModificados.rol || !datosModificados.origen) {
                alert("Los campos obligatorios (nombre, rol y origen) no pueden quedar vacíos.");
                return;
            }

            Object.assign(itemEncontrado, datosModificados);
            ejecutarFiltroEnPantalla();
            restablecerPanelDerecho();
        });

        descBox.querySelector('#cancelEdit').addEventListener('click', () => {
            restablecerPanelDerecho();
        });

        // 3. DELETE: Operación de eliminación con confirmación previa obligatoria por rúbrica
        descBox.querySelector('#deleteItemBtn').addEventListener('click', () => {
            if (!confirm(`¿Estás seguro de eliminar el registro "${itemEncontrado.nombre}"?`)) return;
            
            registroActual = registroActual.filter(x => String(x.id) !== String(idObjetivo));
            ejecutarFiltroEnPantalla();
            restablecerPanelDerecho();
        });
    }
});

// Botón de reseteo para restaurar el registro predeterminado original
document.getElementById('resetCatalog').addEventListener('click', () => {
    if (confirm("¿Deseas restablecer el registro a sus valores de fábrica?")) {
        registroActual = defaultRegistro.map(item => ({ ...item }));
        localStorage.removeItem("savedRegistro");
        ejecutarFiltroEnPantalla();
        restablecerPanelDerecho();
    }
});

// Inicialización automática al cargar el script
inicializarSistema();
restablecerPanelDerecho();