import React from 'react';
import './App.css';
import HeaderMenu from './components/common/HeaderMenu';
import ChartPage from './pages/chart';
import CoinData from './redux/PriceUpdateRedux';

function App() {
  React.useEffect(() => {
    CoinData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu />
      </header>
      <div style={{ margin: 7 }}>
        <ChartPage />
      </div>
    </div>
  );
}

export default App;
