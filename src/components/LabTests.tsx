import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones

const LabTests = () => {
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
                Evaluación de la Inmunogenicidad
            </motion.h2>
            <motion.img
                src="/test_laboratory.png"
                alt="Evaluación de la Inmunogenicidad"
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
                <p>Se inmunizan ratones BALB/c con diferentes dosis de la vacuna H1c-mRNA-LNPs. Los niveles de anticuerpos en los ratones se midieron utilizando pruebas de inhibición de hemaglutinación (HAI) y microneutralización (MN). Estas pruebas mostraron que la vacuna provocó títulos de anticuerpos protectores contra múltiples cepas de H1N1, demostrando una amplia reactividad. </p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h3>¿Cómo funciona?</h3>
                <ol>
                    <li><strong>Inmunización de Ratones:</strong>
                        <ul>
                            <li><strong>Ratones BALB/c:</strong> Son una cepa comúnmente utilizada en investigación biomédica debido a su respuesta inmunológica bien caracterizada.</li>
                            <li><strong>Vacuna H1c-mRNA-LNPs:</strong> Es la vacuna que se está probando, que contiene ARNm para producir la proteína HA del virus de la influenza.</li>
                        </ul>
                    </li>

                    <li><strong>Diferentes Dosis:</strong>
                        <ul>
                            <li>Los ratones recibieron distintas cantidades de la vacuna para ver cómo reaccionaban a diferentes dosis.</li>
                        </ul>
                    </li>
                    <li><strong>Medición de Anticuerpos:</strong>
                        <ul>
                            <li><strong>Anticuerpos:</strong> Son proteínas producidas por el sistema inmunológico para reconocer y neutralizar patógenos como virus y bacterias.</li>
                            <li><strong>Pruebas de Inhibición de Hemaglutinación (HAI):</strong> Esta prueba mide la capacidad de los anticuerpos para evitar que el virus de la influenza aglutine (se una a) glóbulos rojos. Un título alto en esta prueba indica una buena respuesta inmune.</li>
                            <li><strong>Pruebas de Micro Neutralización (MN):</strong> Esta prueba mide la capacidad de los anticuerpos para neutralizar el virus y evitar que infecte células en el laboratorio. Un título alto también indica una fuerte respuesta inmune.</li>
                        </ul>
                    </li>
                    <li><strong>Resultados:</strong>
                        <ul>
                            <li><strong>Títulos de Anticuerpos Protectores:</strong> La cantidad de anticuerpos producidos fue suficiente para proteger contra el virus.</li>
                            <li><strong>Múltiples Cepas de H1N1:</strong> La vacuna fue efectiva no solo contra una cepa del virus, sino contra varias diferentes.</li>
                            <li><strong>Amplia Reactividad:</strong> Esto significa que la vacuna funcionó contra una variedad de cepas del virus H1N1, lo cual es muy positivo porque indica que podría ofrecer protección contra diferentes formas del virus que pueden circular en la población.</li>
                        </ul>

                    </li>
                </ol>
            </motion.div>
        </motion.div>
    );
};

export default LabTests;
