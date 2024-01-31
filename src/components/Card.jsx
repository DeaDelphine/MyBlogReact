import { Button } from "./Button"

export function Card({ image, title, description, href, buttonlabel }) {
    const showButton = !!(href && buttonlabel)

    return <div className="card">
  {image && <img src={image} className="card-img-top" alt=""/>} 
    <div className="card-body">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description } </p>}
            {showButton && <Button variant="primary" href={href} >
                {buttonlabel}</Button>}
    </div>
  </div>
}