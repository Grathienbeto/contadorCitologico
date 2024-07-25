import { useState } from "react";

import { Display } from "./components/Display";
import { TotalDisplay } from "./components/TotalDisplay";
import { CantidadMax } from "./components/CantidadMax";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [cayado, setCayado] = useState(0);
  const [neutrofilo, setNeutrofilo] = useState(0);
  const [eosinofilo, setEosinofilo] = useState(0);
  const [basofilo, setBasofilo] = useState(0);
  const [linfocito, setLinfocito] = useState(0);
  const [monocito, setMonocito] = useState(0);

  const [max, setMax] = useState(100);

  const reset = () => {
    setCayado(0);
    setNeutrofilo(0);
    setEosinofilo(0);
    setBasofilo(0);
    setLinfocito(0);
    setMonocito(0);
    setTotal(0);
  };

  return (
    <>
      <div className="borderBottom">
        <h1>Contador Citologico</h1>
      </div>

      <div className="cantidadContainer borderBottom">
        <h2>Seleccionar Cantidad</h2>
        <p>Por defecto en 100 elementos</p>

        <div className="cantidadDivFlex ">
          <CantidadMax setMax={setMax} maximo={100} />
          <CantidadMax setMax={setMax} maximo={50} />
          <CantidadMax setMax={setMax} maximo={25} />
        </div>
      </div>

      <div className="elementosContainer">
        <Display
          setter={setCayado}
          cantidad={cayado}
          nombre={"Cayados"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
        <Display
          setter={setNeutrofilo}
          cantidad={neutrofilo}
          nombre={"Neutrofilos"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
        <Display
          setter={setEosinofilo}
          cantidad={eosinofilo}
          nombre={"Eosinofilos"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
        <Display
          setter={setBasofilo}
          cantidad={basofilo}
          nombre={"Basofilos"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
        <Display
          setter={setLinfocito}
          cantidad={linfocito}
          nombre={"Linfocitos"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
        <Display
          setter={setMonocito}
          cantidad={monocito}
          nombre={"Monocitos"}
          setTotal={setTotal}
          total={total}
          max={max}
        />
      </div>

      <TotalDisplay total={total} reset={reset} max={max} />
    </>
  );
}

export default App;
