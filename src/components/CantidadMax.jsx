export const CantidadMax = (props) => {
  const { maximo, setMax } = props;

  return (
    <button className="maximos" onClick={() => setMax(maximo)}>
      {maximo}
    </button>
  );
};
