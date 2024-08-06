import React from "react";

import HeaderImageWrapper from "../components/HeaderImage";
import NavButton from "../components/NavButton";
import { SectionHeading } from "../utils/wrappers";

const Aid = () => (
  <div>
    <HeaderImageWrapper imgUrl="bg-[url('/src/assets/aid.jpg')]">
      IN <span className="text-customGreen">SOLIDARITY</span> WITH THE PEOPLE
    </HeaderImageWrapper>
    <main className="w-full text-justify">
      <section className="max-w-5xl w-full mx-auto my-50 mt-14">
        <SectionHeading
          text="SUPPORT MAE TAO CLINIC"
          textColor="text-customGreen"
        />
        <p>
          Since the military coup in Myanmar in February 2021, Connecting
          Myanmar has been fundraising for{" "}
          <span className="text-customGreen">
            <a
              href="https://maetaoclinic.org/"
              target="_blank"
              rel="noreferrer"
            >
              Mae Tao Clinic
            </a>
          </span>
          , a comprehensive community health centre at the Thai-Myanmar border
          to help those who are{" "}
          <span className="text-customBrown">
            oppressed and displaced from inside Myanmar.
          </span>
        </p>
        <br />
        <br />

        <p>By donating to Mae Tao Clinic, you will be supporting:</p>
        <ol className="list-decimal pt-3 p-8">
          <li>
            Health workers who are{" "}
            <span className="text-customBrown">trained on medical care</span> as
            well as
            <span className="text-customBrown">psychological first aid</span> to
            assist those under threat
          </li>
          <li>
            Communities in need by providing them with{" "}
            <span className="text-customBrown">
              supply of emergency goods and social assistance
            </span>
          </li>
        </ol>

        <br />
        <br />
        <p>The list below is how your donation will help:</p>

        <ul className="list-disc pt-3 p-8">
          <li>
            <span className="text-customBrown font-semibold">US $15</span> - One
            safe delivery kits / basic first aid kits / life jacket / solar
            flashlight
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $25</span> -
            Micronutrients Supplements (e.g. Vitamin A, Deworming tablet) for 40
            children / 6 raincoats for people fleeing armed conflicts
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $80</span> - One
            advanced first aid kits for medics to provide primary health care
            service in conflict-affected areas
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $100</span> -
            Dry food ration (rice, salt, cooking oil, etc.) for 10 people for a
            month
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $250</span> -
            Life-saving basic emergency obstetric care / Basic surgical
            instrument sets for minor surgical procedure
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $500</span> -
            Treatment required for life-saving advanced emergency obstetric care
            (caesarean section)
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $1,000</span> -
            Hygiene supplies for 100
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $2,000</span> -
            One medicine set to provide essential treatment for 2,000 people for
            one year
          </li>
          <li>
            <span className="text-customBrown font-semibold">US $7,000</span> -
            Support installation of water and sanitation system for 500 families
            in the temporary displaced camp.
          </li>
        </ul>
        <br />
        <br />

        <a
          href="https://mailchi.mp/ff3d8e3886c1/in-solidarity-with-you-5339530?fbclid=IwAR2D93X3T9YEavOLC-pEVPwhKDUCKIYP1RvD1nBxYpwJNnLAq99rZm2IQ_8"
          target="_blank"
          rel="noreferrer"
          className="text-customGreen text-sm"
        >
          <i>For more details, please see Mae Tao Clinic's newsletter</i>
        </a>
        <br />
        <br />

        <NavButton text="I WANT TO SUPPORT MAW TAO CLINIC" link="/donate" />
      </section>
    </main>
  </div>
);

export default Aid;
