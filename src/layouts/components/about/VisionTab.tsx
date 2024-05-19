import DynamicIcon from "@/helpers/DynamicIcon";
import { useTabs } from "@/hooks/useTab";
import { markdownify } from "@/lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";
import React from "react";

type TabItem = CollectionEntry<"about">["data"]["value"];

const VisionTab = ({ visions }: { visions: TabItem }) => {
  const { selectedTab, onChange, selectedTabIndex, setSelectedTab } = useTabs({
    tabs: visions?.inspiration?.visions,
    initialTabId: 0,
    onChange: (index: number) => setSelectedTab(index),
  });
  return (
    <div className="section">
      <div className="container">
        <div className="row items-center gap-y-10" data-toggle-container>
          <div
            className="lg:col-6 text-center lg:text-left"
            data-aos="fade-left-sm"
          >
            <h3
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: markdownify(visions!.title),
              }}
            />
            <div className="flex gap-5 mb-9 justify-center lg:justify-start">
              {visions!.inspiration.visions.map(
                (vision: any, index: number) => (
                  <button
                    onClick={() => onChange(index)}
                    className="card-sm colorize-hover-card border-primary flex gap-x-3 p-3 shadow !transition-none"
                  >
                    <span>
                      <DynamicIcon
                        icon={vision.icon}
                        className="colorize-hover-card-fa-icon text-xl"
                      />
                    </span>
                    <span className="text-lg font-bold text-dark capitalize">
                      {vision.title}
                    </span>
                  </button>
                ),
              )}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: markdownify(selectedTab.content),
              }}
            />
          </div>
          <div className="lg:col-6" data-aos="zoom-out-sm">
            <div
              className={`card-lg max-w-[560px] mx-auto lg:mx-0 lg:ml-auto p-5 ${selectedTabIndex === 0 ? "border-primary bg-primary/15" : "border-quaternary bg-quaternary/15"}`}
              data-toggle-content="vision"
            >
              <img
                src={selectedTab.image}
                alt="Feature Image"
                width="490"
                height="395"
                draggable="false"
                className="w-[564] h-[460] object-fill select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionTab;
