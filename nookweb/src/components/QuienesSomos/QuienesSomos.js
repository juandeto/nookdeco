import React from "react";
import classes from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div className={classes.QuienesSomos}>
      <h1 className={classes.title}>Quienes Somos</h1>
      <section className={classes.section}>
        <p className={classes.paragraph}>
          Somos una empresa familiar que trabaja desde hace mas de 15 años en
          diseño, fabricación y refacción de muebles. A cada mueble encargado le
          ponemos la misma dedicación y entrega. Actualmente residimos en la
          zona de Boulogne, el barrio de Santa Rita, aunque nuestros clientes
          son de todo el pais.
        </p>
        <p className={classes.paragraph}>
          Nuestros muebles son fabricados enteramente por nosotros y
          seleccionamos los mejores materiales ya sean nacionales o importados.
          Utilizamos generos con proceso antimanchas. Cuidamos el detalle y las
          terminaciones minuciosamente.
        </p>
        <p className={classes.paragraph}>
         Damos un servicio de excelencia, donde recibis lo que pagas.
        </p>
      </section>
    </div>
  );
};

export default QuienesSomos;
