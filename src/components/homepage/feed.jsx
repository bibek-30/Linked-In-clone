import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import profile from '../../../public/profile.jpg'

const feed = () => {
    return (
        <div className='feed'>
            <div className='page-width'>
                <div className='feed_container'>
                    <div className='profile_feed'>
                        <div className='profile_container'>
                            <div className='profile_img'>
                                <div className='background_profile'></div>
                                <Link href="/profile" className="profile_link">
                                    <Image src={profile} alt="Bibek Shrestha" loading='lazy' width={100} height={100} />
                                    <h3>Bibek Shrestha</h3>
                                </Link>
                            </div>
                            <p>Full stack | Next.js | Laravel | Shopify</p>
                        </div>
                        <div className='profile_stats'>
                            <div className='stats_item'>
                                <p>Profile Viewer</p>
                                <span>52</span>
                            </div>
                            <div className='stats_item'>
                                <p>Post Impressions</p>
                                <span>27</span>
                            </div>
                        </div>
                        <div className='my_items'>
                            <Link href="/">
                                <div>
                                    <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="bookmark-fill-small">
                                        <use href="#bookmark-fill-small" width="16" height="16"></use>
                                    </svg>
                                    <span>My Items</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='post_feed'>
                        Feed
                    </div>
                    <div className='recommendation_feed'>
                        Add to your feed
                    </div>
                </div>
            </div>
        </div >
    )
}

export default feed