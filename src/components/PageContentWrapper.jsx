import React from "react";

export const PageSectionWrapper = ({ children, isTopSection = false }) => {
  return (
    <section className="max-w-4xl w-full mx-auto my-50 px-10 pb-10">
      {isTopSection && (
        <>
          <br />
          <br />
        </>
      )}
      {children}
    </section>
  );
};

const PageContentWrapper = ({ children }) => {
  return <main className="w-full text-justify">{children}</main>;
};

export default PageContentWrapper;
