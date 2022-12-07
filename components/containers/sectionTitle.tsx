import React from "react";

type sectionTitlePropTypes = {
  title: String;
  subTitle?: String;
};

const SectionTitle = (props: sectionTitlePropTypes) => {
  const { title, subTitle } = props;
  return (
    <>
    <h1 className="title">
        {title}
    </h1>
    {subTitle && (
      <h1 className="subtitle">
        {subTitle}
      </h1>
    )}
    </>
  );
};

export default SectionTitle;
