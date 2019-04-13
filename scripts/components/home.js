export default class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('HOME');
  }
}