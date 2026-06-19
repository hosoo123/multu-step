import Image from "next/image";

export const RegisterSec3 = () => {
  return (
    <div className="flex flex-col h-[434px] justify-between">
      {" "}
      <div className="font-semibold font-sans text-[14px] flex flex-col gap-y-2 text-black">
        <p>
          Date of birth <span className="text-red-600">*</span>
        </p>
        <div className="border border-[#CBD5E1] flex rounded-lg items-center">
          <input
            className="w-full rounded-lg h-11 p-3"
            placeholder="--/--/--"
          />
          <img
            src="/icons/calendar.svg"
            className="absolute right-11 flex items-end"
          />
        </div>
        <p>
          Profile image <span className="text-red-600">*</span>
        </p>
        <div className="flex justify-center cursor-pointer items-center">
          {" "}
          <input
            type="file"
            className="flex justify-center items-center z-3 cursor-pointer bg-[#7F7F800D] rounded-lg h-[180px] w-[416px] text-transparent"
          />
          <div className="absolute justify-center items-center flex flex-col gap-2">
            {" "}
            <div className="bg-[#FFFFFF] rounded-full flex items-center justify-center  w-7 h-7">
              {" "}
              <Image
                src="/icons/upload.svg"
                alt="zurag bgashu"
                width={12}
                height={12}
              />
            </div>
            <p className=" ">Add image</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button className="w-[128px] h-11 border border-[#CBD5E1] rounded-lg cursor-pointer bg-white flex justify-center items-center text-black">
          &lt; Back
        </button>
        <button className="h-11 w-full rounded-lg cursor-pointer bg-[#121316] text-white">
          Continue 3/3 &gt;
        </button>
      </div>
    </div>
  );
};
