import { useEffect, useRef, type ReactNode } from "react"
import styles from "./Modal.module.css"
import { createPortal } from "react-dom"
import { icons } from "../icons"

type OnClose = () => void

type ModalProps = {
	title: string
	children: ReactNode
	isOpen: boolean
	onClose: OnClose
}

const Modal = ({ title, children, isOpen, onClose }: ModalProps) => {
	const dialogRef = useRef(null)

	const modalDiv = document.getElementById("modal")

	if (!modalDiv) throw new Error("Missing #modal in DOM.")

	useEffect(() => {
		if (isOpen) {
			dialogRef.current && dialogRef.current.showModal()
		} else {
			onClose()
			dialogRef.current && dialogRef.current.close()
		}
	}, [isOpen])

	return createPortal(
		<dialog
			ref={dialogRef}
			className={styles.modal}
		>
      <div className={styles.form}>
        <div className={styles.title}>{title}</div>
        <div className={styles.wrapper}>{children}</div>
        <button
          onClick={() => {
            onClose()
            dialogRef.current && dialogRef.current.close()
          }}
        >
          {icons.close}
        </button>
      </div>
		</dialog>,
		modalDiv
	)
}

export default Modal
