import { markdownify, slugify } from "@/lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";

type CareerData = CollectionEntry<"career">;

const CareerCard = ({ career }: { career: CareerData }) => {
  return (
    <div className="lg:col-6 colorize-hover-position-card">
      <div className="card border-t border-l p-7 lg:px-7 lg:py-9">
        {career.data?.title && (
          <h5
            className=" mb-2"
            dangerouslySetInnerHTML={{
              __html: markdownify(career.data?.title),
            }}
          />
        )}

        {career.data?.location && (
          <p className="text-md mb-2 text-dark">{career.data?.location}</p>
        )}

        <div className="flex items-center">
          {career.data?.duration && (
            <>
              <BiTimeFive className="mr-2 text-[18px] font-medium text-dark" />
              <p className="mr-2 text-[18px] text-dark">
                {career.data?.duration}
              </p>
            </>
          )}

          {career.data?.salary && (
            <>
              <RxDividerVertical className="mr-2 text-[18px] font-medium text-dark" />
              <p className="text-[18px] text-dark">{career.data?.salary}</p>
            </>
          )}
        </div>

        <hr className="mt-6 mb-5" />

        <p className="font-medium mb-4 text-dark">Minimum qualifications</p>
        {career.data?.qualification?.map((q, index: number) => (
          <ul
            key={index}
            className="text-base-sm font-medium space-y-2 text-dark"
          >
            <li>- {q}</li>
          </ul>
        ))}

        <a
          href={`/career/${slugify(career.slug)}`}
          className="colorize-hover-card-btn mt-6 inline-block"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareerCard;
