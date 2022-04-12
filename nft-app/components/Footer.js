export default function Footer() {
  return (
    <div>
      <footer>
        <div
          id="footer"
          className="d-flex justify-content-between container align-items-center p-3"
        >
          <div>
            <p className="p-0 m-0">
              Created by{" "}
              <b>
                <i>Casweeney Ojukwu</i>
              </b>
            </p>
          </div>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/casweeney-ojukwu-93274a137/"
              target="_"
            >
              <i className="fab fa-linkedin me-3" />
            </a>
            <a href="https://github.com/casweeney" target="_">
              <i className="fab fa-github me-3" />
            </a>
            <a href="https://twitter.com/codingcas" target="_">
              <i className="fab fa-twitter me-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
