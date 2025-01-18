'use client';

import React from "react";

interface Heading {
  smallHeading?: string;
  blueSmallHeading?: string;
  title: string;
  subheading?: string;
  additionalSubheading?: string;
}

interface CenterText {
  headings: Heading[];
}

const CenterText: React.FC<CenterText> = ({ headings }) => {
  return (
    <div className="items-center gap-4 py-[60px]">
     {headings.map((heading, index) => (
        <div key={index} className="text-center">
          {heading.smallHeading && (
            <p className="text-sm text-gray-600 mb-3">
              {heading.smallHeading}
            </p>
          )}
          {heading.blueSmallHeading && (
            <p className="text-blue-500 mb-3 font-bold text-sm">
              {heading.blueSmallHeading}
            </p>
          )}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {heading.title}
          </h2>
          {heading.subheading && (
            <p className="sm:text-[19px] text-[14px] text-gray-600">
              {heading.subheading}
            </p>
          )}
          {heading.additionalSubheading && (
            <p className="sm:text-[19px] text-[14px] text-gray-600 mb-3">
              {heading.additionalSubheading}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CenterText;


