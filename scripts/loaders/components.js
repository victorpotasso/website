export default function ComponentsLoader({ prefix, components }) {
  return new Promise((resolve, reject) => {
    try {
      const response = [];
      components.map(async (componentPath) => {
        const component = await import(componentPath);
        const element = `${prefix}-${component.default.name.toLowerCase()}`;

        customElements.define(element, component.default);

        response.push(element);
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}
