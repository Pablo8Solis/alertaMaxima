import {
  Section, Title, Grid,
  Card, Avatar, Body, Quote, Name, Meta,
} from './styles'

const testimonios = [
  {
    nombre: 'Pedro Hernandez',
    ciudad: 'Irapuato, Gto.',
    texto: '"Instalaron las cámaras y la alarma en un día. El servicio fue rápido y ordenado. Ya dormimos más tranquilos en casa."',
    foto: '/assets/img/test1.png',
  },
  {
    nombre: 'Ana Maria Flores',
    ciudad: 'Guanajuato, Gto.',
    texto: '"Tuve una alerta a las 2am y en menos de un minuto me llamaron para verificar. Eso es el monitoreo real que buscaba para mi negocio."',
    foto: '/assets/img/test2.png',
  },
  {
    nombre: 'Carlos Lopez',
    ciudad: 'Aguascalientes, Ags.',
    texto: '"El videoportero fue la mejor inversión. Puedo ver quién llega desde el trabajo y mis hijos están más seguros en casa."',
    foto: '/assets/img/test3.png',
  },
]

function Testimonios() {
  return (
    <Section id="testimonios" role="region" aria-labelledby="testimonios-titulo">
      <Title id="testimonios-titulo">Lo que dicen nuestros clientes</Title>

      <Grid>
        {testimonios.map((t) => (
          <Card key={t.nombre} role="article" aria-label={`Testimonio de ${t.nombre} de ${t.ciudad}`}>
            <Avatar>
              <img src={t.foto} alt={`Foto de perfil de ${t.nombre}, cliente de Alerta Máxima`} />
            </Avatar>
            <Body>
              <Quote as="blockquote">{t.texto}</Quote>
              <Name>{t.nombre}</Name>
              <Meta>{t.ciudad}</Meta>
            </Body>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
export default Testimonios
