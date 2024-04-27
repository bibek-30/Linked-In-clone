import React from "react";
import Link from "next/link";
import Image from "next/image";

import profile from "../../../public/profile.jpg";
import FeedPost from "./feed_post";

const feed = () => {
  return (
    <div className="feed">
      <div className="page-width">
        <div className="feed_container">
          <div className="profile_feed">
            <div className="profile_container">
              <div className="profile_img">
                <div className="background_profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 552 138"
                    id="person-default"
                    data-supported-dps="2048x512"
                  >
                    <path fill="none" d="M0 0h552v138H0z" />
                    <path fill="#d9e5e7" d="M0 0h552v138H0z" />
                    <path fill="#bfd3d6" d="M380 0h172v138H380z" />
                    <path
                      d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z"
                      fill="#a0b4b7"
                    />
                  </svg>
                </div>
                <Link href="/profile" className="profile_link">
                  <Image
                    src={profile}
                    alt="Bibek Shrestha"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                  <h3>Bibek Shrestha</h3>
                </Link>
              </div>
              <p>Full stack | Next.js | Laravel | Shopify</p>
            </div>
            <div className="profile_stats">
              <div className="stats_item">
                <p>Profile Viewer</p>
                <span>52</span>
              </div>
              <div className="stats_item">
                <p>Post Impressions</p>
                <span>27</span>
              </div>
            </div>
            <div className="my_items">
              <Link href="/">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                  </svg>
                  <span>My Items</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="post_feed">
            <FeedPost/>
          </div>
          <div className="recommendation_feed">Add to your feed</div>
        </div>
      </div>
    </div>
  );
};

export default feed;
