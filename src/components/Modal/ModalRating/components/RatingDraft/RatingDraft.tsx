import { useState } from 'react'

interface Props {
  onClick?: (value: number) => void
  activeClassName?: string
  noneActiveClassName?: string
}

export default function RatingDraft({
  onClick,
  activeClassName = 'h-10 w-10 fill-yellow-300 text-yellow-300',
  noneActiveClassName = 'h-10 w-10 fill-current text-gray-300'
}: Props) {
  const [rating, setRating] = useState<number>(5)
  const [virtualRating, setVirtualRating] = useState<number>(rating)

  const onHoverStar = (order: number) => {
    console.log('current hover rating: ', order)
    setVirtualRating(order)
  }

  const onMouseLeaveStar = () => {
    console.log('origin rating: ', rating)
    setVirtualRating(rating)
  }

  const handleWidth = (order: number) => {
    if (order <= virtualRating) {
      return '100%'
    }
    if (order > virtualRating && order - virtualRating < 1) {
      return (virtualRating - Math.floor(virtualRating)) * 100 + '%'
    }
    return '0%'
  }

  const handleClick = (order: number) => {
    console.log('order: ', order)
    setRating(order)
    onClick && onClick(virtualRating)
  }

  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            className='relative hover:animate-zoomIn hover:cursor-pointer hover:transition-all hover:duration-1000'
            onMouseEnter={() => onHoverStar(index + 1)}
            onMouseLeave={onMouseLeaveStar}
            onClick={() => handleClick(index + 1)}
            aria-hidden='true'
            key={index}
          >
            <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className={activeClassName}>
                <polygon
                  points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
            <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className={noneActiveClassName}>
              <polygon
                points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </svg>
          </div>
        ))}
    </div>
  )
}
