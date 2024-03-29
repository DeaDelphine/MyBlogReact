
import { Alert } from "../components/Alert"
import { Card } from "../components/Card"
import { Spinner } from "../components/Spinner"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useFetch } from "../hooks/useFetch"
import {  useTheme } from "../hooks/useTheme"


export function Home() {

    useDocumentTitle('Mon Blog') 
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    if (loading) {
        return <Spinner />
    }

    if (error) {
return <Alert type="danger">{error.toString()}</Alert>
    }
    
    return <>
        <h1 className="mb-3">Mon Blog</h1>
        <ThemeSwitcher />
           <div className="row gap-4">
            {data.map((post) => (<div key={post.id} className="col-12 col-md-4">
                <Card 
                    image={`https://picsum.photos/id/${post.id}/280/180`}
                    title={post.title}
                    description={post.body}
                    href={`#post:${post.id}`}
                    buttonlabel="Voir l'article"
                />
            </div>))}
            
            </div>
           
    </>
}

function ThemeSwitcher() {
    const { toggleTheme } = useTheme()
    return <button onClick={toggleTheme}>Changer de theme</button>
}