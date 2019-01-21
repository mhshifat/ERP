import React, { Component, Fragment } from "react";

import HeaderComponent from "./Components/Layouts/HeaderComponent";
import HeroComponent from "./Components/Homepage/HeroComponent";
import FeaturesComponent from "./Components/Homepage/FeaturesComponent";
import SectionLeft from "./Components/Homepage/SectionLeft";
import SectionRight from "./Components/Homepage/SectionRight";
import ClientReviews from "./Components/Homepage/ClientReviews";
import CallTOAction from "./Components/Homepage/CallTOAction";
import FooterComponent from "./Components/Layouts/FooterComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <HeroComponent />
        <FeaturesComponent />
        <SectionLeft
          leftImg="section1.png"
          contentTitle="Empower your workforce with HRM"
          contentDesc="Individual profiles and work logs for each employee allow you to
          manage their payrolls, emphasis workload, promotion and leave –
          everything can be monitored and managed online with absolute
          clarity."
          conSecOneImg="section1db.png"
          conSecOneTitle="Evolving
          Database"
          conSecTwoImg="section1eye.png"
          conSecTwoTitle="Keep a Keen Eye"
          conSecTwoDesc="Track / Import employee attendances and manage their leaves.
          Make important announcements when you need everyone to is
          heard."
          conSecThreeImg="section1bar.png"
          conSecThreeTitle="Get Organized
          in a Flip"
        />
        <SectionRight
          leftImg="section2.png"
          contentTitle="Every Customer
          is Important in CRM"
          contentDesc="We make it the simplest! Not only you get happy customers, create loyal and a potential fan base with your hospitality."
          conSecOneImg="section1db.png"
          conSecOneTitle="Take it Step by Step"
          conSecTwoImg="section1eye.png"
          conSecTwoTitle="Prepare for Follow Ups"
          conSecTwoDesc="Schedule your meetings and keep notes, hints on all communications for a better service with email alerts. With the individual logging, check your progress and assess how your...
          team is performing. Transfer customers to higher personnel when necessary and create customer groups for more focused assistance."
          conSecThreeImg="section1bar.png"
          conSecThreeTitle="Build Relationships with Companies"
        />
        <SectionLeft
          leftImg="section3.png"
          contentTitle="Get Balanced
          with Accounting"
          contentDesc="Take total control of your company’s finances in real time with the Accounting module. You can generate live and detailed reports and make transactions, generate invoices and pay employees."
          conSecOneImg="section1db.png"
          conSecOneTitle="Speedy Stats"
          conSecTwoImg="section1eye.png"
          conSecTwoTitle="Make Payments Easy"
          conSecTwoDesc="Customers, vendors or suppliers – create invoices, make and take payments from your every client and see the data react with your finances instantly. All your transactions are easy to read, logged and secure with our solution."
          conSecThreeImg="section1bar.png"
          conSecThreeTitle="Many Reports"
          mainStyle={{ background: "#F9F7F5" }}
          btnStyle={{ background: "#EAE3DC", color: "#C49D7A" }}
          imgStyle={{ marginTop: "-15rem" }}
        />
        <SectionRight
          leftImg="section4.png"
          contentTitle="Integrated Project
          Management System"
          contentDesc="No need to use expensive solutions like Basecamp or any other task and project management system. We got you covered with everything that you might need."
          conSecOneImg="section1db.png"
          conSecOneTitle="Birds Eye View with Calendar"
          conSecTwoImg="section1eye.png"
          conSecTwoTitle="Privacy in Everything"
          conSecTwoDesc="Set message, to-do list, to-do and milestones as private if you don’t want them to see by certain user levels."
          conSecThreeImg="section1bar.png"
          conSecThreeTitle="Totally synced with ERP"
          imgStyle={{ marginTop: "-7rem" }}
        />
        <ClientReviews />
        <CallTOAction />
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
