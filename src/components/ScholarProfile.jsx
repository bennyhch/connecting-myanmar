import React from "react";

const listStyles = "list-disc pl-5";
const subHeadingStyles = "text-customBrown font-semibold text-xl mb-2";

const List = ({ title, points }) => {
  return (
    <>
      <h4 className={subHeadingStyles}>{title}</h4>
      <ul className={listStyles}>
        {points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );
};

const ScholarProfile = ({
  profilePicture,
  name,
  age,
  ethnicity,
  placeOfBirth,
  programs,
  goals,
  facts,
  images,
}) => {
  return (
    <article className="w-full md:w-2/5 p-10">
      <div className="w-3/4">
        <img src={profilePicture} alt={`Profile of ${name}`} />
      </div>

      <br />
      <br />

      <h4 className={subHeadingStyles}>About {name}</h4>
      <ul className="listStyles">
        <li>Age: {age}</li>
        <li>Ethnicity: {ethnicity}</li>
        <li>Place of Birth: {placeOfBirth}</li>
      </ul>
      <br />

      <List title="School & Programme" points={programs} />
      <br />

      <List title="Goals & Dreams" points={goals} />
      <br />

      <h4 className={subHeadingStyles}>Interesting facts about {name}</h4>
      {facts?.map((fact) => (
        <>
          <p>{`Q: ${fact.question}`}</p>
          <p className="font-extralight">
            <i>{`A: ${fact.answer}`}</i>
          </p>
          <br />
        </>
      ))}

      <br />
      {images && (
        <div className="flex flex-col gap-5">
          {images.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
      )}
    </article>
  );
};

export default ScholarProfile;
