import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react'
import { MutableRefObject } from 'react'
import { SliderDotButton, SliderDotsWrapper } from './styles'

interface SliderDotsProps {
  currentSlide: number
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
}

export function SliderDots({ currentSlide, instanceRef }: SliderDotsProps) {
  return (
    <SliderDotsWrapper className="slider-dots">
      {[...Array(instanceRef?.current?.track.details.slides.length).keys()].map(
        (idx) => (
          <SliderDotButton
            active={currentSlide === idx}
            key={idx}
            title={`Ir para depoimento ${idx + 1}`}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
          />
        ),
      )}
    </SliderDotsWrapper>
  )
}
