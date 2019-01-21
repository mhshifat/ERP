import React from "react";

const SectionRight = props => {
  return (
    <section className="sectionRight">
      <div className="container">
        <div className="sectionRight--wrapper">
          <div className="sectionRight__content">
            <h2 className="sectionRight__content__title">
              {props.contentTitle}
            </h2>
            <p className="sectionRight__content__desc">{props.contentDesc}</p>
            <div className="sectionRight__content__section">
              <img src={`/images/${props.conSecOneImg}`} alt="db icon" />{" "}
              {props.conSecOneTitle}
            </div>
            <div className="sectionRight__content__two">
              <div
                className="sectionRight__content__two__img"
                style={props.imgStyle}
              >
                <img src={`/images/${props.conSecTwoImg}`} alt="eye icon" />
              </div>
              <div className="sectionRight__content__two__content">
                <div className="sectionRight__content__two__content__title">
                  {props.conSecTwoTitle}
                </div>
                <div className="sectionRight__content__two__content__desc">
                  {props.conSecTwoDesc}
                </div>
              </div>
            </div>
            <div className="sectionRight__content__section">
              <img src={`/images/${props.conSecThreeImg}`} alt="db icon" />{" "}
              {props.conSecThreeTitle}
            </div>
            <a href="/" className="sectionRight__content__link">
              View Details
            </a>
          </div>
          <div className="sectionRight__img">
            <img src={`/images/${props.leftImg}`} alt="section" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
