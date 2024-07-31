export const HeaderWrapper = ({ children }) => {
  return <header className="relative h-70lvh">{children}</header>;
};

export const SectionHeading = ({ text, textColor }) => {
  return <h2 className={`${textColor} font-bold mb-5 text-2xl`}>{text}</h2>;
};

export const sectionWrapperStyles = "max-w-xl w-full mx-auto my-50";

export const headingBackgroundImageStyles =
  "absolute inset-0 h-full bg-cover bg-center text-black blur-sm";

export const headingTextStyles =
  "text-xl leading-normal font-bold absolute text-white w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
