import React, { useContext } from 'react';
import LineChart from './LineChart';
import { MainPageContext } from '../App';

function Home() {
  const {
    options,
    data,
    stock,
    setStock,
    dataOption,
    handleChoose,
    handleSignOut,
  } = useContext(MainPageContext);
  return (
    <div>
      <div className="chart-container">
        <LineChart options={options} data={data} fontSize={9} />
      </div>
      <label htmlFor="symbolList">Choose a symbol</label>
      <input
        type="text"
        name="symbolList"
        id="symbolList"
        list="symbolData"
        className="symbol-list-box"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <datalist id="symbolData">{dataOption}</datalist>
      <button onClick={handleChoose}>See Price</button>

      <button className="btn-sign-out" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
