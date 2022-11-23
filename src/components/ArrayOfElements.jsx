const colors = ['red', 'green', 'blue', 'yellow'];

function ArrayOfElements() {
  const h2Styles = {
    fontSize: '3rem',
    color: 'tomato',
  };
  return (
    <div>
      <h2 style={h2Styles}>ArrayOfElements</h2>
      <ul>
        {colors.map((colorName) => {
          // validation computation
          return <li style={{ color: colorName }}>{colorName}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayOfElements;
