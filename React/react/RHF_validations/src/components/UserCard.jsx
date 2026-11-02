import React from "react";

const UserCard = ({ user, index, setToggle, setUserUpdate, deleteUser }) => {
  return (
    <div className="p-4 text-white border border-white rounded flex flex-col gap-2">
      <div className="object-cover h-40 w-full">
        <img
          className="object-fit h-full w-full rounded"
          src={user.image}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.contact}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button
          onClick={() => {
              setUserUpdate({
                ...user,
                index:index
            });
            setToggle(false);
          }}
          className="p-3 bg-yellow-700 rounded-xl"
        >
          Update
        </button>
        <button onClick={()=>{
          deleteUser(index)
        }} className="p-3 bg-red-700 rounded-xl">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
