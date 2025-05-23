import React from "react";
import toast from "react-hot-toast";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";

const UpdateTips = () => {
  const {
    title,
    plant,
    level,
    description,
    photo,
    category,
    availability,
    name,
    email,
    _id,
  } = useLoaderData()
  const navigate = useNavigate()

  const handleUpdateTips = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, ...information } = Object.fromEntries(
      formData.entries()
    );
    // console.log(information);

    const tipInformation = {
      name,
      email,
      ...information,
    };

    fetch(`http://localhost:2100/share-tips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          toast.success("Updated Garden Tips successfully");
          navigate('/my-tips')
        }
        else{
          toast.error('Update a field')
        }
      });
  };
  return (
    <div className="text-accent">
      <Link to='/my-tips' className="text-primary ">
      <FaCircleArrowLeft size={25}/>
      </Link>
      <div className="text-center mb-5 lg:mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
          Update Garden Tip
        </h2>
        <p className=" mt-2 max-w-2xl mx-auto text-base">
          EShare your favorite gardening tips and techniques with the GreenHub
          community. Whether you're a beginner or a seasoned grower, your
          experience can help others bloom.
        </p>
      </div>
      <div className="max-w-2xl mx-auto p-8 bg-primary/40 rounded-2xl shadow-lg ">
        <form className="space-y-4 " onSubmit={handleUpdateTips}>
          {/* title */}
          <input
            type="text"
            placeholder="Title (e.g. How I Grow Tomatoes Indoors)"
            className=" input input-bordered"
            name="title"
            defaultValue={title}
          />
          {/* plant name */}
          <input
            type="text"
            placeholder="Plant Type / Topic"
            className=" input input-bordered"
            name="plant"
            defaultValue={plant}
          />
          {/* level */}
          <select
            className="w-full select select-bordered "
            name="level"
            defaultValue={level}
          >
            <option disabled value="">
              Difficulty Level
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <textarea
            className="textarea focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] "
            rows="4"
            placeholder="Description"
            name="description"
            defaultValue={description}
          ></textarea>
          {/* photo */}
          <input
            type="url"
            placeholder="Image URL"
            className="w-full input input-bordered"
            name="photo"
            defaultValue={photo}
          />
          {/* category */}
          <select
            className="w-full select select-bordered"
            name="category"
            defaultValue={category}
          >
            <option disabled value="">
              Category
            </option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Hydroponics</option>
          </select>
          {/* availability */}
          <select
            className="w-full select select-bordered"
            name="availability"
            defaultValue={availability}
          >
            <option disabled value="">
              Availability
            </option>
            <option>Public</option>
            <option>Hidden</option>
          </select>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 text-accent">
            <input
              type="text"
              readOnly
              defaultValue={name}
              name="name"
              className="focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] input "
            />
            <input
              type="email"
              readOnly
              defaultValue={email}
              name="email"
              className="input focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] "
            />
          </div>

          <button type="submit" className="btn button-green btn-block">
            Update Tips
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTips;
