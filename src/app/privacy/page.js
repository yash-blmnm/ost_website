import React from "react";
import Privacy from "../../markdown/privacy.mdx";

const page = async ({}) => {
  return (
    <div className="prose w-full max-w-full px-24 py-12">
      <Privacy />
    </div>
  );
};

export default page;
