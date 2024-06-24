# Fetch and Display Posts

Este proyecto es un simple script en JavaScript que obtiene datos de una API y los muestra en una página web. Utiliza `fetch` para realizar una solicitud a una API pública, convierte la respuesta a JSON solo si es una respuesta positiva y luego manipula el DOM para mostrar los datos en la página web.

## Descripción del Código

El código consta de una función principal `getPosts` que realiza las siguientes tareas:

1. **Fetch Data**: Utiliza una funcion asíncrona `fetch` para obtener datos de la API `https://jsonplaceholder.typicode.com/posts`.

2. **Convert to JSON**: Si la respuesta es positiva la convierte en JSON.

3. **Pinta los datos manipulando el DOM**
