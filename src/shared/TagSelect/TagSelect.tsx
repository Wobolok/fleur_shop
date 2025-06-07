import styles from "./TagSelect.module.css"
import Tag from "./Tag/Tag"
import { useState } from "react"

type Tag = {
	name: string
}

type TagSelectProps = {
	data: Tag[]
}

const TagSelect = ({ data }: TagSelectProps) => {
	const [tags, setTags] = useState<string[]>([])

	const handleTagClick = function (name: string) {
		if (tags.includes(name)) {
			setTags(tags.filter((item) => item !== name))
		} else {
			setTags([...tags, name])
		}
	}

	return (
		<div className={styles.tags}>
			{data &&
				data.map((item, index) => (
					<Tag
						key={index}
						name={item.name}
						selected={tags.includes(item.name)}
						handleClick={handleTagClick}
					/>
				))}
		</div>
	)
}

export default TagSelect
