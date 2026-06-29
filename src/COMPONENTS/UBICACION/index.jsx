import React from 'react'
import {
  Section, Inner,
  TextSide, Title, Subtitle,
} from './styles'

function Ubicacion() {
  return (
    <Section id="ubicacion" role="region" aria-labelledby="ubicacion-titulo">
      <Inner>

        <TextSide>


          <Title id="ubicacion-titulo">
            Cobertura en el<br />
            <span>corazón de México.</span>
          </Title>

          <Subtitle>
            Estamos presentes en tres ciudades del Bajío con equipos locales,
            respuesta rápida y el mismo estándar de seguridad en cada zona.
          </Subtitle>

        </TextSide>

        <section>
          <img src="/assets/img/mapa.png" alt="Mapa geográfico del Bajío con marcadores de cobertura en Irapuato, Guanajuato y Aguascalientes" />
        </section>



      </Inner>
    </Section>
  )


}

export default Ubicacion
