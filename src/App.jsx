import { useState } from "react";
import { doble } from "./functions/doble.js";
import { cuadrado } from "./functions/cuadrado.js";

function Calculadora({ titulo, etiqueta, operacion, nombreOperacion }) {
	const [valor, setValor] = useState("");
	const [resultado, setResultado] = useState(null);

	function calcular(evento) {
		evento.preventDefault();
		const numero = Number(valor);
		if (valor.trim() === "" || !Number.isFinite(numero)) {
			setResultado({ error: "Introduce un número válido." });
			return;
		}
		setResultado({ valor: operacion(numero) });
	}

	return (
		<section className="card">
			<h2>{titulo}</h2>
			<form onSubmit={calcular}>
				<label htmlFor={nombreOperacion}>{etiqueta}</label>
				<div className="controls">
					<input
						id={nombreOperacion}
						type="number"
						step="any"
						value={valor}
						onChange={(evento) => setValor(evento.target.value)}
						placeholder="Escribe un número"
					/>
					<button type="submit">Calcular</button>
				</div>
			</form>
			{resultado && (
				<p className={resultado.error ? "result error" : "result"} aria-live="polite">
					{resultado.error ?? `Resultado: ${resultado.valor}`}
				</p>
			)}
		</section>
	);
}

export default function App() {
	return (
		<main className="page">
			<header>
				<p className="eyebrow">Tarea PUK · UT1A1</p>
				<h1>Funciones matemáticas</h1>
				<p>Introduce un número para calcular su doble o su cuadrado.</p>
			</header>
			<div className="calculators">
				<Calculadora
					titulo="El doble"
					etiqueta="Número"
					nombreOperacion="doble"
					operacion={doble}
				/>
				<Calculadora
					titulo="El cuadrado"
					etiqueta="Número"
					nombreOperacion="cuadrado"
					operacion={cuadrado}
				/>
			</div>
		</main>
	);
}
