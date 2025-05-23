import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const UpdateTips = () => {
    const {user} = use(AuthContext)
    
  const handleUpdateTips = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {name , email, ...information} = Object.fromEntries(formData.entries());
    console.log(information);

const tipInformation = {
    name,email,...information 
}

    fetch('http://localhost:2100/share-tips' , {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(tipInformation)
    })
    .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
            //  console.log('New coffee is' , data)
             toast.success('Updated Garden Tips')
             e.target.reset()
           }
        })
  };
    return (
         <div className="text-accent">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary">
             Update Garden Tip
          </h2>
          <p className=" mt-2 max-w-2xl mx-auto text-base">
          EShare your favorite gardening tips and techniques with the GreenHub community. Whether you're a beginner or a seasoned grower, your experience can help others bloom.
          </p>
        </div>
      <div className="max-w-2xl mx-auto p-8 bg-primary/40 rounded-2xl shadow-lg mt-8">
        <form className="space-y-4" onSubmit={handleUpdateTips}>
          {/* title */}
          <input
            type="text"
            placeholder="Title (e.g. How I Grow Tomatoes Indoors)"
            className=" input input-bordered"
            name="title"
          />
          {/* plant name */}
          <input
            type="text"
            placeholder="Plant Type / Topic"
            className=" input input-bordered"
            name="plant"
          />
          {/* level */}
          <select className="w-full select select-bordered " name="level">
            <option disabled selected>
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
          ></textarea>
          {/* photo */}
          <input
            type="url"
            placeholder="Image URL"
            className="w-full input input-bordered"
            name="photo"
          />
          {/* category */}
          <select className="w-full select select-bordered" name="category">
            <option disabled selected>
              Category
            </option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Hydroponics</option>
          </select>
          {/* availability */}
          <select className="w-full select select-bordered" name="availability">
            <option disabled selected>
              Availability
            </option>
            <option>Public</option>
            <option>Hidden</option>
          </select>

          <div className="grid grid-cols-2 gap-4 text-accent">
              <input
                type="text"
                readOnly
                defaultValue={user.displayName}
                name="name"
                className="focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] input "
              />
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              name="email"
              className="input focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] "
            />
          </div>

          <button type="submit" className="btn button-green btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateTips;