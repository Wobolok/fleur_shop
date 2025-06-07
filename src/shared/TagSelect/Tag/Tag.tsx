import styles from "./Tag.module.css"

type HandleClick = (name: string) => void

export type TagProps = {
	name: string
	selected: boolean
	handleClick: HandleClick
}

const Tag = ({ name, selected, handleClick }: TagProps) => {
	return (
		<div
			className={selected ? `${styles.tag} ${styles.selected}` : styles.tag}
			onClick={() => handleClick(name)}
		>
			{name}
		</div>
	)
}

export default Tag
