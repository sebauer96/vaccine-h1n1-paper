import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones

const StudyObjective = () => {
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
                Objetivo del Estudio
            </motion.h2>
            <motion.img
                src="/MRNA.png"
                alt="Objetivo del Estudio"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p>El objetivo de este estudio es desarrollar una vacuna de ARNm contra varias cepas del virus de la influenza H1N1 utilizando una secuencia de hemaglutinina (HA) consensuada. La HA es una proteína importante en la superficie del virus que facilita su invasión en las células humanas y es el principal objetivo de los anticuerpos que combaten el virus.</p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h3>¿Qué es ARNm?</h3>
                <p>ARNm significa Ácido Ribonucleico Mensajero. Es una molécula que lleva las instrucciones genéticas del ADN a las “fábricas” de proteínas de la célula, conocidas como ribosomas. Estas instrucciones indican a las células qué proteínas deben fabricar, que son esenciales para diversas funciones del cuerpo.</p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <ol>
                    <li><strong>Instrucciones del ADN:</strong> En el núcleo de cada célula de nuestro cuerpo, el ADN contiene todas las instrucciones necesarias para construir y mantener al organismo. Sin embargo, el ADN no puede salir del núcleo.</li>
                    <li><strong>Creación del ARNm:</strong> Para que estas instrucciones puedan ser utilizadas, se hace una copia de un segmento específico del ADN en forma de ARNm. Este proceso se llama transcripción.</li>
                    <li><strong>El ARNm sale del núcleo:</strong> El ARNm, que ahora lleva una copia de las instrucciones del ADN, sale del núcleo y entra en el citoplasma de la célula, donde están ubicadas las “fábricas” de proteínas llamadas ribosomas.</li>
                    <li><strong>Producción de proteínas:</strong> Los ribosomas leen la secuencia de instrucciones del ARNm y ensamblan los aminoácidos en el orden correcto para formar una proteína. Este proceso se llama traducción.</li>
                </ol>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
            >
                <h3>En el contexto de la vacuna</h3>
                <ol>
                    <li><strong>Síntesis del ARNm para la vacuna:</strong> Los científicos sintetizan ARNm en el laboratorio que contiene las instrucciones para fabricar la proteína hemaglutinina (HA) del virus de la influenza.</li>
                    <li><strong>Modificación y encapsulación: </strong>Este ARNm es modificado para hacerlo más estable y se encapsula en nanopartículas lipídicas (LNPs). Las LNPs son pequeñas burbujas de grasa que protegen el ARNm y ayudan a entregarlo a las células.</li>
                    <li><strong>Vacunación: </strong>Cuando se inyecta la vacuna en el cuerpo, las nanopartículas lipídicas llevan el ARNm a las células.</li>
                    <li><strong>Producción de la proteína viral:</strong> Una vez dentro de las células, los ribosomas leen el ARNm y comienzan a producir la proteína HA del virus de la influenza.</li>
                    <li><strong>Respuesta inmunitaria: </strong>El sistema inmunitario reconoce esta proteína HA como extraña y comienza a producir anticuerpos contra ella. Así, si la persona se expone al virus de la influenza en el futuro, su sistema inmunitario podrá reconocer y combatir el virus rápidamente.</li>
                </ol>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
            >
                <h3>¿Qué es una secuencia de hemaglutinina (HA) consensuada?</h3>
                <p> La hemaglutinina, o HA, es una proteína en la superficie del virus de la influenza. Esta proteína es crucial porque ayuda al virus a invadir las células humanas. Cuando el virus entra en nuestro cuerpo, el sistema inmunológico produce anticuerpos que se dirigen a la HA para bloquear la infección. En este estudio, los científicos tomaron muchas secuencias de HA de diferentes cepas del virus H1N1 y las combinaron para crear una “secuencia consensuada”. Esta secuencia consensuada representa las características comunes más importantes de la HA en todas esas cepas, lo que podría ayudar a diseñar una vacuna que funcione contra muchas variantes del virus.</p>
            </motion.div>
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
            >
                <h3>¿Qué funciones cumple (HA) en el ciclo de vida del virus?</h3>
                <ol>
                    <li> <strong>Adhesión a las Células Huésped:</strong> La HA permite que el virus se adhiera a las células del tracto respiratorio humano. La proteína se une a receptores específicos de ácido siálico en la superficie de estas células.</li>
                    <li> <strong>Entrada del Virus:</strong> Después de la adhesión, la HA facilita la entrada del virus en la célula huésped. Lo hace mediante un proceso llamado endocitosis, donde la célula envuelve al virus y lo introduce en su interior.</li>
                    <li> <strong>Fusión de membranas:</strong> Una vez dentro de la célula, la HA ayuda a fusionar la envoltura del virus con la membrana de la célula huésped. Esto permite que el material genético del virus entre en la célula y comience a replicarse.</li>
                </ol>
            </motion.div>

        </motion.div>
    );
};

export default StudyObjective;
