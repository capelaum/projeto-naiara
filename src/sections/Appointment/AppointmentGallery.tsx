import { useState } from 'react'
import { GalleryItem, gallery } from './gallery'
import {
  AppointmentGalleryWrapper,
  AppointmentImage,
  AppointmentMapButton,
  AppointmentMapsButtonsContainer,
} from './styles'

export function AppointmentGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem>(gallery[0]!)

  const handleImageClick = () => {
    const currentIndex = gallery.findIndex(
      (image) => image.id === activeImage.id,
    )

    const nextImage = gallery[currentIndex + 1] ?? gallery[0]

    setActiveImage(nextImage!)
  }

  return (
    <AppointmentGalleryWrapper
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <AppointmentImage
        key={activeImage.id}
        src={activeImage.src}
        alt={activeImage.alt}
        blurDataURL={activeImage.src.blurDataURL}
        active={activeImage.id === activeImage?.id}
        onClick={handleImageClick}
      />

      <AppointmentMapsButtonsContainer>
        {gallery.map((image) => (
          <AppointmentMapButton
            title={`Ver imagem ${image.id}`}
            key={image.id}
            onClick={() => setActiveImage(image)}
            active={image.id === activeImage?.id}
          />
        ))}
      </AppointmentMapsButtonsContainer>
    </AppointmentGalleryWrapper>
  )
}
