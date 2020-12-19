import { React } from "react";
import { Link } from "react-router-dom";

const Nav = ({ navSelected, setNavSelect, tabItems }) => {
  console.info(navSelected);
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabItems.map(({ id, label, href }, index) => (
            <Link
              key={index}
              to={href}
              className={
                id === navSelected
                  ? "nav-item nav-link active text-light bg-dark"
                  : "nav-item nav-link"
              }
              id={id}
              data-toggle="tab"
              role="tab"
              aria-controls="nav-contact"
              aria-selected={id === navSelected ? "true" : "false"}
              onClick={() => setNavSelect(id)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {tabItems.map(({ id, contentId }, index) => (
          <div
            key={index}
            className={
              id === navSelected
                ? "tab-pane fade show active text-light bg-dark"
                : "tab-pane fade show"
            }
            id={contentId}
            role="tabpanel"
            aria-labelledby={id}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Nav;
