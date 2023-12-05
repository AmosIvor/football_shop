import { AnimatePresence, motion } from 'framer-motion'
import { createRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import PATH from '~/constants/path'
import Accordition from '../Accordition'
import VARIANT from '~/constants/variant'

interface Props {
  isVisible: boolean
  handleSubmit: () => void
}

const clubs: { name: string; image: string }[] = [
  {
    name: 'Premier League',
    image:
      'https://static.vecteezy.com/system/resources/previews/010/994/451/original/premier-league-logo-symbol-with-name-design-england-football-european-countries-football-teams-illustration-with-purple-background-free-vector.jpg'
  },
  {
    name: 'Laliga',
    image: 'https://logowik.com/content/uploads/images/laliga6363.logowik.com.webp'
  },
  {
    name: 'Bundesliga',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzNYJYF55YR8bggzHT8DuRn1Ntj-gYBGi9kMHnZGRMdcJS4aOjlGGxNQiG10ChAoK2mM&usqp=CAU'
  },
  {
    name: 'Serie A',
    image: 'https://1000logos.net/wp-content/uploads/2019/01/Italian-Serie-A-Logo.png'
  }
]

const root = document.getElementById('root') as HTMLElement

export default function ModalPayment({ isVisible, handleSubmit }: Props) {
  const wrapperRef = createRef<HTMLDivElement>()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { target } = event
    if (!wrapperRef.current?.contains(target as Node)) {
      // outside
      handleSubmit()
    }
  }
  return createPortal(
    <div className={`relative z-10 ${isVisible ? 'visible' : 'invisible'}`}>
      <AnimatePresence>
        {/* bg */}
        {isVisible && (
          <motion.div initial='initial' animate='visible' exit='exit' variants={VARIANT.backdrop}>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </motion.div>
        )}
        {/* content */}
        {isVisible && (
          <motion.div initial='initial' animate='visible' exit='exit' variants={VARIANT.menu}>
            <div className='fixed inset-0 w-screen overflow-y-auto' aria-hidden='true' onClick={handleClick}>
              <div className='relative flex min-h-full items-end justify-start p-4 text-center sm:items-start sm:p-0'>
                <div
                  className='absolute left-0 top-0 h-full transform overflow-hidden overflow-y-auto bg-white text-left font-Nunito shadow-xl transition-all sm:my-0 sm:w-full sm:max-w-lg'
                  ref={wrapperRef}
                >
                  <div className='px-4 pb-4 pt-5 text-[30px] font-bold text-football-primary sm:p-6 sm:pb-4'>
                    <Link to={PATH.home} onClick={handleSubmit}>
                      <span className='text-football-blue11'>HVPP </span>
                      <span>Sports</span>
                    </Link>

                    <div className='mt-4 hidden h-[40px] grow rounded-md border border-football-blue11/50 bg-white text-black md:flex'>
                      <input
                        type='text'
                        className='flex w-[100%] items-center rounded rounded-bl-md rounded-tl-md border-none pl-5 pr-3 text-base font-normal outline-none lg:text-lg'
                        placeholder='Tìm kiếm sản phẩm'
                      />
                      <button className='rounded-br-md rounded-tr-md border-none bg-football-primary px-7 text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='h-5 w-5'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>

                    <div className='mt-8 flex flex-col gap-y-5 text-lg font-medium capitalize'>
                      <Link to={PATH.products} className='text-red-600' onClick={handleSubmit}>
                        Hàng mới về
                      </Link>

                      <Accordition title='Câu lạc bộ' titleActiveColor='text-football-primary' paddingBottom='pb-3'>
                        <div className='ml-10 mt-1 flex flex-col gap-y-4'>
                          {clubs.map((club, index) => (
                            <Link
                              to={PATH.products}
                              className='flex items-center capitalize'
                              key={index}
                              onClick={handleSubmit}
                            >
                              <div className='mr-5 h-10 w-10  border border-black bg-white shadow-sm'>
                                <img src={club.image} alt='premier-league' className='h-full w-full object-cover' />
                              </div>
                              <span>{club.name}</span>
                            </Link>
                          ))}
                        </div>
                      </Accordition>

                      <Accordition
                        title='Đội tuyển quốc gia'
                        titleActiveColor='text-football-primary'
                        paddingBottom='pb-3'
                      >
                        <div className='ml-10 mt-1 flex flex-col gap-y-4'>
                          {clubs.map((club, index) => (
                            <Link
                              to={PATH.products}
                              className='flex items-center capitalize'
                              key={index}
                              onClick={handleSubmit}
                            >
                              <div className='mr-5 h-10 w-10  border border-black bg-white shadow-sm'>
                                <img src={club.image} alt='premier-league' className='h-full w-full object-cover' />
                              </div>
                              <span>{club.name}</span>
                            </Link>
                          ))}
                        </div>
                      </Accordition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    root
  )
}
