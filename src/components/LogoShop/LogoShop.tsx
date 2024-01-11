interface Props {
  wh?: string
  textSize?: string
  subContent?: string
}

export default function LogoShop({ wh = 'w-[100px] h-[100px]', textSize = 'text-xl', subContent = 'Sports' }: Props) {
  return (
    <div
      className={`flex ${wh} flex-col items-center justify-center gap-y-[2px] rounded-full bg-football-primary/10 ${textSize} font-semibold shadow`}
    >
      <span className='text-football-primary'>HVPP</span>
      <span className='text-football-blue11'>{subContent}</span>
    </div>
  )
}
