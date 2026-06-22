import { useState } from "react";

export const RegisterSec1 = ({ handleNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="font-semibold h-[434px] font-sans text-[14px] justify-between flex flex-col text-black">
      <div className="flex gap-y-2 flex-col">
        {" "}
        <p>
          First name <span className="text-red-600">*</span>
        </p>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Your first name"
        />
        <p>
          Last name <span className="text-red-600">*</span>
        </p>
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Your last name"
        />
        <p>
          Username <span className="text-red-600">*</span>
        </p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Your username"
        />
      </div>
      <button
        className="h-11 w-104 rounded-lg bg-[#121316] text-white cursor-pointer"
        onClick={handleNext}
      >
        Continue 1/3 &gt;
      </button>
    </div>
  );
};
