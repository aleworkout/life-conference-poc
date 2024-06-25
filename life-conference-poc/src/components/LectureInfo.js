import React, { useEffect, useState } from 'react';
import '../styles/LectureInfo.css';

const lectures = [
    {
        id: 1,
        title: "Palestra sobre Inovação na Saúde",
        image: "https://via.placeholder.com/150",
        startTime: new Date(new Date().getTime() + 300000) // 5 minutos a partir de agora
    },
    {
        id: 2,
        title: "Tecnologias Emergentes",
        image: "https://via.placeholder.com/150",
        startTime: new Date(new Date().getTime() + 900000) // 15 minutos a partir de agora
    }
];

const LectureInfo = () => {
    const [upcomingLecture, setUpcomingLecture] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nextLecture = lectures.find(lecture => lecture.startTime > now && (lecture.startTime - now) <= 300000); // 5 min ou menos
            setUpcomingLecture(nextLecture);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lecture-info">
            <h2>Próxima Palestra</h2>
            {upcomingLecture ? (
                <div className="lecture-card">
                    <img src={upcomingLecture.image} alt={upcomingLecture.title} />
                    <div className="lecture-details">
                        <h3>{upcomingLecture.title}</h3>
                        <p>Começa em menos de 5 minutos!</p>
                    </div>
                </div>
            ) : (
                <p>Não há palestras começando em breve.</p>
            )}
        </div>
    );
};

export default LectureInfo;
