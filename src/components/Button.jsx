export function Button({ variant, ...props }) {
    const newProps = {
        ...props, 
        className: `btn btn-${variant}`
    }
    if (props.href) {
        return <a {...newProps} />
    }
    return <button  {...newProps} />
}