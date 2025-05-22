import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { Header } from ".";

vi.mock("next/image", () => ({
	_esModule: true,
	default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
		return <img {...props} alt={props.alt} />;
	}
}));

describe("Header", () => {
	it("Should render a header element", () => {
		render(<Header />);

		const headerElement = screen.getByRole("banner");

		expect(headerElement).toBeDefined();
	});

	it("Should render a avatar image", () => {
		render(<Header />);

		const avatarImage = screen.getByAltText("imagem de perfil de Matheus de Gondra");

		expect(avatarImage).toBeInTheDocument();
	});
});
