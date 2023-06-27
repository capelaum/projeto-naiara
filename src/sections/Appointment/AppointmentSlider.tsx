import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { SliderDots } from '~/components/SliderDots'
import { gallery } from './gallery'
import { AppointmentImage, AppointmentSliderContainer } from './styles'

export function AppointmentSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,

      slides: {
        origin: 'center',
        perView: 1,
        spacing: 0,
      },

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },

      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
        slider.on('destroyed', clearNextTimeout)
      },
    ],
  )

  return (
    <>
      <AppointmentSliderContainer
        ref={sliderRef}
        className="keen-slider"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {gallery.map(({ id, src, alt }) => (
          <AppointmentImage
            key={id}
            src={src}
            alt={alt}
            className="keen-slider__slide"
            blurDataURL={src.blurDataURL}
          />
        ))}
      </AppointmentSliderContainer>

      {loaded && instanceRef.current && (
        <SliderDots instanceRef={instanceRef} currentSlide={currentSlide} />
      )}
    </>
  )
}
