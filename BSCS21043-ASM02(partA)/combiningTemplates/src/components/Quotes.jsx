import  { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} —${data.author}`);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="quotes-card">
      <h3>Quote of the Day</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;
