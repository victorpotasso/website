const initialState = {
  cursor: {
    isShown: false,
    isHighlighted: false,
    position: [0, 0]
  }
}

const fetchWelcome = () => new Promise((resolve, reject) => {
  try {
    setTimeout(() => resolve({
      greeting: "Hey! I'm",
      firstName: 'Victor',
      lastName: 'Potasso',
      role: 'Front End Developer',
      paragraphs: [
        'born and raised in Sao Paulo, Brazil and living in Auckland, New Zealand.',
        "Passionate about Interactive Develpment and UX, I've been working since 2008."
      ],
      email: 'victorpotasso@gmail.com'
    }), 100);
  } catch (error) { reject(error); }
})

const fetchInitialState = async () => {
  const welcome = await fetchWelcome();

  return {
    ...initialState,
    welcome,
  };
}

export default fetchInitialState;