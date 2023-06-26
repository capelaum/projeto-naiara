import { RiWhatsappFill } from 'react-icons/ri'
import { ButtonLink } from '../Button/ButtonLink'

export function ContactButton() {
  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <ButtonLink
      size="xl"
      href={`https://wa.me/5561992561470?text=${message}`}
      title="Agendar consulta!"
      target="_blank"
    >
      <RiWhatsappFill size={28} />
      Agendar Consulta
    </ButtonLink>
  )
}
