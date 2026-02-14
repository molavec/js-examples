# js-examples

Ejemplos para aprender Javascript fácilmente.

La idea es mantener ejemplos simples de ejecutar y modificar para aprender mediante la ejecución de funciones utilizando [vitest](https://vitest.dev).

### Ejecución de Pruebas

Este proyecto utiliza `pnpm` y `vitest`.

```bash
# Instalar dependencias
pnpm install

# Correr todos los tests
pnpm test

# Correr tests de un tema específico
pnpm test arrays
pnpm test functions
```

### Estructura del Proyecto

Los ejemplos están organizados por temas en directorios:

- `arrays/`: Métodos de Array (map, filter, reduce, etc.)
- `classes/`: Definición de Clases y Herencia
- `destructuring/`: Destructuración de Arrays y Objetos
- `functions/`: Tipos de funciones, callbacks, parámetros
- `iterations/`: Bucles (for, while, generators)
- `objects/`: Manipulación de Objetos
- `operators/`: Spread operator, condicionales
- `promises/`: Promesas, Async/Await
- `scopes/`: Hoisting, var/let/const
- `streams/`: Node.js Streams (Readable, Writable, Pipe)

Cada archivo de ejemplo `XX-tema.js` tiene su correspondiente test `XX-tema.test.js`.

2. Ejecuta todos los tests con vitest para comprobar que todo funciona correctamente.

```bash 
npm run test
```

3. Analiza los distintos códigos y sus pruebas unitarias.

   Para ejecutar el test de un solo ejemplo:
   ```bash
   pnpm test arrays/01-concat.test.js
   ```


4. Modifica los códigos y las pruebas unitarias para aprender.

# Acerca de vitest

Vitest es un framework de pruebas unitarias de última generación impulsado por Vite. 
Es compatible con la API de Jest, lo que facilita su uso si ya tienes experiencia con testing en Javascript.
Se ha elegido para este proyecto por su velocidad y simplicidad de configuración:
https://vitest.dev/guide/

# ¿Te sientes con ganas de más?

Aquí puedes encontrar otras fuentes interesantes de información y herramientas.

* Bibliotecas de módulos y recursos:
https://github.com/sindresorhus/awesome-nodejs

