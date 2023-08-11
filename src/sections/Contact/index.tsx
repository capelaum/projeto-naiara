import { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill, RiTimeFill, RiWhatsappFill } from 'react-icons/ri'
import { Container } from '~/components/Container'
import { SectionHeading } from '~/components/SectionHeading'
import { ContacItem } from './ContacItem'
import { ContactLink } from './ContactLink'
import { maps as mapsData } from './maps'
import {
  ContactContent,
  ContactInfo,
  ContactMap,
  ContactMapContainer,
  ContactMapWrapper,
  ContactWrapper,
} from './styles'

export function Contact() {
  const [activeMap] = useState(mapsData[0])

  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <Container as="section" id="contato">
      <ContactWrapper>
        <ContactContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <SectionHeading title="Contato" />

          <ContactInfo>
            <ContactLink
              href="mailto:naigsilva@gmail.com"
              title="E-mail da Dra. Naiara Galvão"
              text="naigsilva@gmail.com"
              icon={MdEmail}
            />

            <ContactLink
              href="https://www.instagram.com/naigalvao"
              title="Instagram da Dra. Naiara Galvão"
              target="_blank"
              text="@naigalvao"
              icon={RiInstagramFill}
            />

            <ContactLink
              href={`https://wa.me/5561992561470?text=${message}`}
              title="Whatsapp da Dra. Naiara Galvão"
              target="_blank"
              text="(61) 99256-1470"
              icon={RiWhatsappFill}
            />

            <ContacItem
              text="Segunda a Sexta - 09h às 18h."
              icon={RiTimeFill}
            />

            <ContacItem
              text="Sense Ginecologia - SGAS 614 Edifício Vitrium - Sala 219 - Asa
                Sul, Brasília - DF, 70200-740"
              icon={FaMapMarkerAlt}
            />

            {/* <ContactLocalsList>
              {mapsData.map((map) => (
                <li key={map.id}>{map.address}</li>
              ))}
            </ContactLocalsList> */}
          </ContactInfo>
        </ContactContent>

        <ContactMapWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactMapContainer>
            <ContactMap
              title={activeMap?.title}
              key={activeMap?.id}
              src={activeMap?.link}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ContactMapContainer>

          {/* <ContactMapsButtonsContainer>
            {mapsData.map((map) => (
              <ContactMapButton
                title={`Ver mapa de ${map.title}`}
                key={map.id}
                onClick={() => setMap(map)}
                active={map.id === activeMap?.id}
              />
            ))}
          </ContactMapsButtonsContainer> */}
        </ContactMapWrapper>
      </ContactWrapper>
    </Container>
  )
}
