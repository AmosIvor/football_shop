import classNames from 'classnames'
import { Link, createSearchParams } from 'react-router-dom'
import PATH from '~/constants/path'
import { VOUCHER_STATUS } from '~/constants/voucher'
import useQueryParams from '~/hooks/useQueryParams'

const voucherTabs = [
  { status: VOUCHER_STATUS.newest, name: 'Mới nhất' },
  { status: VOUCHER_STATUS.popular, name: 'Phổ biến' },
  { status: VOUCHER_STATUS.expiringSoon, name: 'Sắp hết hạn' }
]

export default function Voucher() {
  const queryParams: { status?: string } = useQueryParams()
  const status: number = Number(queryParams.status) || VOUCHER_STATUS.newest

  const voucherTabsLink = voucherTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: PATH.voucher,
        search: createSearchParams({
          status: String(tab.status)
        }).toString()
      }}
      className={classNames(
        'flex flex-1 items-center justify-center bg-white py-3 text-center hover:text-football-primary',
        {
          'border-b-2 border-b-football-primary text-football-primary': status === tab.status,
          'border-transparent text-black': status !== tab.status
        }
      )}
    >
      {tab.name}
    </Link>
  ))

  return (
    <div className='bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-base shadow-sm md:text-lg'>{voucherTabsLink}</div>

      {/* Body */}
      <div className='mt-4 grid grid-cols-1 gap-y-4 rounded-sm bg-white px-7 py-6 shadow-sm xs:px-8 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4 md:gap-x-5 md:gap-y-4 lg:gap-x-5 lg:gap-y-4 xl:gap-x-10 xl:gap-y-7'>
        {/* Voucher List */}
        {status === VOUCHER_STATUS.newest && (
          <>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  className='relative flex h-[120px] rounded-sm border border-football-gray7A/30 text-gray-800 shadow laptop:h-[140px]'
                  key={index}
                >
                  <div className='w-[120px] border-r border-dashed p-2 sm:w-[38%] md:w-[34%] lg:w-[40%] xl:w-[120px] laptop:w-[140px]'>
                    <div className='flex h-full w-full flex-col items-center justify-center rounded-sm bg-football-primary/70 text-xl font-bold'>
                      <span className='text-football-blue11'>HVPP</span>
                      <span className='text-white'>Sports</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-between p-2 text-base sm:w-[62%] md:w-[66%] md:text-lg lg:w-[60%] xl:w-auto'>
                    <div className='flex flex-col'>
                      <span>Giảm 5%</span>
                      <span className='mt-[2px] text-base text-football-gray7A/80'>Cho đơn hàng từ 350K</span>
                    </div>
                    <div className='text-base text-football-gray7A/80'>HSD: 23/10/2023</div>
                  </div>
                </div>
              ))}
          </>
        )}

        {status === VOUCHER_STATUS.popular && <div>Popular</div>}

        {status === VOUCHER_STATUS.expiringSoon && <div>Expiring Soon</div>}
      </div>
    </div>
  )
}
