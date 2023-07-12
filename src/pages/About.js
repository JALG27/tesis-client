import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"Sobre nosotros - TecnoExpress"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/sobrenosotros.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Esta es una pagina web que se basa en la venta
            de articulos tecnologicos, puede estar sujeta a varios cambios
            en el futuro, por lo que se trata de un prototipo y un experimento
            De fase beta, diseñada y programada por Johnny Luengo.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;