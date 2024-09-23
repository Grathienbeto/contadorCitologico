import PropTypes from "prop-types"

export const TotalDisplay = (props) => {
  const { total, reset, max } = props;

  return (
    <div className="flex">
      <div>
        <h2>
          {total} / {max}
        </h2>
      </div>

      <div>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

TotalDisplay.propTypes = {
  total: PropTypes.number,
  reset: PropTypes.func,
  max: PropTypes.number
}
