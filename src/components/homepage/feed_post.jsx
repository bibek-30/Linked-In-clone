import React from 'react'
import ModelComponent from '../_misc/Model';
import Link from 'next/link';
import Image from 'next/image';


import profile from "../../../public/profile.jpg";

const FeedPost = () => {
  return (
    <div className="feedpost">
      <div className='post-wrapper'>
        <Link href="/profile" className="post_profile">
          <Image
            src={profile}
            alt="Bibek Shrestha"
            loading="lazy"
            width={100}
            height={100}
          />
        </Link>
        <ModelComponent />
      </div>
    </div>
  );
}

export default FeedPost