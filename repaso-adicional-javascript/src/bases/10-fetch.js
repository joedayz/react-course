
const apiKey = '8S5ggFi2pDkDRpXXMmWnlR2JpKqN67HU';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );

