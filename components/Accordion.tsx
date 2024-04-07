'use client'

import { useState, useEffect } from 'react'

type AccordionpProps = {
    children: React.ReactNode
    title: string
    id: string,
    active?: boolean
}

export default function Accordion({
    children,
    title,
    id,
    active = false
}: AccordionpProps) {

    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

    useEffect(() => {
        setAccordionOpen(active)
    }, [])

    return (
        <div className="py-2">
            <h2>
                <button
                    className="flex items-center justify-between w-full text-left py-[.5rem] md:py-[2rem]"
                    onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
                    aria-expanded={accordionOpen}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span className='md:max-w-[63rem] md:leading-[2.5rem] text-[1rem] md:text-[2rem] font-medium'>{title}</span>

                    <svg className={`md:w-[2.25rem] w-[1rem] shrink-0 ml-8 transform origin-center transition duration-400 ease-out ${accordionOpen && '!scale-y-[-1]'}`} width="" height="" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9466 5.45312H7.79329H4.05329C3.41329 5.45312 3.09329 6.22646 3.54662 6.67979L6.99995 10.1331C7.55329 10.6865 8.45329 10.6865 9.00662 10.1331L10.32 8.81979L12.46 6.67979C12.9066 6.22646 12.5866 5.45312 11.9466 5.45312Z" fill="#292D32" />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-text-${id}`}
                role="region"
                aria-labelledby={`accordion-title-${id}`}
                className={`grid text-sm  overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-3 bg-[rgba(0,0,0,0.10)] py-[1.5rem] px-[2rem] leading-[2.5rem]">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}