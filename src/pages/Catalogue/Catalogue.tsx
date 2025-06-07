import styles from "./Catalogue.module.css"
import Filters from "../../shared/Filters/Filters"
import ProductCard from "../../shared/ProductCard/ProductCard"
import { data } from "./data"
import { type ReactNode, useState } from "react"
import Modal from "../../shared/Modal/Modal"
import TagSelect from "../../shared/TagSelect/TagSelect"
import { data as tagData } from "../../shared/TagSelect/data"

const Catalogue = () => {
	const [layout, setLayout] = useState("grid")
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [modalContent, setModalContent] = useState<ReactNode>("")

	return (
		<div className={styles.catalogue}>
			<Filters
				handleAddProduct={() => {
					setModalOpen(true)
					setModalContent("")
				}}
			/>
			<TagSelect data={tagData} />
			<div className={styles.stuff}>
				{data.map((item, index) => (
					<ProductCard
						key={index}
						img={item.img}
						name={item.name}
						price={item.price}
					/>
				))}
			</div>
			<Modal
				title=""
				isOpen={modalOpen}
				onClose={() => {
					setModalOpen(false)
					setModalContent("")
				}}
			>
				{modalContent}
			</Modal>
		</div>
	)
}

export default Catalogue
