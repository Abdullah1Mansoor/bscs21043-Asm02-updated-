import  { useEffect, useState } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://api.jokes.one/jod')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.contents.jokes[0].joke.text);
      })
      .catch((error) => console.error('Error fetching joke:', error));
  }, []);

  return (
    <div className="joke-card">
      <h3>Joke of the Day</h3>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
