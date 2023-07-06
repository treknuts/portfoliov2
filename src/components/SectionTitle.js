import "./SectionTitle.css";

const SectionTitle = ({ title, bgColor, color }) => {
  const defaultStyle = {
    width: "max-content",
    fontSize: "clamp(32px, calc(2rem + ((1vw - 7.68px) * 3.4722)), 72px)",
    marginTop: "5vmin",
    marginBottom: "5vmin",
    marginInline: "auto",
    padding: "0.25em .75em",
    color: "#181818",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  return (
    <h1
      style={{ ...defaultStyle, backgroundColor: bgColor, color }}
      className="title"
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
