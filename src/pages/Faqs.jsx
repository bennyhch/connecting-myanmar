import React from "react";
import HeaderImageWrapper from "../components/HeaderImage";
import NavButton from "../components/NavButton";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";

const QuestionWrapper = ({ children }) => (
  <>
    <br />
    <p className="font-semibold">{children}</p>
  </>
);

const AnswerWrapper = ({ children }) => (
  <p className="font-light">
    <i>{children}</i>
  </p>
);

const Faqs = () => {
  return (
    <div>
      <HeaderImageWrapper
        imgUrl="bg-[url('/src/assets/structure.jpg')]"
        isShading
      >
        <span className="text-customGreen">FREQUENTLY ASKED QUESTIONS</span>
      </HeaderImageWrapper>

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <article>
            <h4 className="text-customGold font-bold text-xl">
              About Donations
            </h4>
            <QuestionWrapper>What are CM's sources of funding?</QuestionWrapper>
            <AnswerWrapper>
              Our major source of funding are from one-off and monthly
              donations, as well as{" "}
              <a
                href="https://www.artsy.net/partner/connecting-myanmar"
                target="_blank"
                rel="noreferrer"
              >
                <u>art sales</u>
              </a>
              .
            </AnswerWrapper>

            <QuestionWrapper>
              Does CM charge any administration fee from the donation?
            </QuestionWrapper>
            <AnswerWrapper>
              No. We do not charge ANY Administration Fee. All those running
              Connecting Myanmar are non-remunerated and help out on a voluntary
              basis. (Join us!)
              <br />
              <br />
              The only additional fee is charged by the payment gateway as
              processing fee, but you can avoid this by choosing to donate via
              Bank Account Transfer to Connecting Myanmar’s Nanyang Commercial
              Bank account. (
              <u>
                <span className="font-semibold">Acc. No.</span>{" "}
                043-472-0-051676-1;{" "}
                <span className="font-semibold">Acc. Name:</span> Connecting
                Myanmar Limited)
              </u>
            </AnswerWrapper>
            <QuestionWrapper>
              Can I get tax deduction for my donation to CM?
            </QuestionWrapper>
            <AnswerWrapper>
              Yes. You can claim a deduction for donating money to Connecting
              Myanmar for charitable purposes as we are a charitable institution
              registered in Hong Kong and are exempted from tax under section 88
              of the Inland Revenue Ordinance.
              <br />
              <br />
              You can verify our status by searching “Connecting Myanmar” at{" "}
              <a
                href="https://www.ird.gov.hk/eng/tax/ach_search.htm"
                target="_blank"
                rel="noreferrer"
              >
                <u>https://www.ird.gov.hk/eng/tax/ach_search.htm</u>
              </a>
              .
            </AnswerWrapper>
            <QuestionWrapper>
              What if I want to stop my monthly donation?
            </QuestionWrapper>
            <AnswerWrapper>
              Please contact us at{" "}
              <a href="mailto:info@connectingmyanmar.org">
                <u>info@connectingmyanmar.org</u>
              </a>
              .
            </AnswerWrapper>
          </article>
          <article>
            <br />
            <br />
            <h4 className="text-customGold font-bold text-xl">
              CM’s Scholarship Scheme
            </h4>
            <QuestionWrapper>
              Who are the current students being funded by Connecting Myanmar?
            </QuestionWrapper>
            <AnswerWrapper>
              CM Scholars are those that we have personally met through MOEI (an
              HKU English-teaching volunteer programme organized by the Faculty
              of Social Sciences) as well as our own volunteering programmes,
              while others are outstanding students from Steve Gomersall’s
              Brighter Futures school.
              <br />
              <br />
              A committee has been set up to review scholarship applications
              based on (1) their past struggles, (2) personal character, (3)
              academic potential and (4) determination to contribute to their
              native communities after graduation.
              <br />
              <br />
              You may also view the {/* TODO: refactor the url... */}
              <a href="/connecting-myanmar/our-scholars" target="_blank">
                <u>stories of our CM Scholars</u>
              </a>{" "}
              on our website.
            </AnswerWrapper>
            <QuestionWrapper>
              Are you planning to sponsor more students?
            </QuestionWrapper>
            <AnswerWrapper>
              Yes! This is most certainly the plan. However, in light of
              COVID-19 and our limit in funding, we have stopped accepting new
              applicants. Nonetheless, we are working very hard now to expand
              our donor base and hope to resume applications as soon as
              possible. Your support is thus very important to us! We also aim
              to include donors who are interested in joining our student
              selection process upon establishing an open scholarship
              application in the future.
            </AnswerWrapper>
            <QuestionWrapper>
              Why does each Scholar under CM’s Scholarship Scheme receive
              different amounts of scholarship?
            </QuestionWrapper>
            <AnswerWrapper>
              Each Scholar requires a different amount of funding from CM as
              they attend different universities. Moreover, some students are
              able to obtain additional grants and scholarships from other
              institutions. Our scholarship covers the tuition fee and living
              costs of students, which range from HKD 10,000 to HKD 57,000 per
              year. We review their financial situations and adjust their funds
              accordingly on a yearly basis to ensure that our funds are well
              spent in the most efficient manner.
            </AnswerWrapper>
          </article>
          <article>
            <br />
            <br />
            <h4 className="text-customGold font-bold text-xl">
              CM's Patron Programme
            </h4>
            <QuestionWrapper>
              What if some of my co-Patrons drop out during the period of
              commitment?
            </QuestionWrapper>
            <AnswerWrapper>
              We do hope this is unlikely to happen as Scholars depend entirely
              on the Patrons to continue receiving their tertiary education.
              However, in the event this occurs, we will try our best to secure
              other funding and will do everything we can to avoid hampering our
              Scholar's education.
            </AnswerWrapper>
            <QuestionWrapper>
              What if I have to drop out from the Patron Programme?
            </QuestionWrapper>
            <AnswerWrapper>
              Please contact us at{" "}
              <a
                href="mailto:info@connectingmyanmar.org"
                target="_blank"
                rel="noreferrer"
              >
                <u>info@connectingmyanmar.org</u>
              </a>
              .
            </AnswerWrapper>
            <QuestionWrapper>
              What happens when a Patron's period of commitment ends (i.e. the
              Graduation Date of the Scholar has passed)?
            </QuestionWrapper>
            <AnswerWrapper>
              As the monthly donation is deducted automatically from the
              Patron's credit card/bank account, we will send an email to remind
              the Patron to cancel their authorisation of payment{" "}
              <u>1 month before the Graduation Date of the Scholar</u>. Be that
              as it may, Patrons are encouraged to continue their monthly
              donation by becoming another Scholar's Patron upon the lapse of
              their original commitment period.
            </AnswerWrapper>
          </article>
          <br />
          <NavButton link="/contact" text="CONTACT US" />
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default Faqs;
