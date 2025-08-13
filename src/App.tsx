import React from 'react';
import './App.css';
import FamousPersonSearch from './components/FamousPersonSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 유명인 정보 검색</h1>
        <p>유명인의 이름을 입력하면 상세한 정보를 제공합니다</p>
      </header>
      <main>
        <FamousPersonSearch />
      </main>
    </div>
  );
}

export default App;
