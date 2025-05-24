import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UpdateTips from "./UpdateTips";

const MyTips = () => {
  const { user } = use(AuthContext);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2100/share-tips")
      .then((res) => res.json())
      .then((data) => {
        const myTips = data.filter((tip) => tip.email === user.email);
        setTips(myTips);
      });
  }, [user.email]);
  // console.log(tips);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/share-tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tips has been deleted.",
                icon: "success",
              });
              const remainingTip = tips.filter((tip) => tip._id !== id);
              setTips(remainingTip);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto overflow-y-hidden text-accent-content text-xs lg:text-base">
      
        <h2 className="text-3xl lg:text-5xl font-bold text-secondary text-center mb-5">
          My Tip Collection
        </h2>
      {tips.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead className=" bg-primary/30 text-secondary">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id}>
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={tip.photo} alt="user" />
                    </div>
                  </div>
                </th>
                <td>
                  <h3 className="font-medium text-secondary">{tip.title}</h3>
                </td>
                <td>{tip.category}</td>
                <td>{tip.availability}</td>
                <td>{tip.level}</td>
                <td>
                  <div className="flex gap-4 items-center ">
                    
                    {/* //modal */}
                    <Link to={`/update-tips/${tip._id}`}
                      className="text-secondary btn btn-xs border-primary/30 hover:bg-primary hover:text-white"
                    >
                      <CiEdit size={20} />
                    </Link>

                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="text-red-600 btn btn-xs border-primary/30 hover:bg-red-500 hover:text-white "
                    >
                      <RiDeleteBin6Line size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="bg-primary/40 flex flex-col items-center justify-center p-6  md:p-10 rounded-xl min-h-[calc(100vh-430px)] gap-2 text-center mx-auto">
          <img src="/no-tips.png" alt="" className="w-24 md:w-40" />
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
            No Tips Added
          </h2>
          <p>
            Please go back the Share a Garden Tips page and add a garden Tips
          </p>
        </div>
      )}
    </div>
  );
};

export default MyTips;
