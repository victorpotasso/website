export default class NavButton extends HTMLElement {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  connectedCallback() {
    if (this.hasAttribute('goto'))
      this.addEventListener('click', this.onClick);
  }

  onClick() {
    console.log(this.getAttribute('goto'))
  }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   switch (name) {
  //     case 'goto':
  //       console.log(`Value changed from ${oldValue} to ${newValue}`);
  //       break;
  //   }
  // }
}