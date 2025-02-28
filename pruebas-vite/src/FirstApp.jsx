import PropTypes from "prop-types";

export const FirstApp = ({ title = 'No hay titulo', subTitle = 'No hay subtitulo', name = 'No hay nombre'}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

// Definir PropTypes
FirstApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.number, // 🔴 Espera un número
};

// Valores por defecto
FirstApp.defaultProps = {
    title: "Soy Goku",
    subTitle: 100, // Número por defecto
};

export default FirstApp;
