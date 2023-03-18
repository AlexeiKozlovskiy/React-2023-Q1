import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container wrapper">
          <a
            className="github-link"
            href="https://github.com/AlexeiKozlovskiy"
            target="_blank"
            rel="noreferrer"
          >
            alexeikozlovskiy
          </a>
          <a
            className="footer__school-link"
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footer__school-img"></p>
          </a>
          <span className="footer__year">2023</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
