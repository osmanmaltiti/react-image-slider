import React from 'react';
import '../Styles/Card/Card.css';

const Card = (props) => {
  return <div className='main-card'>
    <div className='hover'>
      <div className='hover-card'>
        <button>Download</button>
      </div>
      <img src={props.image} alt=''/>
    </div>
    <div className='desc'>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Author:</strong> {props.author}</p>
      <p><strong>Views:</strong> {props.views}</p>
      <p><strong>Downloads:</strong> {props.downloads}</p>
    </div>
  </div>;
};

export default Card;
