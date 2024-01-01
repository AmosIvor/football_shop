interface Props {
  wh?: string
  textSize?: string
}

export default function LogoShop({ wh = 'w-[100px] h-[100px]', textSize = 'text-xl' }: Props) {
  return (
    <div
      className={`flex ${wh} flex-col items-center justify-center gap-y-[2px] rounded-full bg-football-primary/10 ${textSize} font-semibold shadow`}
    >
      <span className='text-football-primary'>HVPP</span>
      <span className='text-football-blue11'>Sports</span>
    </div>
  )
}
