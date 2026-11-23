import { describe, expect, it } from "vitest";
import { cuadrado } from "./cuadrado.js";

describe("cuadrado", () => {
	it("eleva un número al cuadrado", () => {
		expect(cuadrado(5)).toBe(25);
	});

	it("funciona con números negativos y decimales", () => {
		expect(cuadrado(-4)).toBe(16);
		expect(cuadrado(1.5)).toBe(2.25);
	});
});
