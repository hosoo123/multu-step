export const RegisterSec2 = () => {
  return (
    <div className="flex flex-col h-[434px] justify-between">
      {" "}
      <div className="font-semibold font-sans text-[14px] flex flex-col gap-y-2 text-black">
        <p>
          Email <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <p>
          Phone number <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <p>
          Password <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
        <p>
          Confirm password <span className="text-red-600">*</span>
        </p>
        <input
          className="w-full border-[#CBD5E1] border rounded-lg p-3"
          placeholder="Placeholder"
        />
      </div>
      <div className="flex flex-row gap-2">
        <button className="w-[128px] h-11 border border-[#CBD5E1] rounded-lg cursor-pointer bg-white flex justify-center items-center text-black">
          &lt; Back
        </button>
        <button className="h-11 w-full rounded-lg cursor-pointer bg-[#121316] text-white">
          Continue 2/3 &gt;
        </button>
      </div>
    </div>
  );
};
