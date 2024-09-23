import PropTypes from "prop-types"

export const CantidadMax = (props) => {
  const { maximo, setMax } = props;

  return (
    <button className="maximos" onClick={() => setMax(maximo)}>
      {maximo}
    </button>
  );
};

CantidadMax.propTypes = {
  maximo: PropTypes.number,
  setMax: PropTypes.func
}