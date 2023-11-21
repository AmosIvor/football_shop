import ProductRating from '~/components/ProductRating'
import ProductRatingLarger from './components/ProductRatingLarger'
import Product from '~/components/Product'
import { Link } from 'react-router-dom'
import PATH from '~/constants/path'
import QuantityController from '~/components/QuantityController'
import Accordition from '~/components/Accordition'

export default function ProductDetail() {
  return (
    <div className='bg-football-grayF6 py-6'>
      {/* Detail product */}
      <div className='asir-container'>
        <div className='grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-10'>
          <div className='col-span-12 sm:col-span-9 md:col-span-7 lg:col-span-5'>
            {/* Main Image  */}
            <div className='relative w-full overflow-hidden pt-[100%] shadow'>
              <img
                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                alt=''
                className='absolute left-0 top-0 h-full w-full bg-white object-cover'
              />
            </div>

            <div className='relative mt-4 grid grid-cols-4 gap-2'>
              {/* Slide Image */}
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className='relative w-full pt-[100%]' key={index}>
                    <img
                      src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                      alt=''
                      className='absolute left-0 top-0 h-full w-full cursor-pointer object-cover'
                    />
                    <div className='absolute inset-0 border-2 border-football-primary' />
                  </div>
                ))}
              {/* {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div className='relative w-full pt-[100%]' key={index}>
                    <img
                      src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                      alt=''
                      className='absolute left-0 top-0 h-full w-full cursor-pointer object-cover'
                    />
                    <div className='absolute inset-0 hidden border-2 border-football-primary' />
                  </div>
                ))} */}
            </div>
          </div>

          <div className='col-span-12 text-lg font-normal md:col-span-9 lg:col-span-7'>
            {/* Title */}
            <h1 className='text-2xl font-semibold uppercase text-black'>Chelsea 2022 / 2023</h1>

            {/* Sub title */}
            <div className='mt-3 flex items-center'>
              {/* Rating */}
              <div className='flex items-center'>
                <span className='mr-2 border-b border-b-football-primary font-semibold text-football-primary'>4.9</span>

                <ProductRating />
              </div>

              <div className='mx-4 h-4 w-[1px] bg-black/40' />

              {/* Product Sold */}
              <div>
                <span>4,5K</span>
                <span className='ml-2 text-football-gray7A'>Đã bán</span>
              </div>
            </div>

            {/* Price */}
            <div className='mt-8 flex items-center lg:mt-6 xl:mt-8'>
              <div className='text-football-gray7A line-through'>đ219.000</div>

              <div className='ml-3 text-4xl font-semibold text-football-primary'>đ181.000</div>

              <div className='rouned-sm ml-5 hidden bg-football-primary px-2 py-[2px] text-sm font-semibold uppercase text-white xs:inline-block'>
                20% giảm
              </div>
            </div>

            {/* Size */}
            <div className='mt-8 flex flex-col justify-center lg:mt-6 xl:mt-8'>
              <div className='flex items-center'>
                <span>Kích thước:</span>
                <span className='ml-5 font-semibold'>M</span>
              </div>

              {/* sizes */}
              <div className='mt-3 flex items-center gap-4'>
                <button className='mb-2 flex w-[55px] items-center justify-center rounded-[4px] bg-gray-300/30 py-2 text-[#7A7A9D] shadow hover:border-football-primary hover:bg-football-primary hover:text-white'>
                  <span className='capitalize'>S</span>
                </button>

                <button className='mb-2 flex w-[55px] items-center justify-center rounded-[4px] bg-football-primary py-2 text-white shadow hover:border-football-primary hover:bg-football-primary hover:text-white'>
                  <span className='capitalize'>M</span>
                </button>

                <button className='mb-2 flex w-[55px] items-center justify-center rounded-[4px] bg-gray-300/30 py-2 text-[#7A7A9D] shadow hover:border-football-primary hover:bg-football-primary hover:text-white'>
                  <span className='capitalize'>L</span>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className='mt-8 flex flex-col xs:flex-row xs:items-center lg:mt-6 xl:mt-8'>
              <div className='flex items-center'>
                <div className='capitalize'>Số lượng</div>
                <QuantityController classNameWrapper='sm:ml-10 xs:ml-4 ml-10' />
              </div>
              <div className='ml-0 mt-6 text-football-gray7A xs:ml-3 xs:mt-0 sm:ml-6'>48 sản phẩm có sẵn</div>
            </div>

            {/* Add to cart */}
            <div className='mt-7 flex flex-col items-center xs:mt-8 xs:flex-row lg:mt-6 xl:mt-8'>
              <Link
                to={PATH.cart}
                className='flex h-12 w-full items-center justify-center rounded-sm border border-football-primary bg-white px-5 font-semibold capitalize text-football-primary shadow-sm hover:bg-gray-50 xs:w-auto'
              >
                <svg width={24} height={24} className='mr-3 fill-football-primary' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M18.833 19a2.333 2.333 0 11-2.333 2.333A2.325 2.325 0 0118.833 19zM.167.333h3.815l1.096 2.334h17.255A1.167 1.167 0 0123.5 3.833c0 .199-.058.397-.14.584l-4.177 7.548a2.346 2.346 0 01-2.041 1.202H8.45L7.4 15.068l-.035.14a.292.292 0 00.292.292h13.51v2.333h-14A2.333 2.333 0 014.832 15.5c0-.408.105-.793.28-1.12L6.7 11.522 2.5 2.667H.167V.333zm7 18.667a2.333 2.333 0 11-2.334 2.333A2.325 2.325 0 017.166 19zm10.5-8.167L20.91 5H6.163l2.753 5.833h8.75z'
                    className='fill-inherit'
                  />
                </svg>
                Thêm vào giỏ hàng
              </Link>

              <button className='ml-0 mt-4 flex h-12 w-full items-center justify-center rounded-sm bg-football-primary px-5 capitalize text-white shadow-sm outline-none hover:bg-football-primary/80 xs:ml-4 xs:mt-0 xs:w-auto'>
                Mua ngay
              </button>
            </div>

            {/* Description  */}
            <div className='hidden 2xl:mt-10 2xl:inline-block 2xl:border-t 2xl:border-t-football-gray7A/30 2xl:pt-5'>
              <Accordition
                title='Mô tả sản phẩm'
                content='Chelsea giành được danh hiệu lớn đầu tiên, chức vô địch Football League vào năm 1955. Câu lạc bộ đã giành được Cúp FA lần đầu tiên vào năm 1970 và danh hiệu châu Âu đầu tiên của họ, Winners Cup, vào năm 1971.'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='asir-container 2xl:hidden'>
        <div className='mt-[70px] grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-10'>
          <div className='col-span-12 text-base font-normal text-black lg:col-span-9'>
            <Accordition
              title='Mô tả sản phẩm'
              content='Chelsea giành được danh hiệu lớn đầu tiên, chức vô địch Football League vào năm 1955. Câu lạc bộ đã giành
              được Cúp FA lần đầu tiên vào năm 1970 và danh hiệu châu Âu đầu tiên của họ, Winners Cup, vào năm 1971. Sau
              một thời gian sa sút vào cuối những năm 1970 và 1980, câu lạc bộ đã hồi sinh vào những năm 1990 và gặt hái
              được nhiều thành công hơn trong các giải đấu cúp.'
            />
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className='asir-container'>
        <div className='mt-5 text-base font-normal'>
          <div className='grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-10'>
            <div className='col-span-12 flex flex-col lg:col-span-9'>
              <h1 className='text-lg font-semibold capitalize text-football-blue11'>Đánh giá</h1>
              {/* Table rating */}
              <div className='mt-6 flex flex-col items-center gap-x-5 bg-gray-300/30 px-10 py-9 shadow xs:px-14 sm:flex-row sm:items-start xl:gap-x-10 xl:px-14'>
                {/* Left Rating */}
                <div className='flex w-full flex-col items-center justify-center gap-2 sm:basis-5/12 lg:basis-4/12 xl:basis-5/12'>
                  <span className='text-xl font-semibold text-football-blue11'>5 / 5</span>
                  <ProductRatingLarger />
                  <span className='mt-2'>(6 đánh giá)</span>
                  <button className='mt-1 w-full rounded-sm bg-football-blue11/90 px-4 py-2 text-white shadow hover:bg-football-blue11/75 xs:w-auto'>
                    Gửi đánh giá của bạn
                  </button>
                </div>

                {/* Right Rating */}
                <div className='mt-7 flex flex-wrap justify-center gap-x-3 gap-y-4 sm:mt-0 sm:basis-7/12 sm:gap-x-3 sm:gap-y-4 lg:basis-8/12 xl:basis-7/12 xl:gap-y-5 2xl:gap-x-8'>
                  <button className='flex h-[40px] w-[100px] items-center justify-center rounded-[4px] border border-transparent bg-white text-black shadow hover:border-football-blue11 hover:text-football-blue11'>
                    <span className='capitalize'>Tất cả</span>
                  </button>
                  <button className='flex h-[40px] w-[100px] items-center justify-center rounded-[4px] border border-transparent bg-white text-black shadow hover:border-football-blue11 hover:text-football-blue11'>
                    <span className='capitalize'>5 Điểm (1)</span>
                  </button>
                  <button className='flex h-[40px] w-[100px] items-center justify-center rounded-[4px] border border-transparent bg-white text-black shadow hover:border-football-blue11 hover:text-football-blue11'>
                    <span className='capitalize'>4 Điểm (10)</span>
                  </button>
                  <button className='flex h-[40px] w-[100px] items-center justify-center rounded-[4px] border border-transparent bg-white text-black shadow hover:border-football-blue11 hover:text-football-blue11'>
                    <span className='capitalize'>3 Điểm (1)</span>
                  </button>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <button
                        className='flex h-[40px] w-[100px] items-center justify-center rounded-[4px] border border-transparent bg-white text-black shadow hover:border-football-blue11 hover:text-football-blue11'
                        key={index}
                      >
                        <span className='capitalize'>4 Điểm (10)</span>
                      </button>
                    ))}
                </div>
              </div>
              {/* Ratings */}
              <div className='ml-5 mt-8 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <div>Duy</div>
                  <ProductRating />
                </div>
                <div className='my-1 flex items-center gap-2'>
                  <svg width={15} height={15} xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.62 14.04c.146.08.313.121.483.12h-.004.007-.003m-1.719-3.305a1.027 1.027 0 00-.486-.122 1.02 1.02 0 00-.248.035l-2.492.627a.083.083 0 01-.076-.02.067.067 0 01-.021-.032.063.063 0 010-.037l.67-2.35a.859.859 0 00-.042-.584.934.934 0 00-.412-.44L.039 6.721a.07.07 0 01-.03-.025A.065.065 0 010 6.661c0-.013.004-.027.011-.038a.072.072 0 01.031-.026L2.28 5.382a.934.934 0 00.409-.442.86.86 0 00.039-.584l-.673-2.334a.069.069 0 010-.038.072.072 0 01.02-.032.083.083 0 01.075-.02l2.506.628c.207.051.426.038.624-.04a.956.956 0 00.47-.386L7.04.036A.07.07 0 017.066.01.076.076 0 017.106 0c.013 0 .026.003.037.009.011.006.02.015.027.025l1.296 2.098a.958.958 0 00.472.384c.197.075.416.088.622.036l2.493-.627a.082.082 0 01.076.02c.01.008.017.02.02.032a.063.063 0 010 .037l-.67 2.35c-.054.194-.04.4.042.584.082.186.227.34.413.44l2.238 1.208a.074.074 0 01.029.027.069.069 0 010 .073.074.074 0 01-.03.026l-2.237 1.215a.934.934 0 00-.409.442.86.86 0 00-.039.584l.669 2.337a.07.07 0 01-.02.07.082.082 0 01-.075.02l-2.507-.628a1.03 1.03 0 00-.624.038.953.953 0 00-.469.387l-1.289 2.099a.07.07 0 01-.028.026.076.076 0 01-.038.01.078.078 0 01-.04-.01.071.071 0 01-.027-.026L5.74 11.188a.948.948 0 00-.357-.333z'
                      className='fill-[#030D78]'
                    />
                    <path
                      d='M9.45 5.66l-3 2.64a.315.315 0 01-.398 0L4.737 7.145a.249.249 0 01-.06-.08.222.222 0 010-.19.248.248 0 01.06-.08.287.287 0 01.092-.054.315.315 0 01.307.054l1.113.98L9.051 5.31a.302.302 0 01.2-.073c.074 0 .146.026.199.073.053.046.082.11.082.175 0 .066-.03.13-.082.176z'
                      className='fill-white'
                    />
                  </svg>
                  <span className='text-sm text-[#030D78]'>Đã mua hàng tại HVPP Sports</span>
                </div>
                {/* Content */}
                <span>
                  Bên ngoài nhìn chả khác mấy, nhưng chất mẫu mới thêm chống thấm nước với nặng hơn. Nhưng chung quy mẫu
                  cũ mặc mềm nên mình thích mẫu cũ hơn.
                </span>
              </div>
              <div className='mt-10 flex items-center justify-center text-football-blue11'>Xem thêm đánh giá</div>
              <div className='mt-4 h-[1px] w-full bg-gray-300/50'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommend */}
      <div className='asir-container'>
        <div className='py-[70px] text-base font-medium text-football-blue11'>
          <div className='mb-8 flex items-center justify-between text-lg font-semibold'>
            <h2 className='capitalize'>HVPP Sports gợi ý cho bạn</h2>
          </div>
          {/* products */}
          <div className='grid grid-cols-12 gap-x-3 gap-y-5 xs:gap-4 sm:gap-2 md:gap-4 2xl:grid-cols-10'>
            {/* product */}
            {Array(5)
              .fill(0)
              .map((productIndex) => (
                <div
                  className='col-span-6 xs:col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2'
                  key={productIndex}
                >
                  <Product />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
