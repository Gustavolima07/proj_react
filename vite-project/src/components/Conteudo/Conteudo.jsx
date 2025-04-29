const Conteudo = (props) => {
    const { children } = props
    return (
        <div className="p-2">
            {children}
        </div>
    )
}

export { Conteudo };