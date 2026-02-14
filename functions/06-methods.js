
// Funciones como métodos
// El valor de 'this' depende de cómo se llama a la función.
// En Arrow Functions, 'this' se hereda del contexto léxico (donde se definió).

export const player = {
  name: 'John',
  // Función tradicional: this se refiere al objeto player cuando llamamos player.sayHi()
  sayHi: function () {
    return `Hi ${this.name}!`;
  },
  // Arrow function: this se toma del contexto externo (en este módulo, undefined o exports)
  // Por lo tanto, this.name probablemente sea undefined
  sayHiArrow: () => {
    return `Hi ${this ? this.name : 'undefined'}!`;
  }
};
