import Mode from "../Mode/Mode"
import styles from "./Filters.module.css"
import { icons } from "../icons"

type HandleAddProduct = () => void

type FiltersProps = {
	handleAddProduct: HandleAddProduct
}

const Filters = ({ handleAddProduct }: FiltersProps) => {
	return (
		<div className={styles.filters}>
			<select
				name=""
				id=""
			>
				<option
					value=""
					selected
					hidden
				>
					Фильтровать
				</option>
				<option value="">Избранное</option>
				<option value="">Недавно добавленное</option>
				<option value="">Подешевле</option>
				<option value="">Подороже</option>
			</select>
			<input
				type="text"
				placeholder="Поиск по товарам"
			/>
			<button onClick={() => handleAddProduct()}>{icons.plus}Добавить</button>
			<Mode
				data={[
					{
						name: "list",
						img: icons.list,
						isActive: false,
					},
					{
						name: "grid",
						img: icons.grid,
						isActive: false,
					},
				]}
			/>
		</div>
	)
}

export default Filters
