import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "../src/components/Alert";

describe('<Alert>', () => {
    it('should render correctly', () => {
        const {container} = render(<Alert type="danger">Erreur</Alert>)
        expect(container.firstChild).toMatchInlineSnapshot(`
          <div
            class="alert alert-danger"
            role="alert"
          >
            Erreur
          </div>
        `)
    })
})