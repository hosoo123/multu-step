import Image from "next/image";
import { useState } from "react";

export const RegisterSec3 = ({ handleBack, handleNext }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [uploadImg, setUploadImg] = useState("");

  const [uploadImgError, setUploadImgError] = useState("");

  const handleUploadImg = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadImg(URL.createObjectURL(file));
    setUploadImgError("");
  };
  const validate = () => {
    if (!uploadImg) {
      setUploadImgError("Профайл зурагаа оруулна уу");
      return false;
    }
    setUploadImgError("");
    return true;
  };
  const handleClick = () => {
    const IsValid = validate();
    if (IsValid == true) {
      handleNext();
    }
  };

  return (
    <div className="flex flex-col h-[434px] justify-between">
      {" "}
      <div className="font-semibold font-sans text-[14px] flex flex-col gap-y-2 text-black">
        <p>
          Date of birth <span className="text-red-600">*</span>
        </p>
        <div className="border border-[#CBD5E1] flex rounded-lg items-center">
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            className="w-full rounded-lg h-11 p-3 inputContainer dateinput"
            placeholder="--/--/--"
          />
        </div>
        <p>
          Profile image <span className="text-red-600">*</span>
        </p>
        <div className="flex flex-col object-cover items-center justify-center cursor-pointer ">
          {" "}
          <input
            onChange={handleUploadImg}
            type="file"
            accept="image/*"
            className="flex justify-center items-center z-3 cursor-pointer bg-[#7F7F800D] rounded-lg h-[180px] w-full text-transparent"
          />
          {uploadImg && (
            <img
              src={uploadImg}
              className="absolute w-[416px] h-[180px] object-center rounded-lg z-10 UploadImage"
              alt="preview"
            />
          )}
          {uploadImgError.length > 0 && (
            <p className="flex text-red-500 items-start w-full font-normal">
              {uploadImgError}
            </p>
          )}
          <div className="absolute justify-center items-center flex flex-col gap-2">
            {" "}
            <div className="bg-[#FFFFFF] rounded-full flex items-center justify-center  w-7 h-7">
              {" "}
              <Image
                className="flex items-center justify-center"
                src="/icons/upload.svg"
                alt="zurag bgashu"
                width={12}
                height={12}
              />
            </div>
            <p className="flex items-center justify-center ">Add image</p>
          </div>
          {uploadImg && (
            <div
              className="absolute z-30 bg-black w-6 h-6 rounded-xl top-78 right-11 flex items-center justify-center cursor-pointer"
              onClick={() => setUploadImg("")}
            >
              <img src="/icons/close.svg" alt="x-icon" />
            </div>
          )}
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
          Continue 3/3 &gt;
        </button>
      </div>
    </div>
  );
};
