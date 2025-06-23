import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<SearchBar />

				<div
					style={{
						marginTop: "10px",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
						gap: "20px"
					}}
				>
					<Post
						title="titulo"
						date="data"
						summary="resumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumoresumo"
					/>
					<Post title="titulo" date="data" summary="resumo" />
					<Post title="titulo" date="data" summary="resumo" />
					<Post title="titulo" date="data" summary="resumo" />
					<Post title="titulo" date="data" summary="resumo" />
					<Post title="titulo" date="data" summary="resumo" />
				</div>
			</main>
		</>
	);
}
