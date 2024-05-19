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
    <div>
      <div className="mx-auto mb-9 w-full rounded-lg border border-border bg-section p-2 lg:w-fit">
        <div className="flex flex-col justify-center gap-2 lg:flex-row">
          <div
            onClick={() => setActiveTab("all")}
            className={`rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-primary cursor-pointer ${
              activeTab === "all" ? "bg-primary" : ""
            }`}
          >
            <div className="flex justify-center">
              <p className="flex items-center text-[18px] text-dark">
                <DynamicIcon icon={icons.all} className="mr-2" />
                All
              </p>
            </div>
          </div>
          {department.map((position: string, index: number) => (
            <div
              onClick={() => setActiveTab(position)}
              key={index}
              className={`rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-primary cursor-pointer ${
                activeTab === position ? "bg-primary" : ""
              }`}
            >
              <div className="flex justify-center">
                <p className="flex items-center text-[18px] text-dark">
                  <DynamicIcon icon={icons[position]} className="mr-2" />
                  {humanize(position)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row g-4">
        {career_list.map((career: any, index: number) => (
          <CareerCard career={career} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CareerTab;
