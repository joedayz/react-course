
import { getImagen } from "../../src/base-pruebas/async-await";

describe('Pruebas con async-await y fetch', () => {

          test('getImagen debe retornar el url de la imagen', async() => {
                    const url = await getImagen();
                    console.log(url);
                    expect((typeof url)).toBe('string');
          });

});