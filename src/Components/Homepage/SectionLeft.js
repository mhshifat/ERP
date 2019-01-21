import React from "react";

const SectionLeft = props => {
  return (
    <section className="sectionLeft" style={props.mainStyle}>
      <div className="container">
        <div className="sectionLeft--wrapper">
          <div className="sectionLeft__img">
            <img src={`/images/${props.leftImg}`} alt="section" />
          </div>
          <div className="sectionLeft__content">
            <h2 className="sectionLeft__content__title">
              {props.contentTitle}
            </h2>
            <p className="sectionLeft__content__desc">{props.contentDesc}</p>
            <div className="sectionLeft__content__section">
              <img src={`/images/${props.conSecOneImg}`} alt="db icon" />{" "}
              {props.conSecOneTitle}
            </div>
            <div className="sectionLeft__content__two">
              <div
                className="sectionLeft__content__two__img"
                style={props.imgStyle}
              >
                <img src={`/images/${props.conSecTwoImg}`} alt="eye icon" />
              </div>
              <div className="sectionLeft__content__two__content">
                <div className="sectionLeft__content__two__content__title">
                  {props.conSecTwoTitle}
                </div>
                <div className="sectionLeft__content__two__content__desc">
                  {props.conSecTwoDesc}
                </div>
              </div>
            </div>
            <div className="sectionLeft__content__section">
              <img src={`/images/${props.conSecThreeImg}`} alt="db icon" />{" "}
              {props.conSecThreeTitle}
            </div>
            <a
              href="/"
              className="sectionLeft__content__link"
              style={props.btnStyle}
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
