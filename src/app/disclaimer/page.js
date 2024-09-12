import React from "react";
import Disclaimer from "../../markdown/disclaimer.mdx";

const page = async ({}) => {
  return (
    <div className="prose w-full max-w-full py-12 px-24">
      <Disclaimer />
    </div>
  );
};

export default page;
