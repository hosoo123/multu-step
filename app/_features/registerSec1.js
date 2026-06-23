import { useState } from "react";
export const RegisterSec1 = ({ handleNext }) => {
  const nameRegex = /^[A-Za-zА-Яа-яӨөҮүЁё\s]+$/;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  console.log("asdasd", nameRegex.test("adsada2"));

  const checkError = () => {
    let zow = true;
    if (firstName.length < 1) {
      return setFirstNameError(
        "First name cannot contain special characters or numbers.",
      );
    } else if (nameRegex.test(firstName) == false) {
      setFirstNameError("too bna");
    } else {
      setFirstNameError("");
    }
    return zow;
  };

  const handleClick = () => {
    const validate = checkError();
    if (validate == true) {
      handleNext();
    }
  };

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
        <div className="text-[#E14942] font-normal text-[14px]">
          {firstNameError.length == 0 ? "" : firstNameError}
        </div>
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
        <div className="text-[#E14942] font-normal text-[14px]">
          {lastNameError.length == 0 ? "" : lastNameError}
        </div>
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
        <div className="text-[#E14942] font-normal text-[14px]">
          {userNameError.length == 0 ? "" : userNameError}
        </div>
      </div>
      <button
        className="h-11 w-104 rounded-lg bg-[#121316] text-white cursor-pointer"
        onClick={handleClick}
      >
        Continue 1/3 &gt;
      </button>
    </div>
  );
};
