import React from "react";

const Comment = () => {
  return (
    <div className="list py-3 px-4 rounded-md bg-slate-50 dark:bg-[#121e3a] mb-4">
      <div className="flex justify-start items-center pb-2">
        <h1 className="text-md font-semibold dark:text-white">sanjaya7</h1>
        <p className="text-md font-semibold mx-2 dark:text-white"> - </p>
        <p className="text-xs font-semibold text-[#888888] italic dark:text-white">
          2023 Jan 7
        </p>
      </div>
      <div className="info">
        <p className="text-sm dark:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
          repellat! Eius quidem labore quos sapiente veniam quaerat, soluta
          voluptate provident corrupti aliquid! Voluptatem obcaecati blanditiis
          molestiae eum mollitia temporibus voluptatibus.
        </p>
      </div>
    </div>
  );
};

export default Comment;
