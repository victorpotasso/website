import Store from '../index';

function useCursor() {
  const [state, setState] = Store.useStore();

  const selectors = {
    cursor: state.cursor,
    isShown: state.cursor.isShown,
    isHighlighted: state.cursor.isHighlighted,
    position: state.cursor.position,
  }

  const actions = {
    setIsShown:
      isShown => setState(draft => { draft.cursor.isShown = isShown }),

    setIsHighlighted:
      isHighlighted => setState(draft => { draft.cursor.isHighlighted = isHighlighted }),

    setPosition:
      position => setState(draft => { draft.cursor.position = position }),
  }

  return [selectors, actions];
}

export default useCursor;