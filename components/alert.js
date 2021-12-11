class Alert extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var msg = this.attributes.msg.value
        this.classList = 'h-alert-box'
        this.innerHTML = `
          <div>
            ${msg}
          </div>
        `;

        if (this.style.display = 'block') {
            setTimeout(() => {
                this.style.display = 'none'
            }, 5000 )
        }

        if (this.hasAttribute('success')) {
            this.classList.add('success')
        }        
        if (this.hasAttribute('error')) {
            this.classList.add('error')
        }        
        if (this.hasAttribute('warning')) {
            this.classList.add('warning')
        }        
        if (this.hasAttribute('progress')) {
            this.classList.add('progress')
        }        
    }
}

customElements.define('alert-component', Alert);