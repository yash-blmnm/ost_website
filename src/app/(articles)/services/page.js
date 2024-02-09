import { getContentData } from "@/lib/getContent";
// import { servicesContent } from "../../../lib/services";
// import { getContentData } from "@/lib/getContent";
import React from "react";

const page = async ({}) => {
  const postData = await getContentData("services");
  return (
    <div className="w-full lg:w-[80%]">
      {/* {servicesContent.map((eachContent, contextidx) => {
        const { heading, content, imageContent } = eachContent;
        const contentId = heading.toLowerCase().replaceAll(" ", "_");
        return (
          <article
            key={contextidx}
            data-section
            id={contentId}
            className="mb-16"
          >
            <div className="text-4xl font-bold mb-8">{heading}</div>
            {content &&
              content.map((contentValue, index) =>
                Array.isArray(contentValue) ? (
                  <ul>
                    {contentValue.map((listVal, indexVal) => (
                      <li key={indexVal}>{listVal}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={index} className="text-xl mb-12 text-justify">
                    {contentValue}
                  </p>
                )
              )}
            {imageContent && imageContent.length ? (
              <div className="flex flex-wrap gap-y-4 justify-between">
                {imageContent.map((imgObj, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 w-[150px] text-sm items-center justify-items-center"
                  >
                    <Image
                      src="/images/avatar.png"
                      height={150}
                      width={100}
                      alt="avatar"
                    />
                    <div className="text-center">{imgObj.name}</div>
                    <div className="text-center text-xs">{imgObj.position}</div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </article>
        );
      })} */}
      <div
        className="no-tailwind"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
};

export default page;
