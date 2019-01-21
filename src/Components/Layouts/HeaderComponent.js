import React from "react";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header--wrapper">
          <div className="header__logo">
            <img
              src="/images/logo.png"
              alt="logo"
              className="header__logo__img"
            />
          </div>
          <nav className="header__navs">
            <a href="/" className="header__navs__link">
              Modules <i className="fas fa-angle-down" />
            </a>

            <a href="/" className="header__navs__link">
              Extensions <i className="fas fa-angle-down" />
            </a>

            <a href="/" className="header__navs__link">
              Blog
            </a>

            <a href="/" className="header__navs__link">
              Docs
            </a>

            <a href="/" className="header__navs__link">
              Contact
            </a>

            <a href="/" className="header__navs__link">
              Forum
            </a>

            <a href="/" className="header__navs__link primary--color--op">
              Join Free
            </a>

            <a href="/" className="header__navs__link link--btn">
              Signin
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
