import { markdownify } from "@/lib/utils/textConverter";
import React, { useState } from "react";

const HowItWorksTab = ({
  processes,
}: {
  processes: {
    title: string;
    icon: string;
    image: string;
    content: string;
  }[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="row gx-5 custom-tab">
      <div className="col-12 md:col-5 order-2 md:order-1">
        <div className="card-lg colorize-tabs-content p-4">
          <img
            src={processes[activeTab]?.image}
            className="max-h-full"
            alt="Dashboard"
          />
        </div>
      </div>

      <div className="col-12 md:col-7 order-1 md:order-2">
        {processes.map((process, index) => (
          <section
            key={index}
            onClick={() => setActiveTab(index)}
            className={`custom-tab-nav-item colorize-tabs-item`}
          >
            <div
              className="card py-5 px-12"
              data-aos="fade-right-sm"
              data-aos-delay={index + 1 * 50}
            >
              <div className="flex items-start gap-5">
                <img
                  src={process.icon}
                  alt="Icon"
                  width="40"
                  height="40"
                  className="min-w-max bg-white rounded-md p-3"
                />

                <div>
                  <h6 className="mb-4">{process.title}</h6>
                  <p
                    className="text-sm lg:col-10"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(process.content),
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksTab;
