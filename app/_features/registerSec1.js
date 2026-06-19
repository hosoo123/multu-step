export const RegisterSec1 = () => {
  return (
    <div className="font-semibold h-[434px] font-sans text-[14px] justify-between flex flex-col text-black">
      <div className="flex gap-y-2 flex-col">
        {" "}
        <p>
          First name <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <p>
          Last name <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <p>
          Username <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
      </div>
      <button className="h-11 w-104 rounded-lg bg-[#121316] text-white cursor-pointer">
        Continue 1/3 &gt;
      </button>
    </div>
  );
};
