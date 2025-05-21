import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from ".";

describe("Header", () => {
	it("Should render a header element", () => {
		render(<Header />);

		const headerElement = screen.getByRole("banner");

		expect(headerElement).toBeDefined();
	});
});
