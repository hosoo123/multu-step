import { useState } from "react";

export const RegisterSec2 = ({ handleNext, handleBack }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{8}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  const checkError = () => {
    let IsValid = true;
    // email error check
    if (email.length < 1) {
      setEmailError("Please provide a valid email address.");
      IsValid = false;
    } else if (emailRegex.test(email) == false) {
      setEmailError("Email буруу форматтай байна. (test@example.com)");
      IsValid = false;
    } else {
      setEmailError("");
    }
    // phone number error check
    if (phoneNumber.length < 1) {
      setPhoneNumberError("Please enter a valid phone number.");
      IsValid = false;
    } else if (phoneRegex.test(phoneNumber) == false) {
      setPhoneNumberError("8 оронтой тоо байх");
      IsValid = false;
    } else {
      setPhoneNumberError("");
    }
    // password error check
    if (password.length < 1) {
      setPasswordError("Password must include letters and numbers.");
      IsValid = false;
    } else if (passwordRegex.test(password) == false) {
      setPasswordError(
        "хамгийн багадаа 8 ба түүнээс урт үсэг болон 1 том үсэг 1 тоо байх",
      );
      IsValid = false;
    } else {
      setPasswordError("");
    }
    // confirm password check error
    if (confirmPassword.length < 1) {
      setConfirmPasswordError("Confirm password хоосон байна.");
      IsValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Нууц үг таарахгүй байна.");
      IsValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return IsValid;
  };

  const handleClick = () => {
    const validate = checkError();
    if (validate == true) {
      handleNext();
    }
  };

  return (
    <div className="flex flex-col h-[434px] justify-between">
      {" "}
      <div className="font-semibold font-sans text-[14px] flex flex-col gap-y-2 text-black">
        <p>
          Email <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <div className="text-[#E14942] font-normal text-[14px]">
          {emailError.length == 0 ? "" : emailError}
        </div>
        <p>
          Phone number <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <div className="text-[#E14942] font-normal text-[14px]">
          {phoneNumberError.length == 0 ? "" : phoneNumberError}
        </div>
        <p>
          Password <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <div className="text-[#E14942] font-normal text-[14px]">
          {passwordError.length == 0 ? "" : passwordError}
        </div>
        <p>
          Confirm password <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <div className="text-[#E14942] font-normal text-[14px]">
          {confirmPasswordError.length == 0 ? "" : confirmPasswordError}
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={handleBack}
          className="w-[128px] h-11 border border-[#CBD5E1] rounded-lg cursor-pointer bg-white flex justify-center items-center text-black"
        >
          &lt; Back
        </button>
        <button
          className="h-11 w-full rounded-lg cursor-pointer bg-[#121316] text-white"
          onClick={handleClick}
        >
          Continue 2/3 &gt;
        </button>
      </div>
    </div>
  );
};
