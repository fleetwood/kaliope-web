import React from "react";

type sectionTitlePropTypes = {
  title: String;
  subTitle?: String;
};

const SectionTitle = (props: sectionTitlePropTypes) => {
  const { title, subTitle } = props;
  return (
    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900 font-extrabold sm:text-6xl">
        {title}
      </span>
      {subTitle && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
          <br />
          {subTitle}
        </span>
      )}
    </h1>
  );
};

export default SectionTitle;
