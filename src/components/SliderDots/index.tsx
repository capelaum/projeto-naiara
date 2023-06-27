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
  buttonTitle: string
  variant?: 'red' | 'white'
}

export function SliderDots({
  currentSlide,
  instanceRef,
  buttonTitle,
  variant = 'white',
}: SliderDotsProps) {
  return (
    <SliderDotsWrapper className="slider-dots">
      {[
        ...Array(instanceRef?.current?.track.details?.slides.length).keys(),
      ].map((idx) => (
        <SliderDotButton
          variant={variant}
          active={currentSlide === idx}
          key={idx}
          title={`${buttonTitle} ${idx + 1}`}
          onClick={() => {
            instanceRef.current?.moveToIdx(idx)
          }}
        />
      ))}
    </SliderDotsWrapper>
  )
}
