import styles from "./ProductCard.module.css"
import { icons } from "../icons"
import { useState } from "react"

type ProductCardProps = {
	img: string
	name: string
	price: number
}

const ProductCard = ({ img, name, price }: ProductCardProps) => {
	const [isFavourite, setIsFavourite] = useState<boolean>(false)

	return (
		<div className={styles.card}>
			<img
				src={img}
				alt={name}
			/>
			<div className={styles.title}>{name}</div>
			<div className={styles.price}>
				{`${price} руб.`}
				<button
					className={isFavourite ? `${styles.favourite}` : ""}
					onClick={() => setIsFavourite((prevValue) => !prevValue)}
				>
					{icons.heart}
				</button>
			</div>
			<button id="add_to_cart">{icons.cart}В корзину</button>
		</div>
	)
}

export default ProductCard
