export function doble(numero) {
	const valor = Number(numero);
	if (!Number.isFinite(valor)) {
		return "Error: debes introducir un número válido";
	}
	return valor * 2;
}
