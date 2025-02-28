import { render } from '@testing-library/react';

describe('Pruebas en <FirstApp/>', () => {

          test('debe de mostrar el mensaje "Hola, soy JoeDayz"', () => {
                    const title = 'Hola, soy JoeDayz';
                    render(<FirstApp title={ title }/>);
          });

});