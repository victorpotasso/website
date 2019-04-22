export default class Home extends HTMLElement {
  constructor() {
    super();
    
    const style = document.createElement('style');
    style.textContent = '@import url("./components/home.css")';
    document.head.appendChild(style);
  }

  connectedCallback() {
    console.log('HOME');
  }
}