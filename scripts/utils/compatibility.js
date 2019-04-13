export default () => cssVar() && es6Features() && customElements();

export const cssVar = () => CSS.supports('color', 'var(--fake-var)');

export const customElements = () => !!customElements.define;

export const es6Features = () => {
  try {
    eval('var foo = (x)=>x+1');
    eval('class Foo {}');
    eval('var foo = Symbol("foo");');
  }
  catch (e) { return false; }
  return true;
}