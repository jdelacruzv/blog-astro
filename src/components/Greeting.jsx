import { useState } from "preact/hooks";
import "./Greeting.css";
import "../styles/global.css";

export default function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div className="greeting-container">
			<h3 className="greeting-message">{greeting} ¡Gracias por tu visita!</h3>
			<button
				className="greeting-button"
				 onClick={() => setGreeting(randomMessage())}
			>
				Nuevo saludo
			</button>
		</div>
	);
}
