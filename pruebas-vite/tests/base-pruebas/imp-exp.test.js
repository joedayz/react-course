
import { getHeroeById } from '../../src/base-pruebas/imp-exp';

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
                    expect(heroe).toBe(undefined);
          });
});