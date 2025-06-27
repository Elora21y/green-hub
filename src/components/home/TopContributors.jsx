import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    title: 'Community Members',
    count :1000,
    mark : '+'
  },
  {
    title: 'Gardening Tips Shared',
    count :50,
    mark : '+'
  },
  {
    title: 'Plant Species Featured',
    count :150,
    mark : '+'
  },
  {
    title: 'User Satisfaction Rate',
    count : 95,
    mark : '%'
  },
]

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce:1
  });

  return (
    <div className=" py-10 lg:py-20 ">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-accent-content mb-4 roboto">
      Our Green Journey in Numbers
    </h2>

    {/* Section Description */}
    <p className="text-accent-content max-w-2xl mx-auto mb-12">
      GreenHub is growing every day with amazing gardeners, learners, and nature lovers. Here’s a quick look at how we’re blooming together.
    </p>

    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-accent text-xl font-semibold"
    >

{
  stats.map(s => 
    
      <div className="bg-green-100 border-primary border-2  hover:border-primary p-8 rounded-xl shadow-lg hover:scale-104 duration-500 transition-all">
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {inView && <CountUp end={s.count} duration={6} />}{s.mark}
        </h3>
        <p>{s.title} </p>
      </div>
  )
}
    </div>
  </div>
</div>

  );
};

export default Stats