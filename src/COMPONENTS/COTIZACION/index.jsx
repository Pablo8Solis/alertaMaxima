// Cotizacion/index.jsx
import React, { useState } from 'react'
import {
    Section, Inner, ImageSide, Overlay, HeroText, HeroTitle, HeroSub,
    FormSide, FormTitle, Row, Group, Label, Input, Select, SubmitBtn
} from './styles'

function Cotizacion() {
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEnviado(true)
    }

    return (
        <Section id="cotizacion" role="region" aria-label="Solicitud de Cotización">
            <Inner>

                <ImageSide role="img" aria-label="Casa moderna con sistemas de seguridad y videovigilancia instalados">
                    <Overlay />
                    <HeroText>
                        <HeroTitle>Tu seguridad es<br /><span>nuestra prioridad.</span></HeroTitle>
                        <HeroSub>Instalación profesional con monitoreo 24/7 en Irapuato, Guanajuato y Aguascalientes.</HeroSub>
                    </HeroText>
                </ImageSide>

                <FormSide>
                    <FormTitle id="cotizacion-titulo">Solicitar cotización</FormTitle>

                    {enviado ? (
                        <p style={{ color: '#2563EB', fontWeight: 600, marginTop: 32 }} role="status" aria-live="polite">
                            ¡Listo! Te contactamos en menos de 24 horas.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} aria-labelledby="cotizacion-titulo">
                            <Row>
                                <Group>
                                    <Label htmlFor="nombre">Nombre</Label>
                                    <Input id="nombre" type="text" placeholder="Tu nombre*" required aria-required="true" />
                                </Group>
                                <Group>
                                    <Label htmlFor="apellido">Apellido</Label>
                                    <Input id="apellido" type="text" placeholder="Tu apellido*" required aria-required="true" />
                                </Group>
                            </Row>

                            <Group>
                                <Label htmlFor="telefono">Teléfono</Label>
                                <Input id="telefono" type="tel" placeholder="442 000 0000*" required aria-required="true" />
                            </Group>

                            <Group>
                                <Label htmlFor="ciudad">Ciudad</Label>
                                <Select id="ciudad" required defaultValue="" aria-required="true">
                                    <option value="" disabled>Selecciona tu ciudad*</option>
                                    <option>Irapuato, Gto.</option>
                                    <option>Guanajuato, Gto.</option>
                                    <option>Aguascalientes, Ags.</option>
                                </Select>
                            </Group>

                            <Group>
                                <Label htmlFor="servicio">Servicio de interés</Label>
                                <Select id="servicio" required defaultValue="" aria-required="true">
                                    <option value="" disabled>¿Qué necesitas?*</option>
                                    <option>Alarma con monitoreo 24/7</option>
                                    <option>Circuito cerrado (CCTV)</option>
                                    <option>Videoportero</option>
                                    <option>Paquete completo</option>
                                </Select>
                            </Group>

                            <SubmitBtn type="submit" aria-label="Enviar solicitud de cotización">Solicitar cotización</SubmitBtn>
                        </form>
                    )}
                </FormSide>

            </Inner>
        </Section>
    )
}

export default Cotizacion;