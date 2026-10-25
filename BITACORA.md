Bitácora de Desarrollo — Registro del Proyecto

1. ¿Por qué usar un id único en lugar de identificar al personaje por su nombre? ¿Qué pasaría si dos personajes se llaman igual?
Usar el "id" único, asegura la integridad de los datos. Si quisieramos identificar a los personajes por su nombre, el sistema fallaría en caso de duplicados, eliminando o editando accidentalmente múltiples registros a la vez. Y si un usuario edita el nombre de un personaje, la referencia a su identificador primario se mantendría intacta sin romper enlaces o relaciones.

2. ¿Conviene guardar todo el arreglo en una sola clave de localStorage o un personaje por clave? Compara ventajas y desventajas.
Es conveniente que se guardarde todo el un arreglo bajo una sola clave (por ejemplo, "armas_alice").
-Ventajas: Facilita la carga e inicialización de la aplicación permite realizar búsquedas y filtrados de manera MÁS rápida y simplifica operaciones como vaciar la base de datos o exportarla.
-Desventajas: Cada vez que se modifica un solo registro, se debe reescribir todo el JSON en "localStorage".
3. ¿La búsqueda debe ejecutarse en cada tecla o al presionar Enter? ¿Cómo cambia la experiencia con 10 vs. 1,000 personajes?
Para una colección pequeña/mediana, AL ejecutar la búsqueda en el evento "input" (en cada tecla) ofrece una experiencia interactiva inmediata e intuitiva (instant search).  
-10 personajes: El filtrado en cada tecla es instantáneo y fluido.
-1,000+ personajes:Filtrar en cada tecla sin simplificar puede provocar lentitud en el hilo principal de JavaScript. 

---
 Casos límite

4. ¿Qué ocurre si alguien modifica manualmente localStorage desde la consola y deja un JSON inválido? JSON.parse() lanza un error. Y es gracias al bloque try...catch, que el sistema lo intercepta, borra los datos dañados automáticamente con localStorage.removeItem("savedRegistro") y restaura los valores originales (las armas de Alice) para evitar que interconexión falle.

5. ¿Qué pasa si la URL de la imagen no existe? Propón un comportamiento de respaldo (por ejemplo, mostrar iniciales).
El navegador procede a activar el evento de error de la etiqueta de imagen (onerror).
Se ejecuta una función de respaldo que reemplaza la etiqueta <img> por un contenedor visual oscuro con las dos primeras letras del nombre del arma (por ejemplo, "CV" para Cuchillo Vorpal) en tipografía grande y con el tono rojo carmesí característico.
