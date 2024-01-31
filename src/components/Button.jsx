
import { useTheme } from "../hooks/useTheme"

export function Button({ variant = 'primary', ...props }) {
    
    const newProps = {
        ...props, 
        className: `btn btn-${variant}`
    }
    const { theme } = useTheme()
    return <button>{theme}</button>
    
    if (props.href) {
        return <a {...newProps} />
    }
    return <button  {...newProps} />
    
}