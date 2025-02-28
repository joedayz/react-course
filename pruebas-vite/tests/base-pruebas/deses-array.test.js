import { retornaArreglo } from "../../src/base-pruebas/deses-array";



describe('Pruebas en desestructuración', () => {

          test('debe retornar un string y un número', () => {

                    //const retorno = retornaArreglo();
                    //console.log(retorno);

                    const [letras, numeros] = retornaArreglo();
                    
                    expect(letras).toBe('ABC');
                    expect(numeros).toBe(123);

                    expect(typeof letras).toBe('string');
                    expect(typeof numeros).toBe('number');

                    expect(letras).toEqual(expect.any(String));
                    
                    
          });

});