import React from 'react';

const Picture = ({ data }) => {
  return (
    <div className="card">
      <img src={data.src.large} className="card-img-top mt-3 h-75 " alt="" />
      <div className="card-body mx-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href={data.src.large}
          className="btn btn-primary"
        >
          放大圖片
        </a>
      </div>
    </div>
  );
};

export default Picture;
