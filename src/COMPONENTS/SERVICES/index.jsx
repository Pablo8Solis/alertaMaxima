import { SectionTextStyles, ServicesStyles } from "./styles";


const Services = () => {
    return (
        <ServicesStyles id="servicios" role="region" aria-labelledby="servicios-titulo">
            <SectionTextStyles>
                <p>Lo que ofrecemos</p>
                <h2 id="servicios-titulo">Soluciones de Seguridad completas</h2>
                <p>Desde la instalación hasta el monitoreo, cubrimos todo lo que necesitas para mantener seguro lo que más importa.</p>
            </SectionTextStyles>

            <section>
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye-check" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032" />
                        <path d="M15 19l2 2l4 -4" />
                    </svg>
                    <h3>Alarmas con monitoreo 24/7</h3>
                    <p>Instalamos sistemas de alarma de última generación con central de monitoreo activa las 24 horas, los 7 días de la semana.</p>
                </article>
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-video" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
                        <path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
                    </svg>
                    <h3>Circuito cerrado (CCTV)</h3>
                    <p>Cámaras de alta definición con acceso remoto desde tu teléfono. Vigila tu hogar o negocio desde donde estés.</p>
                </article>
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <h3>Videoporteros</h3>
                    <p>Identifica quién llega a tu puerta sin abrir. Integración con tu smartphone para control desde cualquier lugar.</p>
                </article>
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <h3>Cámaras certificadas</h3>
                    <p>Equipos certificados de marcas reconocidas. Instalación garantizada por técnicos especializados.</p>
                </article>
            </section>

        </ServicesStyles >
    )
}
export default Services;