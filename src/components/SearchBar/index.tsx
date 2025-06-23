import styles from "./styles.module.css";

export function SearchBar() {
	return <input type="text" placeholder="Pesquise por um post" className={styles.searchBar} />;
}
