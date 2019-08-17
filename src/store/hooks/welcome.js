import Store from '../index';

function useWelcome() {
  const [state, setState] = Store.useStore();

  const selectors = {
    welcome: state.welcome,
    greeting: state.welcome.greeting,
    firstName: state.welcome.firstName,
    lastName: state.welcome.lastName,
    role: state.welcome.role,
    paragraphs: state.welcome.paragraphs,
    email: state.welcome.email,
  }

  const actions = {
    setGreeting:
      greeting => setState(draft => { draft.welcome.greeting = greeting }),
  }

  return [selectors, actions];
}

export default useWelcome;