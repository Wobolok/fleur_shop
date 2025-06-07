import { useState } from "react"
import styles from "./Mode.module.css"
import ModeOption from "./ModeOption/ModeOption"
import type { ModeOptionProps } from "./ModeOption/ModeOption"

type HandleClick = (name: string) => void

type ModeProps = {
	data: ModeOptionProps[]
	handleOptionSelect?: HandleClick
}

const Mode = ({ data, handleOptionSelect }: ModeProps) => {
	const [options, setOptions] = useState(data)
	const [selectedOption, setSelectedOption] = useState<string>('grid')

	const handleOptionClick = (name: string): void => {
		setSelectedOption(name)
		handleOptionSelect && handleOptionSelect(name)
	}

	return (
		<div className={styles.mode}>
			{options
				? options.map((item, index) => (
						<ModeOption
							key={index}
							name={item.name}
							img={item.img}
							isActive={selectedOption && selectedOption === item.name ? true : false}
							handleClick={handleOptionClick}
						/>
				  ))
				: ""}
		</div>
	)
}

export default Mode
