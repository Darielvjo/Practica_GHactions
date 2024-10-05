const helloWorld = require('./index.js');

test('debería retornar "Hola, Mundo!"', () => {
    expect(helloWorld()).toBe("Hola, Mundo!");
});
