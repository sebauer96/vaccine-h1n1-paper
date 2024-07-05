import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones

const IntroInfluenza = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="section-content"
        >
            <div className="header">
                <button  onClick={handleBackClick}>Atrás</button>
            </div>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Introducción a la Influenza
            </motion.h2>
            <motion.img
                src="/virus-sm.png"
                alt="Introducción a la Influenza"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.p
                className="description"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                La influenza estacional causa muchas muertes cada año y es una gran amenaza para la salud pública. Las vacunas actuales están dirigidas a cepas específicas del virus, pero estos virus pueden mutar y reducir la efectividad de las vacunas. Por lo tanto, necesitamos desarrollar una vacuna más efectiva y de amplio espectro.
            </motion.p>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                ¿Qué es la influenza?
            </motion.h3>
            <motion.p
                className="description"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                La influenza, también conocida como gripe, es una enfermedad respiratoria contagiosa causada por los virus de la influenza. Estos virus infectan la nariz, la garganta y, a veces, los pulmones. La influenza puede causar una enfermedad leve a grave y, en ocasiones, puede llevar a la muerte. La mejor forma de prevenir la influenza es vacunándose cada año.
            </motion.p>

        </motion.div>
    );
};

export default IntroInfluenza;
