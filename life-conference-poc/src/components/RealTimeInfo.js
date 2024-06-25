import React, { useEffect, useState } from 'react';

const RealTimeInfo = () => {
    const [info, setInfo] = useState("Carregando...");

    useEffect(() => {
        // Simulação de atualização em tempo real
        const interval = setInterval(() => {
            setInfo(`Atualização em: ${new Date().toLocaleTimeString()}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="real-time-info">
            <h2>Informação em Tempo Real</h2>
            <p>{info}</p>
        </div>
    );
};

export default RealTimeInfo;
