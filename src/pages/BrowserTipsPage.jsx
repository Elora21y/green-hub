import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { motion } from "motion/react";
import { PiPlantFill } from "react-icons/pi";
import { HiArrowSmRight, HiOutlineArrowNarrowRight } from "react-icons/hi";

const BrowserTipsPage = () => {
  const data = useLoaderData();
  const [isHover, setHover] = useState(false);
  const [tips, setTips] = useState(data);
  // console.log(tips);
  const [level, setLevel] = useState("");

  const sortedLevel = (level) => {
    setLevel(level);
    if (level === "") {
      setTips(data);
    } else if (level === "Easy") {
      setTips(data.filter((tip) => tip.level === level));
    } else if (level === "Medium") {
      setTips(data.filter((tip) => tip.level === level));
    } else if (level === "Hard") {
      setTips(data.filter((tip) => tip.level === level));
    }
  };
  return (
    <div>
      {/* sort */}
      <div className="flex flex-col justify-center items-end mr-2 mb-10 text-accent-content">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:bg-white hover:border-[#23BE0A] "
          >
            Filter By{level && `: ${level}`} <IoIosArrowDown size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => sortedLevel("")}>All</a>
            </li>
            <li>
              <a onClick={() => sortedLevel("Easy")}>Easy</a>
            </li>
            <li>
              <a onClick={() => sortedLevel("Medium")}>Medium</a>
            </li>
            <li>
              <a onClick={() => sortedLevel("Hard")}>Hard</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-accent-content text-sm">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch"
        >
          {tips.map((tip, index) => (
            <motion.div
             variants={{hidden:{ opacity: 0, y: 40 } , visible:{ opacity: 1, y: 0 }}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={tip._id}
              className="rounded-2xl shadow-primary/40 hover:shadow-lg transition-all duration-500 hover:scale-102 border border-primary/40 hover:border-primary p-4 bg-base-100 "
            >
              <img
                src={tip.photo}
                alt={tip.name}
                className={`w-full h-44 object-cover  rounded-xl `}
              />

              <div className="mt-3 space-y-2 font-bold text-accent-content flex-1">
                {/* title */}
                <h2 className="text-xl font-bold text-secondary">
                  {tip.title}
                </h2>
                {/* details */}
                <div className="flex flex-col gap-1">
                  <p className="flex gap-1 items-center">
                    <PiPlantFill className=" text-green-500" />
                    {tip.plant}{" "}
                  </p>
                  <p className="flex gap-1 items-center">
                    <BiCategoryAlt className=" text-green-500" />
                    {tip.category}{" "}
                  </p>
                  <p className="flex gap-1 items-center">
                    <GiLevelThreeAdvanced className=" text-red-500" />
                    {tip.level}
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to={`/tip-details/${tip._id}`}
                  className="text-primary font-medium flex justify-end items-center  hover:underline "
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  View Details
                  {isHover ? (
                    <HiOutlineArrowNarrowRight size={20} />
                  ) : (
                    <HiArrowSmRight size={20} />
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowserTipsPage;
