import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router';

const TopTrending = () => {
    const [topTips , setTopTips] = useState([])
    useEffect(() =>{
        fetch('https://green-hub-server.vercel.app/share-tips/top-trending')
        .then(res => res.json())
        .then(data => setTopTips(data))
    })
    return (
        <div>
            <section className="py-10 px-4 md:px-6 bg-base-200 text-accent-content my-16">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-secondary mb-8">
    Top Trending Tips
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {topTips.map(tip => (
      <div
        key={tip._id}
        className="rounded-2xl shadow-primary/40 hover:shadow-lg transition-all duration-500 hover:scale-102 border border-primary/40 hover:border-primary p-4 bg-base-100"
      >
        <img
          src={tip.photo}
          alt={tip.title}
          className="h-48 w-full object-cover rounded-md mb-4"
        />
        <div className="flex justify-between items-start gap-1">
            <div>
            <h3 className="text-lg md:text-xl font-semibold text-secondary mb-1">{tip.title}</h3>
        <p className="text-sm text-gray-400 mb-2">By {tip.name}</p>
        </div>
        <div className="flex items-center gap-1 text-sm justify-center">
            <FaHeart  className="text-red-600" /> 
           <p className="flex gap-1 text-xs">{tip.totalLiked>0 && tip.totalLiked} <span>{tip.totalLiked > 1 ? 'Likes' : 'Like'}</span></p>
        </div>
        
        </div>
        <Link
            to={`/tip-details/${tip._id}`}
            className="text-primary hover:underline font-medium "
          >
            View Details →
          </Link>
      </div>
    ))}
  </div>
</section>

        </div>
    );
};

export default TopTrending;