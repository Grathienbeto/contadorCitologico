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
