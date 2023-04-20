import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
  let [input, setInput] = useState('');
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState('');
  const auth = '這是API_KEY';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === '') {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mx-5 g-0">
        {data &&
          data.map((data) => {
            return <Picture data={data} />;
          })}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            onClick={morePicture}
            className="btn btn-primary mx-auto mb-3"
          >
            更多圖片
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
