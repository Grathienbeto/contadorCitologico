import PropTypes from "prop-types"

export const Display = (props) => {
  const { nombre, cantidad, setter, setTotal, total, max } = props;

  return (
    <div>
      <div className="flexDiv">
        <div>
          <h2>{nombre}</h2>
        </div>
        <div>
          <button
            onClick={() => {
              if (total < max) {
                setter(cantidad + 1);
                setTotal(total + 1);
              }
            }}
            className="botonesCantidad"
          >
            +
          </button>
          <button
            onClick={() => {
              if (cantidad > 0) {
                setter(cantidad - 1);
                setTotal(total - 1);
              }
            }}
            className="botonesCantidad"
          >
            -
          </button>
        </div>
      </div>

      <div>
        <p className="cantidad">
          {cantidad}
          {max != 100 && ` => ${Math.round((cantidad / max) * 100)}%`}
        </p>
      </div>
    </div>
  );
};

Display.propTypes = {
  nombre : PropTypes.string,
  cantidad: PropTypes.number,
  setter: PropTypes.func,
  setTotal: PropTypes.func,
  total: PropTypes.number,
  max: PropTypes.number
}
