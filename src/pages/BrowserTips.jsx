import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const BrowserTips = () => {
  const data = useLoaderData();
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
            Sort By{level && `: ${level}`} <IoIosArrowDown size={20} />
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

      <div className="overflow-x-auto overflow-y-hidden ">
        {tips.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="bg-primary/30 text-secondary">
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip, index) => (
                <tr key={tip._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={tip.photo} alt="profile" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="font-medium text-secondary">{tip.title}</h3>
                  </td>
                  <td>{tip.category}</td>
                  <td>{tip.level}</td>
                  <td>
                    <Link
                      to={`/tip-details/${tip._id}`}
                      className="btn btn-ghost button-green btn-sm py-5 md:py-4"
                    >
                      see more
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="bg-primary/40 flex flex-col items-center justify-center p-6  md:p-10 rounded-xl min-h-[calc(100vh-430px)] gap-2 text-center mx-auto">
            <img src="/no-tips.png" alt="" className="w-24 md:w-40" />
            <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
              No Tips Available
            </h2>
            <p>
              Please go back the Share a Garden Tips page and add a garden Tips
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowserTips;
