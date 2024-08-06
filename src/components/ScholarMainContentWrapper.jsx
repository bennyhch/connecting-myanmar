import React from "react";

// Usage: used in scholars only
const ScholarMainContentWrapper = ({ children }) => {
  return (
    <main className="w-full text-justify">
      <section className="max-w-5xl w-full mx-auto my-50 mt-14 flex flex-wrap">
        {children}
      </section>
    </main>
  );
};

export default ScholarMainContentWrapper;

// Usage: used in scholars only
export const ParagraphWrapper = ({ children }) => (
  <>
    <p>{children}</p>
    <br />
    <br />
  </>
);
