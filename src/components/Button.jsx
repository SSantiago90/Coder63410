// Componentes de funcion // function components 16...
// Componentes de Class

// * PROPS
export default function Button(props) {
  const { text, color, disabled, children } = props; // destructuring
  // const text = props.text;
  // clase / style

  //const displayText = children === undefined ? text : children;
  let displayText;
  if (children === undefined) {
    displayText = text;
  } else {
    displayText = children;
  }

  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {displayText}
    </button>
  );
}

// unedefined -> false
// null -> false
// falsy
