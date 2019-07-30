## TODO

En este archivo puedes insertar todas las ideas de mejora que se te vengan en la cabeza.

* use strict
* bind
* apply
* mixins javascript
* javascript patterns:

1. https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
1. https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
1. https://addyosmani.com/resources/essentialjsdesignpatterns/book/

* Replantear redistrubución de los ejemplos en distitos archivos


* Añadir en el comentario una guía de como ejecutar
* Automatizar la documentación del archivo Readme.md a partir de los comentarios sobre cada función.



## request
Utiliza algunos ejemplos de librería para hacer llamados a APIs de otros sitios.

Basado en: [5 Ways to Make HTTP Requests in Node.js](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)


## Metodos de array
https://www.w3schools.com/jsref/jsref_obj_array.asp
let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
getMethods(Array.prototype)

Object.getOwnPropertyNames(Array.prototype).filter(item => typeof Array.prototype[item] === 'function')