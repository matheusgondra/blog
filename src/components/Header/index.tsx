import Image from "next/image";

export function Header() {
	return (
		<header>
			<Image src="/avatar.jpg" alt="imagem de perfil de Matheus de Gondra" width={42} height={42} />

			<h1>Gondra Blog</h1>

			<nav>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/matheusgondra/">Matheus Gondra</a>
					</li>
					<li>
						<a href="https://github.com/matheusgondra">matheusgondra</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
