import { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill, RiTimeFill, RiWhatsappFill } from 'react-icons/ri'
import { Container } from '~/components/Container'
import { SectionHeading } from '~/components/SectionHeading'
import { Text } from '~/components/Text'
import { maps as mapsData } from './maps'
import {
  ContactContent,
  ContactInfo,
  ContactItem,
  ContactLink,
  ContactLocalsList,
  ContactMap,
  ContactMapButton,
  ContactMapContainer,
  ContactMapWrapper,
  ContactMapsButtonsContainer,
  ContactWrapper,
} from './styles'

export function Contact() {
  const [activeMap, setMap] = useState(mapsData[0])

  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <Container as="section">
      <ContactWrapper>
        <ContactContent>
          <SectionHeading title="Contato" />

          <ContactInfo>
            <ContactLink
              href="mailto:naigsilva@gmail.com"
              title="E-mail da Dra. Naiara Galvão"
            >
              <MdEmail size={24} />
              <Text size="lg" weight="medium">
                naigsilva@gmail.com
              </Text>
            </ContactLink>

            <ContactLink
              href="https://www.instagram.com/naigalvao"
              title="Instagram da Dra. Naiara Galvão"
              target="_blank"
            >
              <RiInstagramFill size={24} />
              <Text size="lg" weight="medium">
                @naigalvao
              </Text>
            </ContactLink>

            <ContactLink
              href={`https://wa.me/5561992561470?text=${message}`}
              title="Whatsapp da Dra. Naiara Galvão"
              target="_blank"
            >
              <RiWhatsappFill size={24} />
              <Text size="lg" weight="medium">
                (61) 99256-1470
              </Text>
            </ContactLink>

            <ContactItem>
              <RiTimeFill size={24} />
              <Text size="lg" weight="medium">
                Segunda a Sexta - 09h às 18h.
              </Text>
            </ContactItem>

            <ContactItem>
              <FaMapMarkerAlt size={24} />
              <Text size="lg" weight="medium">
                Locais de atendimento
              </Text>
            </ContactItem>

            <ContactLocalsList>
              {mapsData.map((map) => (
                <li key={map.id}>{map.address}</li>
              ))}
            </ContactLocalsList>
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
              key={activeMap?.id}
              src={activeMap?.link}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ContactMapContainer>

          <ContactMapsButtonsContainer>
            {mapsData.map((map) => (
              <ContactMapButton
                title={`Ver mapa de ${map.title}`}
                key={map.id}
                onClick={() => setMap(map)}
                active={map.id === activeMap?.id}
              />
            ))}
          </ContactMapsButtonsContainer>
        </ContactMapWrapper>
      </ContactWrapper>
    </Container>
  )
}
