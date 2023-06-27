import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Container } from '~/components/Container'
import { SectionHeading } from '~/components/SectionHeading'
import { SliderDots } from '~/components/SliderDots'
import { Text } from '~/components/Text'
import {
  TestimonialCard,
  TestimonialCardContent,
  TestimonialCardProfile,
  TestimonialQuotes,
  TestimonialsSliderContainer,
  TestimonialsWrapper,
} from './styles'
import { testimonials } from './testimonials'

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: 'center',
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        '(min-width: 2000px)': {
          slides: {
            perView: 4,
            spacing: 20,
          },
        },
        '(max-width: 992px)': {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        '(max-width: 576px)': {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
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
    <TestimonialsWrapper>
      <Container>
        <SectionHeading title="Depoimentos" />
      </Container>

      <TestimonialsSliderContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        viewport={{ once: true }}
        ref={sliderRef}
        className="keen-slider"
      >
        {/* <SliderArrow
          direction="left"
          onClick={() => instanceRef.current?.prev()}
          title="Depoimento anterior"
        /> */}

        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} className="keen-slider__slide">
            <TestimonialCardContent>
              <TestimonialQuotes size={20} />

              <Text weight="medium">{testimonial.content}</Text>
            </TestimonialCardContent>

            <TestimonialCardProfile>
              <FaUserCircle size={32} />
              <Text size="lg" weight="medium">
                {testimonial.name}
              </Text>
            </TestimonialCardProfile>
          </TestimonialCard>
        ))}

        {/* <SliderArrow
          direction="right"
          onClick={() => instanceRef.current?.next()}
          title="Próximo depoimento"
        /> */}
      </TestimonialsSliderContainer>

      {loaded && instanceRef.current && (
        <SliderDots
          variant="red"
          buttonTitle="Ir para depoimento"
          instanceRef={instanceRef}
          currentSlide={currentSlide}
        />
      )}
    </TestimonialsWrapper>
  )
}
