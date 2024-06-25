import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RealTimeInfo from './components/RealTimeInfo';
import LectureInfo from './components/LectureInfo';
import './styles/App.css';

const App = () => (
    <div className="App">
        <Header />
        <main>
            <RealTimeInfo />
            <LectureInfo />
            {/* Adicione outros componentes aqui */}
        </main>
        <Footer />
    </div>
);

export default App;
