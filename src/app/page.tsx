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
						marginTop: "2rem",
						display: "flex",
						flexDirection: "column",
						gap: "20px"
					}}
				>
					<Post
						title="titulo"
						date="data"
						summary=" resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo resumo"
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
