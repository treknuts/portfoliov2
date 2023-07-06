import { useCallback, useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ id }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    height: "5em",
    zIndex: 999,
    display: "flex",
    gap: "3em",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181818",
    color: "#eee",
    left: 0,
    transition: "top 300ms",
  };

  const handleClick = (event) => {
    const element = document.getElementById(event.target.title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = useCallback(() => {
    const currentYPos = window.scrollY;
    setVisible(prevScrollPos > currentYPos);
    setPrevScrollPos(currentYPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav id={id} style={{ ...navbarStyles, top: visible ? "0" : "-5em" }}>
      <div className="nav-item" onClick={handleClick} title="landing">
        Home
      </div>
      <div className="nav-item" onClick={handleClick} title="skills">
        Skills
      </div>
      <div className="nav-item" onClick={handleClick} title="projects">
        Projects
      </div>
    </nav>
  );
};

export default Navbar;
