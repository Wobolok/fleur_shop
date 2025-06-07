import type { ReactElement } from "react"
import styles from "./ModeOption.module.css"

type HandleClick = (name: string) => void

export type ModeOptionProps = {
	name: string
	img: ReactElement<SVGElement>
	isActive: boolean
	handleClick?: HandleClick
}

const ModeOption = ({ name, img, isActive, handleClick }: ModeOptionProps) => {
	return (
		<div
			className={isActive ? `${styles.option} ${styles.active}` : styles.option}
			onClick={() => handleClick && handleClick(name)}
		>
			{img}
		</div>
	)
}

export default ModeOption
