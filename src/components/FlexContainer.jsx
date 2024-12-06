function FlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "15px",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;
