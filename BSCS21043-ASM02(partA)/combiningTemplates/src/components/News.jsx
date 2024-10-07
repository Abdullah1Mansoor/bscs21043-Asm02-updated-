// src/components/News.js
import  { useEffect, useState } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=5') // Space Flight News API
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default News;
