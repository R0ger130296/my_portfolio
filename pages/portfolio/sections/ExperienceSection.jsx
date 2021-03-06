import React from "react";

export default function ExperienceSection() {
  return (
    <section>
      <div className="h-auto bg-white flex lg:flex-row md:flex-row flex-col lg:px-48 md:px-24 px-4 py-12">
        <div className="lg:w-1/4 md:w-1/4 w-full">
          <h1>
            <span className="uppercase font-bold border-b-2 border-blue-500 text-2xl px-2">
              Experience
            </span>
          </h1>
        </div>

        <div className="lg:w-3/4 md:w-3/4 w-full">
          <div className="py-3">
            <h3 className="font-bold text-2xl">Labmeta S.A.</h3>
            <p className="text-sm">Software Developer.</p>
            <p className="text-sm">February 18, 2019 to present.</p>
            <div className="py-3 text-sm text-gray-600">
              <p>
                Development of POS, inventory system, biometric control and
                website.
              </p>
              <p>Technical support of software and hardware to workers.</p>
              <p>Network monitoring.</p>
              <p>
                Installation, configuration and maintenance of operating systems
                on company computers and servers.
              </p>
              <p>
                Repair and configuration of printers and office/laboratory
                equipment.
              </p>
              <p>Documentation</p>
            </div>
          </div>

          <div className="py-3">
            <h3 className="font-bold text-2xl">
              SENADI - National Service for Intellectual Rights
            </h3>
            <p className="text-sm">Internship.</p>
            <p className="text-sm">August 27, 2018 to October 19, 2018</p>
            <div className="py-3 text-sm text-gray-600">
              <p>Development of the Requirements Management System.</p>
              <p>Testing of network points.</p>
              <p>Maintenance and assembly of computers and printers.</p>
              <p>Installation of antivirus security software in the company.</p>
              <p>Technical support of software and hardware to workers.</p>
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
