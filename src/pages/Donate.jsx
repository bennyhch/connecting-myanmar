import React from "react";
import { Link } from "react-router-dom";

import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper from "../components/PageContentWrapper";
import FooterButton from "../components/FooterButton";
import DonorboxForm from "../components/DonorboxForm";

const TextContainer = ({ children, title }) => {
  return (
    <div className="flex-1 basis-full md:basis-1/2 pl-4">
      <h3 className="text-customGold">{title}</h3>
      {children}
    </div>
  );
};

const FormContainer = ({ children }) => {
  return (
    <div className="flex-1 basis-full md:basis-1/2 flex justify-center">
      {children}
    </div>
  );
};

const Donate = () => {
  return (
    <div>
      <HeaderImageWrapper
        imgUrl="bg-[url('/src/assets/becomePatron.jpg')]"
        isShading
      >
        we fund future{" "}
        <span className="text-customGreen">community leaders</span> to benefit
        the broader community
      </HeaderImageWrapper>

      <div className="bg-customGrey donate">
        <PageContentWrapper>
          <section className="max-w-5xl w-full mx-auto my-50 px-10 pb-10">
            <br />
            <br />
            <article className="flex flex-wrap">
              <FormContainer>
                <DonorboxForm />
              </FormContainer>
              <TextContainer>
                <h1 className="text-customGreen font-bold text-xl">
                  YOUR SUPPORT
                </h1>
                <br />
                <br />
                <h2>Scholarship Scheme</h2>
                <p>
                  Your donation will go to our Scholarship Scheme supporting
                  Myanmar students to attend universities. We prioritise funding
                  future community leaders who want to contribute back to the
                  community.{" "}
                </p>
                <br />
                <br />
                <h2>Be a Patron of Dingo / Satkyar / Blessing</h2>
                <p>
                  You can opt to designate your donation to one of our scholars.
                  To learn more about our patron program, please go to{" "}
                  <u>
                    <i>
                      {/* TODO: refactor the url...*/}
                      <Link to="/patrons" target="_blank">
                        PATRONS.
                      </Link>
                    </i>
                  </u>
                </p>
                <br />
                <br />
                <h2>Mae Tao Clinic</h2>
                <p>
                  Your donation will go to Mae Tao Clinic, a comprehensive
                  community health centre at the Thai-Myanmar border to help
                  those who are oppressed and displaced from inside Myanmar.
                </p>
                <br />
                <br />
                <h2>Anglican Language and Computer Centre</h2>
                <p>
                  Anglican Language and Computer Centre (ALCC) is one of the
                  three post-ten schools in Mae La Camp, the largest Myanmar
                  refugee camp at the Thai-Myanmar border. ALCC currently
                  provides education for 84 students focusing mainly on computer
                  and language training. ALCC is recently faced with funding
                  uncertainty from its major donor and has sought Connecting
                  Myanmar’s assistance to help raise emergency funds.
                </p>

                <br />
                <br />
                <p>
                  If you would like to use{" "}
                  <span className="underline font-bold italic">Apple Pay</span>,
                  please click the button below. This will redirect you to the
                  official Donorbox campaign page.
                </p>
                <br />

                <FooterButton
                  text="APPLE PAY"
                  link="https://donorbox.org/scholarship-4"
                  newTab
                  color="bg-customGreen"
                />

                <br />
                <br />
                <p className="text-xs italic">
                  {" "}
                  &#9733; Connecting Myanmar is a charitable organization
                  registered in Hong Kong and your contributions are
                  tax-deductible in Hong Kong.
                </p>
              </TextContainer>
            </article>
          </section>
        </PageContentWrapper>
      </div>
    </div>
  );
};

export default Donate;
