import React from 'react';
import data from './Data';
import Card from './Card';
import '../Styles/Home/Home.css';
const Home = () => {
  return <div className='main-home'>
    {
      data.map(item => <Card key={item.id}
                              image = {item.image}
                              name = {item.name}
                              author = {item.username}
                              views = {item.views}
                              downloads = {item.downloads}/>)
    }
  </div>;
};

export default Home;
