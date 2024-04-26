import React from 'react'
import Header from '../components/header';
import Feed from '../components/homepage/feed';

const page = () => {
  return (
    <div className='application-outlet'>
      <Header/>
      <Feed />
    </div>
  )
}

export default page;
