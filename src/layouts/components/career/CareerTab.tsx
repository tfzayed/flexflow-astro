import DynamicIcon from "@/helpers/DynamicIcon";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize } from "@/lib/utils/textConverter";
import React, { useState } from "react";
import CareerCard from "./CareerCard";

const CareerTab = ({
  department,
  careers,
}: {
  department: string[];
  careers: any;
}) => {
  const icons: any = {
    all: "FaTableCellsLarge",
    ui: "FaPenRuler",
    development: "FaCode",
    seo: "FaSearchengin",
  };

  const [activeTab, setActiveTab] = useState("all");
  const filterByCategories = taxonomyFilter(careers, "department", activeTab);

  const career_list = activeTab === "all" ? careers : filterByCategories;

  return (
    <>
      <div className="border p-4 md:p-1 rounded-lg md:rounded-full md:max-w-min mx-auto mb-12 font-bold flex flex-col md:flex-row">
        <button
          onClick={() => setActiveTab("all")}
          className={`shuffle-filter-btn rounded-md md:rounded-full px-8 py-3 lg:py-3 lg:px-10 capitalize text-sm flex justify-center items-center gap-x-2 w-full ${
            activeTab === "all" ? "bg-primary text-body" : ""
          }`}
        >
          <DynamicIcon icon={icons.all} className="mr-2" />
          All
        </button>
        {department.map((position: string, index: number) => (
          <button
            onClick={() => setActiveTab(position)}
            key={index}
            className={`shuffle-filter-btn rounded-md md:rounded-full px-8 py-3 lg:py-3 lg:px-10 capitalize text-sm flex justify-center items-center gap-x-2 w-full ${
              activeTab === position ? "bg-primary text-body" : ""
            }`}
          >
            <DynamicIcon icon={icons[position]} className="mr-2" />
            {humanize(position)}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {career_list.map((career: any, index: number) => (
          <CareerCard career={career} key={index} />
        ))}
      </div>
    </>
  );
};

export default CareerTab;
