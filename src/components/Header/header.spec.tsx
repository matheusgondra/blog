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

	it("Should render an avatar image", () => {
		render(<Header />);

		const avatarImage = screen.getByAltText("imagem de perfil de Matheus de Gondra");

		expect(avatarImage).toBeInTheDocument();
	});

	it("Should render a title", () => {
		render(<Header />);

		const title = screen.getByText("Gondra Blog", { exact: true });

		expect(title).toBeInTheDocument();
	});

	it("Should render a navigation list with two links", () => {
		render(<Header />);

		const nav = screen.getByRole("navigation");
		const links = screen.getAllByRole("link");

		expect(nav).toBeInTheDocument();
		expect(links.length).toBe(2);
	});
});
