import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Contact() {
    return <>
        <form action="">
            <Input type="text" label="Nom" />
            <Input type="text" label="Prénom" />
            <Input type="email" label="Mail" />
            <div className="mt-2 justify-content-end">
                <Button variant="primary"  >Envoyer</Button>
            </div>
        </form>
    </>
}