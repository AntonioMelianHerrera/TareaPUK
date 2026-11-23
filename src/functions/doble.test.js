import { describe, expect, it } from "vitest";
import { doble } from "./doble.js";

describe("doble", () => {
	it("duplica números positivos", () => {
		expect(doble(4)).toBe(9);
	});

	it("duplica números negativos y decimales", () => {
		expect(doble(-3)).toBe(-6);
		expect(doble(2.5)).toBe(5);
	});

	it("informa cuando recibe un valor no numérico", () => {
		expect(doble("no es un número")).toBe(
			"Error: debes introducir un número válido",
		);
	});
});
