function Title(props) {
  console.log(props);
  const styleTitle = { fontSize: props.size };

  return <div style={styleTitle}>{props.children}</div>;
}

export default Title;
