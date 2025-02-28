import { getHeroeByIdAsync } from '../../src/base-pruebas/promesas';


describe('Pruebas con promesas', () => {
          test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {
                    const id = 1;

                    getHeroeByIdAsync(id)
                              .then(heroe => {
                                        expect(heroe).toEqual({ id:1 , name: 'Batman', owner: 'DC' });
                                        done();
                              });
          });

          test('getHeroeByIdAsync debe obtener error si heroe no existe', ( done ) => {
                    const id = 100;

                    getHeroeByIdAsync(id)
                              .then(heroe => {
                                        expect(heroe).toBeFalsy();
                                        done();
                              })
                              .catch(error => {
                                        expect(error).toBe('No se pudo encontrar el héroe con id '+ id);
                                        done();
                              });
          });
});