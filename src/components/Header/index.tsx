import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Header() {
	return (
		<header>
			<Image src="/avatar.jpg" alt="imagem de perfil de Matheus de Gondra" width={42} height={42} />

			<h1>Gondra Blog</h1>

			<nav>
				<ul>
					<li>
						<a target="__blank" href="https://www.linkedin.com/in/matheusgondra/">
							<FaGithub className="icon" /> Matheus Gondra
						</a>
					</li>
					<li>
						<a target="__blank" href="https://github.com/matheusgondra">
							<FaLinkedin className="icon" /> matheusgondra
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
