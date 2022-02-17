function Modal({ title, description}) {
    return (
        <h1>{title}</h1>,
        <p>{description}</p>
    )
}
export function ModalPortal() {
    return ReactDOM.createPortal(
        <Modal title="Modal title" description="Modal" theme={theme}
        document />
    )
}