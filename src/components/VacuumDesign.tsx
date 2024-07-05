import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones

const VacuumDesign = () => {
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
                <button onClick={handleBackClick}>Atrás</button>
            </div>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Diseño y preparacion de la vacuna
            </motion.h2>
            <motion.img
                src="/respuesta_inmune.png"
                alt="Respuesta Inmune"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="image"
            />
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p>Se recopilaron 4,367 secuencias de la proteína HA del virus H1N1 y se alinearon para crear una secuencia consensuada llamada H1c. Luego, se sintetizó ARNm modificado que codifica esta secuencia H1c y se encapsuló en nanopartículas lipídicas (LNPs) para proteger el ARNm y mejorar su entrega a las células.
                    Para verificar la expresión del antígeno (la proteína que provoca la respuesta inmune), se introdujo H1c-mRNA en células HEK293 T y se confirmó su expresión mediante técnicas de laboratorio como Western blotting e inmunofluorescencia.
                </p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h3>¿Por qué se hace esto?</h3>
                <p>En el desarrollo de la vacuna, es crucial asegurarse de que el ARNm inyectado en el cuerpo efectivamente produzca la proteína deseada. En este caso, la proteína deseada es la hemaglutinina (HA) de la influenza.</p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h3>Paso a paso de la comprobación</h3>
                <ol>
                    <li><strong>Introducción del ARNm en Células:</strong>
                        <ul>
                            <li><strong>H1c-mRNA:</strong> Este es el ARNm modificado que contiene las instrucciones para producir la proteína HA.</li>
                            <li><strong>Células HEK293 T:</strong> Estas son células humanas de riñón embrionario que se utilizan comúnmente en laboratorios para experimentos porque son fáciles de cultivar y manipular.</li>
                        </ul>
                    </li>
                    <li><strong>Expresión del Antígeno</strong>
                        <ul>
                            <li><strong>Antígeno:</strong> En este contexto, la proteína HA es el antígeno porque es la sustancia que provocará una respuesta inmune en el cuerpo.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Verificación Mediante Técnicas de Laboratorio</strong>
                        <ul>
                            <li><strong>Western Blotting:</strong> Esta técnica se utiliza para detectar proteínas específicas en una muestra. Funciona separando las proteínas por tamaño mediante electroforesis en gel, luego se transfieren a una membrana y se usan anticuerpos específicos para detectar la proteína HA.</li>
                            <li><strong>Inmunofluorescencia:</strong> Esta técnica utiliza anticuerpos marcados con un tinte fluorescente para localizar y visualizar la proteína HA dentro de las células. Bajo un microscopio de fluorescencia, la proteína aparece iluminada, confirmando su presencia y localización</li>
                        </ul>
                    </li>
                </ol>
            </motion.div>
        </motion.div>
    );
};

export default VacuumDesign;
