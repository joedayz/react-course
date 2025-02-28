import { getSaludo } from '../../src/base-pruebas/template-strings';

describe('Pruebas en template-string', () => {
          

          test('getSaludo debe retornar "Hola JoeDayz"', () => {
                    const nombre = 'JoeDayz';
                    
                    const message = getSaludo(nombre);

                    expect(message).toBe(`Hola ${nombre}`);
          });

});