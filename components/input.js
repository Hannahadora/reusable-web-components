class Input extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        var label = this.attributes.label.value
        var type = this.attributes.type.value
        this.innerHTML = `
          <div>
            <label for="name">${label}</label>
            <div class="h-input-wrapper">
             <input id="h-input" class="h-input" type="${type}" id="name" />
          </div>
          </div>
        `;

        // document.getElementById('h-input').addEventListener(('input', e) =>  console.log(e.value))
      }
  }

customElements.define('input-component', Input);