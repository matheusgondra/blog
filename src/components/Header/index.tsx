import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<Image
				className={styles.avatar}
				src="/avatar.jpg"
				alt="imagem de perfil de Matheus de Gondra"
				width={42}
				height={42}
			/>

			<div>
				<h1 className={styles.title}>Gondra Blog</h1>

				<nav>
					<ul className={styles.list_links}>
						<li>
							<a className={styles.link} target="__blank" href="https://www.linkedin.com/in/matheusgondra/">
								<FaGithub className="icon" /> Matheus Gondra
							</a>
						</li>
						<li>
							<a className={styles.link} target="__blank" href="https://github.com/matheusgondra">
								<FaLinkedin className="icon" /> matheusgondra
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
