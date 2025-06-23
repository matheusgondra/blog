import styles from "./styles.module.css";

interface PostProps {
	title: string;
	date: string;
	summary: string;
}

export function Post({ title, date, summary }: PostProps) {
	return (
		<section className={styles.card}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
				<span className={styles.time}>{date}</span>
			</div>

			<p className={styles.summary}>{summary}</p>
		</section>
	);
}
