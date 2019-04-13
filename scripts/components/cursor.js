import TweenMax, { Power0 }  from 'https://unpkg.com/gsap@2.1.2/TweenMax.js';

export default class Cursor extends HTMLElement {
  constructor() {
    super();
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  connectedCallback() {
    window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove({ target, clientX, clientY }) {
    const x = clientX - (this.clientWidth >> 1);
    const y = clientY - (this.clientHeight >> 1);
    TweenMax.to(this, 0.15, { x, y, ease: Power0.easeInOut });

    const action = target.dataset.cursorAction;
    TweenMax.to(this, 0.35, { scale: action == 'highlight' ? 1.5 : 1, ease: Power0.easeInOut });

    this.classList.remove('hidden');
  }
}