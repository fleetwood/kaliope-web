import React from "react";

type sectionTitlePropTypes = {
  title: String;
  subTitle?: String;
};

const SectionTitle = (props: sectionTitlePropTypes) => {
  const { title, subTitle } = props;
  return (
    <h1 className="font-bold flex flex-col">
      <span className="text-4xl md:text-5xl lg:text-6xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-extrabold">
        {title}
      </span>
      {subTitle && (
        <span className="text-2xl md:text-3xl lg:text-4xl -mt-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary-content to-accent-content">
          <br />
          {subTitle}
        </span>
      )}
    </h1>
  );
};

export default SectionTitle;
