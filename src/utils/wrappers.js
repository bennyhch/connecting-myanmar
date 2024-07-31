export const HeaderWrapper = ({ children }) => {
  return <header className="relative h-50lvh">{children}</header>;
};

export const SectionHeading = ({ text, textColor }) => {
  return <h2 className={`${textColor} font-bold mb-5 text-2xl`}>{text}</h2>;
};
