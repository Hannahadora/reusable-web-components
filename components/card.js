class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList = 'h-card'
        this.shadowRoot.innerHTML = `
            <div>
            <slot name="form-el"></slot>
            </div>
        `;

        if (this.hasAttribute('border')) {
            this.classList.add('h-card-border')
        }        
        if (this.hasAttribute('shadow')) {
            this.classList.add('h-card-shadow')
        }           
        if (this.hasAttribute('flat')) {
            this.classList.add('h-card-flat')
        }           
    }
}

customElements.define('card-component', Card);