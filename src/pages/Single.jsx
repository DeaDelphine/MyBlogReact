import { Alert } from "../components/Alert"
import { Button } from "../components/Button"

import { Spinner } from "../components/Spinner"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useFetch } from "../hooks/useFetch"
import { useToggle } from "../hooks/useToggle"
import { EditPostModal } from "./single/EditPostModal"

export function Single({postId}) {
  
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    
    useDocumentTitle(post?.title)
    const [isEditing, toggleEditing] = useToggle(false)
    if (loading) {
        return <Spinner />
    }

    if (error) {
return <Alert type="danger">{error.toString()}</Alert>
    }
    
    return <>
        <h1>{post.title}</h1>
        <img src={`https://picsum.photos/id/${post.id}/800/600`} alt="" className="img-fluid img-thumbnail my-3"/>
        <p>{post.body}</p>
        {isEditing && <EditPostModal post={post} onClose={toggleEditing} />}
        <Button variant="secondary" onClick={toggleEditing}>Editer l'article</Button>
        <p>
            <a href={`#post:${post.id +1}`}>Article suivant</a>
        </p>
          
    </>
}