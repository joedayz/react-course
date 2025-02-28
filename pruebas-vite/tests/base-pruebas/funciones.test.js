import { getUser } from '../../src/base-pruebas/funciones';
import { getUsuarioActivo } from '../../src/base-pruebas/funciones';

describe('Pruebas en funciones', () => {
          test('getUser debe retornar un objeto', () => {
                    
                    const testUser = {
                              uid: 'ABC123',
                              username: 'El_Papi1502'
                    };

                    const user = getUser();
                    expect(testUser).toEqual(user);
          });       

          test('getUsuarioActivo debe retornar un objeto', () => {
                    const nombre = 'JoeDayz';

                    const user = getUsuarioActivo(nombre);
                    expect(user).toStrictEqual({
                              uid: 'ABC567',
                              username: nombre
                    });
          });
});

