export default class Cursor extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement('style');
    style.textContent = '@import url("./components/cursor.css")';
    document.head.appendChild(style);

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  connectedCallback() {
    window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove({ target, clientX, clientY }) {
    const x = clientX - (this.clientWidth >> 1);
    const y = clientY - (this.clientHeight >> 1);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;

    const action = target.dataset.cursorAction;

    if (action == 'highlight')
      this.classList.add('highlight');
    else
      this.classList.remove('highlight');

    this.classList.remove('hidden');
  }
}