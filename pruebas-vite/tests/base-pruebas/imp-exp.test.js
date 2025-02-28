
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/imp-exp';

describe('Pruebas en el archivo imp-exp.test.js', () => {

          test('getHeroeById debe retornar un héroe por id', () => {
                    const id = 1;
                    const heroe = getHeroeById(id);
                    
                    expect(heroe).toEqual({ id:1 , name: 'Batman', owner: 'DC' });
          });


          test('getHeroeById debe retornar undefined si no existe', () => {
                    const id = 100;
                    const heroe = getHeroeById(id);
                    console.log(heroe);
                    //expect(heroe).toEqual({ id:1 , name: 'Batman', owner: 'DC' });
                    expect(heroe).toBeFalsy();
          });

          test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
                    const owner = 'DC';
                    const heroes = getHeroesByOwner(owner);
                    
                    expect( heroes.length ).toBe(3);
                    expect ( heroes ).toEqual([
                              { id:1 , name: 'Batman', owner: 'DC' },
                              { id:3 , name: 'Superman', owner: 'DC' },
                              { id:4 , name: 'Flash', owner: 'DC' }
                    ]);

                    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
          });

          test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
                    const owner = 'Marvel';
                    const heroes = getHeroesByOwner(owner);
                    
                    expect( heroes.length ).toBe(2);
                    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
          });
});