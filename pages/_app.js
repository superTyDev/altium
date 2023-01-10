import { useEffect } from "react";
import '../styles/globals.css'

function darkNav() {
  if (window.scrollY > 15) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
}

function closeNav(e) {
  e = window.event || e;
  if (document.body === e.target) {
    document.querySelector(".sideNav").classList.remove("expand");
  }
}
function closeNavLink(e) {
  document.querySelector(".sideNav").classList.remove("expand");
}

function linkDelays() {
  var container = document.querySelector(".sideNavInner").children;

  var c = 0;
  for (let elem of container) {
    elem.style.transitionDelay = `${c / 4}s`;
    c++;
  }
}

// Home function that is reflected across the site
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (document.readyState === "complete") {
      linkDelays()
    } else {
      window.addEventListener("load", linkDelays);
      window.addEventListener("scroll", darkNav);
      return () => document.removeEventListener("load", linkDelays);
    }
  }, []);

  return (
    <><nav>
      <a href="/" id="logo">
        <h2>
          <img
            height="24px"
            src="https://cdn.glitch.global/2ed4b08e-aa2f-4ed2-9f56-1225d5edadb6/touch-icon.png?v=1661874307713"
            alt="Eagle Icon" />
          Altium Aeronautics
        </h2>
      </a>
      <a
        href="#menu"
        onClick={(e) => {
          document.querySelector(".sideNav").classList.toggle("expand");
        }}
      >
        ☰
      </a>
      <a href="/login">Login</a>
      <a href="/quote">Buy a Ticket</a>
    </nav><div className="sideNav">
        <div className="sideNavInner">
          <div>
            <h2>
              Menu
              <span id="closeMenu" onClick={closeNavLink}>
                &#x2715;
              </span>
            </h2>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <a href="/about" onClick={closeNavLink}>
              About<i className="fa-solid fa-circle-info"></i>
            </a>
          </div>
          <div>
            <a href="/services" onClick={closeNavLink}>
              Services<i className="fa-solid fa-handshake-simple"></i>
            </a>
          </div>
          <div>
            <a href="/contact" onClick={closeNavLink}>
              Contact <i className="fa-solid fa-phone"></i>
            </a>
          </div>
          <div>
            <a href="/login" onClick={closeNavLink}>
              Login <i className="fa-solid fa-circle-user"></i>
            </a>
          </div>
          <div>
            <a href="/dashboard" onClick={closeNavLink}>
              Dashboard <i className="fa-solid fa-chart-line"></i>
            </a>
          </div>
          <div>
            <a href="/calendar" onClick={closeNavLink}>
              Calendar <i className="fa-solid fa-calendar-day"></i>
            </a>
          </div>
          <div className="spacer"></div>
        </div>
      </div><div className="content">
        {/* Router specifies which component to insert here as the main content */}
        <Component {...pageProps} />
      </div>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="title">Altium Aeronautics</div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
          <a href="/cites">Cites</a>
          <a href="/map">Map</a>
          <a href="/feedback">Feedback</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="copyright">
          © Tyson McLaws, Connor Altvater 2022. No Rights Reserved.
        </div>
        <div></div>
      </footer>
    </>
  );
}
