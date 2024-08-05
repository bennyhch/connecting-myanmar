import React from "react";

const MainContentWrapper = ({ children }) => {
  return (
    <main className="w-full text-justify">
      <section className="max-w-5xl w-full mx-auto my-50 mt-14 flex flex-wrap">
        {children}
      </section>
    </main>
  );
};

export default MainContentWrapper;

// Usage: used in scholars only
export const ParagraphWrapper = ({ children }) => (
  <>
    <p>{children}</p>
    <br />
    <br />
  </>
);
