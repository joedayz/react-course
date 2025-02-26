
//import './App.css'

import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>El contador está en: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        </div>
    );
}

export function App() {
    return (
        <>
            <Counter/>
        </>
    );
}


// function DataInfo({ name, role, color, image }) {
//     return (
//         <div style={{ background: color }}>
//             <h1>{name}</h1>
//             <h2>{role}</h2>
//             <img src={image} alt={name} />
//         </div >
//     );
// }
//
// function WelcomeUser(props) {
//     const { name } = props;
//     return (
//         <>
//             <h1>¡Hola {name}!</h1>
//             <DataInfo {...props} />
//         </>
//     );
// }
//
// export function App() {
//     return (
//         <>
//             <WelcomeUser
//                 name="Manz"
//                 role="streamer"
//                 color="indigo"
//                 image="manzdev.webp"
//             />
//         </>
//     );
// }

// function WelcomeUser({ name, children }) {
//     const [image, paragraph] = children;
//     return (
//         <>
//             <h1>¡Hola {name}!</h1>
//             {paragraph}
//             {image}
//         </>
//     );
// }
//
// export function App() {
//     return (
//         <>
//             <WelcomeUser name="Manz">
//                 <img src="/vite.svg" alt="ManzDev" />
//                 <p>Esto es un avatar de <strong>ManzDev</strong>.</p>
//             </WelcomeUser>
//         </>
//     );
//}
// function WelcomeUser({ name, children }) {
//     return (
//         <>
//             <h1>¡Hola {name}!</h1>
//             {children}
//         </>
//     );
// }
//
// export function App() {
//     return (
//         <>
//             <WelcomeUser name="Manz">
//                 <img src="/assets/react.svg" alt="ManzDev" />
//             </WelcomeUser>
//         </>
//     );
// }
// function WelcomeUser(props) {
//     return <h1>¡Hola {props.name}!</h1>;
// }
//
// export function App() {
//     return (
//         <>
//             <WelcomeUser name="Manz" />
//             <WelcomeUser name="Blur" />
//         </>
//     );
// }
// export function App() {
//     const title = `Lista de usuarios`;
//     const data = [
//         { id: 42, name: "ManzDev", role: "Streamer" },
//         { id: 56, name: "Felix", role: "Pole Winner" },
//         { id: 666, name: "Kevin", role: "Banned user" },
//         { id: 45, name: "Blur", role: "BanHammer" }
//     ];
//
//     return (
//         <>
//             <h1>{title}</h1>
//             <hr />
//             <ul>
//                 {data.map(user => (<li key={user.id}>{user.name} ({user.role})</li>))}
//             </ul>
//         </>
//     );
// }
// export function Button() {
//
//     const handleClick = (ev, text) => {
//         alert(`¡Has pulsado el botón con el mensaje ${text}!`);
//     }
//
//     return <button onClick={(ev) => handleClick(ev, "test")}>¡Púlsame!</button>;
//}
