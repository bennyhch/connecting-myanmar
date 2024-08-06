import React from "react";

export const PageSectionWrapper = ({ children, isTopSection = false }) => {
  return (
    <section className="max-w-5xl w-full mx-auto my-50">
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
