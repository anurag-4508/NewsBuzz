import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/400x200?text=No+Image+Available';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/api/v1/news/getheadlines');
        const response = await axios.get('https://newsbuzz-backend.onrender.com/api/v1/news/getheadlines');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-lg z-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">NewsBuzz</h1>
        </div>
      </header>

      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 9).map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img
                  src={article.urlToImage || DEFAULT_IMAGE_URL}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                    <p className="text-gray-700 mt-2">{article.description}</p>
                  </div>
                  <div className="mt-auto text-sm text-gray-600 border-t pt-4">
                    <p>Source: {article.source.name || 'Unknown Source'}</p>
                    <p>Published: {new Date(article.publishedAt).toLocaleDateString() || 'Unknown Date'}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-4 fixed w-full bottom-0 shadow-lg">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NewsBuzz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;



