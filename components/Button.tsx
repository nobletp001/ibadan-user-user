import React from 'react'

type ButtonProps = {
  text: string
  backgroundColor?: string
  handleNextClick?: () => void
  handlePrevClick?: () => void
}

export default function Button({ text, backgroundColor, handleNextClick, handlePrevClick }: ButtonProps) {
  return (
    <button
    >{text}</button>
  )
}
