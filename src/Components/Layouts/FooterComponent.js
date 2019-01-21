import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__upper">
        <div className="container">
          <div className="footer__upper__wrapper">
            <div className="footer__upper__widget">
              <div className="footer__upper__widget__header">WP ERP</div>
              <a href="/" className="footer__upper__widget__link">
                About
              </a>
              <a href="/" className="footer__upper__widget__link">
                Refund Policy
              </a>
              <a href="/" className="footer__upper__widget__link">
                Terms of Service
              </a>
              <a href="/" className="footer__upper__widget__link">
                Support Policy
              </a>
              <a href="/" className="footer__upper__widget__link">
                FAQ
              </a>
            </div>

            <div className="footer__upper__widget">
              <div className="footer__upper__widget__header">Products</div>
              <a href="/" className="footer__upper__widget__link">
                HRM
              </a>
              <a href="/" className="footer__upper__widget__link">
                CRM
              </a>
              <a href="/" className="footer__upper__widget__link">
                Accounting
              </a>
              <a href="/" className="footer__upper__widget__link">
                Request a Demo
              </a>
            </div>

            <div className="footer__upper__widget">
              <div className="footer__upper__widget__header">Resources</div>
              <a href="/" className="footer__upper__widget__link">
                Documentation
              </a>
              <a href="/" className="footer__upper__widget__link">
                Discussion Forum
              </a>
              <a href="/" className="footer__upper__widget__link">
                Submit Ideas
              </a>
              <a href="/" className="footer__upper__widget__link">
                Translate Extensions
              </a>
            </div>

            <div className="footer__upper__widget">
              <div className="footer__upper__widget__header">Newsletter</div>
              <form className="footer__upper__widget__form">
                <input
                  type="text"
                  className="footer__upper__widget__form__input"
                />
                <button
                  type="submit"
                  className="footer__upper__widget__form__btn"
                >
                  Subscribe!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <div className="container">
          <div className="footer__lower__wrapper">
            <div className="footer__lower__social">
              <i className="fab fa-facebook-square" />
              <i className="fab fa-twitter" />
              <i className="fab fa-youtube" />
              <i className="fab fa-google" />
            </div>
            <div className="footer__lower__copy">
              &copy; 2019 WP ERP. Build by the folks at weDevs.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
