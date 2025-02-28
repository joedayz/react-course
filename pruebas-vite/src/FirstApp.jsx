


export const FirstApp = ({ 
    title = requiredProp("title"), 
    subTitle = "No hay subtitulo", 
    name = "No hay nombre" 
}) => {

    console.log("Props recibidas en FirstApp:", { title, subTitle, name });

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

// Función que lanza un error si falta un prop
const requiredProp = (propName) => {
    throw new Error(`El prop "${propName}" es obligatorio.`);
};

export default FirstApp;
