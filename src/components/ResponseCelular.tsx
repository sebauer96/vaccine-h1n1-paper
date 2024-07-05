import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones

const ResponseCelular = () => {
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
                Respuesta Inmune Celular y Humoral
            </motion.h2>
            <motion.img
                src="/conclusion.png"
                alt="Respuesta Inmune Celular y Humoral"
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
                <p>Las pruebas de subclases de IgG (un tipo de anticuerpo) mostraron que la vacuna inducía respuestas robustas tanto de IgG total, IgG1 e IgG2a, con una respuesta más fuerte hacia Th1 (un tipo de respuesta inmune celular). Además, la inmunización elevó los niveles de citoquinas proinflamatorias, indicando una activación fuerte del sistema inmunitario</p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p>Las pruebas de subclases de IgG (un tipo de anticuerpo) mostraron que la vacuna inducía respuestas robustas tanto de IgG total, IgG1 e IgG2a, con una respuesta más fuerte hacia Th1 (un tipo de respuesta inmune celular). Además, la inmunización elevó los niveles de citoquinas proinflamatorias, indicando una activación fuerte del sistema inmunitario.</p>
            </motion.div>

            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h3>Respuesta Inmune Inducida por la Vacuna</h3>
                <ol>
                    <li>
                        <strong>Pruebas de Subclases de IgG</strong>
                        <ul>
                            <li><strong>IgG:</strong>  Es un tipo de anticuerpo que juega un papel crucial en la respuesta inmune.</li>
                            <li><strong>IgG1 e IgG2a:</strong> Son subtipos de IgG que indican diferentes tipos de respuestas inmunitarias.</li>
                            <li><strong>Las pruebas mostraron que la vacuna induce altos niveles de estos anticuerpos, lo que significa que el sistema inmunitario estaba respondiendo bien a la vacuna.</strong></li>
                        </ul>
                    </li>
                    <li><strong>Respuesta Th1</strong>
                        <ul>
                            <li><strong>Th1 (Células T Helper 1):</strong> Este tipo de células T ayuda a coordinar la respuesta inmune celular, que es importante para combatir infecciones dentro de las células.</li>
                            <li><strong>La vacuna provocó una respuesta más fuerte hacia Th1, lo cual es positivo porque significa que el cuerpo está mejor preparado para combatir el virus de manera efectiva.</strong></li>
                        </ul>
                    </li>
                    <li><strong>Citoquinas Proinflamatorias</strong>
                        <ul>
                            <li><strong>Citoquinas:</strong> Son proteínas que las células del sistema inmunitario usan para comunicarse entre sí y coordinar la respuesta a infecciones.</li>
                            <li><strong>Proinflamatorias:</strong> Indican una activación fuerte del sistema inmunitario para combatir la infección.</li>
                            <li><strong>La inmunización con la vacuna elevó los niveles de estas citoquinas, mostrando que la vacuna estaba activando adecuadamente el sistema inmunitario.</strong></li>
                        </ul>
                    </li>
                </ol>
            </motion.div>

        </motion.div>
    );
};

export default ResponseCelular;
