import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { omit } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Button from '~/components/Button'
import InputNumber from '~/components/InputNumber'
import PATH from '~/constants/path'
import { CATEGORY, RESULT, SIZE } from '~/constants/product'
import { QueryConfig } from '~/hooks/useQueryConfig'
import { PriceSchema, priceSchema } from '~/utils/rules'
import { getSize } from '~/utils/utils'

interface Props {
  queryConfig: QueryConfig
}

type FormData = PriceSchema

export default function AsideFilter({ queryConfig }: Props) {
  const [collection, setCollection] = useState<{ club: string; nation: string }>({
    club: queryConfig.club || RESULT.false,
    nation: queryConfig.nation || RESULT.false
  })

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false
  })

  const { sizeS = RESULT.false, sizeM = RESULT.false, sizeL = RESULT.false, sizeXL = RESULT.false } = queryConfig

  const navigate = useNavigate()

  const handleChangeCollection =
    (nameCollection: keyof typeof CATEGORY) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCollection((prev) => {
        return { ...prev, [nameCollection]: String(event.target.checked) }
      })

      navigate({
        pathname: PATH.products,
        search: createSearchParams({ ...queryConfig, [nameCollection]: String(event.target.checked) }).toString()
      })
    }

  const isActiveSize = (sizeValue: keyof typeof SIZE) => {
    switch (sizeValue) {
      case SIZE.S:
        return sizeS === RESULT.true
      case SIZE.M:
        return sizeM === RESULT.true
      case SIZE.L:
        return sizeL === RESULT.true
      case SIZE.XL:
        return sizeXL === RESULT.true
      default:
        return true
    }
  }

  const handleChangeSize = (sizeValue: keyof typeof SIZE) => {
    switch (sizeValue) {
      case SIZE.S:
        console.log('into sizeS')
        navigate({
          pathname: PATH.products,
          search: createSearchParams({
            ...queryConfig,
            sizeS: String(!(sizeS === RESULT.true))
          }).toString()
        })
        return
      case SIZE.M:
        console.log('into sizeM')
        navigate({
          pathname: PATH.products,
          search: createSearchParams({
            ...queryConfig,
            sizeM: String(!(sizeM === RESULT.true))
          }).toString()
        })
        return
      case SIZE.L:
        console.log('into sizeL')
        navigate({
          pathname: PATH.products,
          search: createSearchParams({
            ...queryConfig,
            sizeL: String(!(sizeL === RESULT.true))
          }).toString()
        })
        return
      case SIZE.XL:
        navigate({
          pathname: PATH.products,
          search: createSearchParams({
            ...queryConfig,
            sizeXL: String(!(sizeXL === RESULT.true))
          }).toString()
        })
        return
    }
  }

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: PATH.products,
      search: createSearchParams({
        ...queryConfig,
        minPrice: (data.price_min as string) === '' ? '0' : (data.price_min as string),
        maxPrice: data.price_max as string
      }).toString()
    })
  })

  const yourChoose = useMemo(() => {
    let results: string[] = []

    // Define an object that maps size variables to their corresponding strings
    const sizeMap = { sizeS: 'size: S', sizeM: 'size: M', sizeL: 'size: L', sizeXL: 'size: XL' }

    // Iterate over the sizeMap object
    for (const [size, sizeString] of Object.entries(sizeMap)) {
      const sizeValue = queryConfig[size as keyof QueryConfig]

      if (sizeValue === RESULT.true) {
        results.push(sizeString)
      } else if (sizeValue === RESULT.false) {
        results = results.filter((result) => result !== sizeString)
      }
    }

    if (queryConfig.minPrice) {
      results.push(`Từ ${queryConfig.minPrice} - ${queryConfig.maxPrice}`)
    }

    return results
  }, [queryConfig])

  const handleYourChoose = (choose: string) => {
    if (choose.includes('size')) {
      const size = getSize(choose)
      handleChangeSize(size as keyof typeof SIZE)
    }
    if (choose.includes('-')) {
      navigate({
        pathname: PATH.products,
        search: createSearchParams(omit(queryConfig, ['minPrice', 'maxPrice'])).toString()
      })
    }
  }

  const handleRemoveAll = () => {
    setCollection((prev) => ({ ...prev, club: RESULT.false, nation: RESULT.false }))
    navigate({
      pathname: PATH.products,
      search: createSearchParams(
        omit(queryConfig, ['minPrice', 'maxPrice', 'club', 'nation', 'sizeS', 'sizeM', 'sizeL', 'sizeXL'])
      ).toString()
    })
  }

  return (
    <div className='mr-4 pb-4 pt-[21px]'>
      {/* Your options */}
      <div className='text-base font-normal text-black'>
        <div className='flex items-center justify-between'>
          <span className='text-lg'>Bạn chọn</span>
          <button className='bg-transparent text-lg hover:text-football-primary' onClick={handleRemoveAll}>
            Bỏ hết
          </button>
        </div>

        {/* options */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          {yourChoose.length !== 0 &&
            yourChoose.map((choose, index) => {
              return (
                <button
                  className='mb-2 flex items-center justify-center gap-2 rounded-[4px] bg-football-primary px-3 py-[2px]'
                  onClick={() => handleYourChoose(choose)}
                  key={index}
                >
                  <svg width={14} height={14} className='fill-white' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11.083 2.917l-8.166 8.166M2.917 2.917l8.166 8.166'
                      stroke='#fff'
                      strokeWidth={2}
                      strokeLinecap='round'
                    />
                  </svg>
                  <span className='capitalize text-white'>{choose}</span>
                </button>
              )
            })}
          {/* <button className='mb-2 flex items-center justify-center gap-2 rounded-[4px] bg-football-primary px-3 py-[2px]'>
            <svg width={14} height={14} className='fill-white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.083 2.917l-8.166 8.166M2.917 2.917l8.166 8.166'
                stroke='#fff'
                strokeWidth={2}
                strokeLinecap='round'
              />
            </svg>
            <span className='capitalize text-white'>Premier League</span>
          </button> */}

          {/* <button className='mb-2 flex items-center justify-center gap-2 rounded-[4px] bg-football-primary px-3 py-[2px]'>
            <svg width={14} height={14} className='fill-white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.083 2.917l-8.166 8.166M2.917 2.917l8.166 8.166'
                stroke='#fff'
                strokeWidth={2}
                strokeLinecap='round'
              />
            </svg>
            <span className='capitalize text-white'>Premier League</span>
          </button> */}
        </div>
        <div className='mb-4 mt-6 h-[1px] bg-gray-300' />
      </div>

      {/* Collections */}
      <div className='text-base font-normal text-black'>
        <span className='text-lg'>Bộ sưu tập</span>

        {/* catalogues */}
        <div className='mt-[6px] flex flex-col flex-wrap gap-x-3 gap-y-3'>
          <div className='flex flex-row items-center'>
            <input
              checked={collection.club === RESULT.false ? false : true}
              id='checkbox_club'
              value='hello'
              type='checkbox'
              className='h-[18px] w-[18px] cursor-pointer bg-white text-football-primary'
              onChange={handleChangeCollection(CATEGORY.club)}
            />
            <label htmlFor='checkbox_club' className='ml-3 capitalize'>
              Câu lạc bộ
            </label>
          </div>

          <div className='flex flex-row items-center'>
            <input
              checked={collection.nation === RESULT.false ? false : true}
              id='checkbox-nation'
              type='checkbox'
              className='h-[18px] w-[18px] cursor-pointer bg-white text-football-primary'
              onChange={handleChangeCollection(CATEGORY.nation)}
            />
            <label htmlFor='checkbox-nation' className='ml-3 capitalize'>
              Đội tuyển quốc gia
            </label>
          </div>
        </div>
      </div>

      <div className='mt-7 h-[1px] bg-gray-300' />

      {/* Catalogue */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Danh mục sản phẩm</span>

        {/* catalogues */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          {/* <div className='relative mb-2 rounded-[4px]'>
            <button className='rounded-[4px] border border-football-primary bg-white px-4 py-2 text-football-gray7A hover:border-football-primary hover:bg-white hover:text-football-primary'>
              <span className='capitalize'>Premier League</span>
            </button>
            <svg
              width={24}
              height={22}
              className='absolute -right-0 -top-0 hover:cursor-pointer'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23.825 22H24V4a4 4 0 00-4-4H0v.548L23.825 22z'
                fill='#EE4D2D'
              />
              <g clipPath='url(#prefix__clip0_33_1150)' stroke='#fff' strokeWidth={2} strokeLinecap='round'>
                <path d='M20.333 3.667l-4.666 4.666M15.667 3.667l4.666 4.666' />
              </g>
              <defs>
                <clipPath id='prefix__clip0_33_1150'>
                  <path fill='#fff' transform='translate(14 2)' d='M0 0h8v8H0z' />
                </clipPath>
              </defs>
            </svg>
          </div> */}

          <button className='mb-2 flex items-center justify-center rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <span className='capitalize'>Premier League</span>
          </button>

          <button className='mb-2 flex items-center justify-center rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <span className='capitalize'>League 1</span>
          </button>

          <button className='mb-2 flex items-center justify-center rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <span className='capitalize'>Bundesliga</span>
          </button>
        </div>
      </div>

      <div className='mt-6 h-[1px] bg-gray-300' />

      {/* Size */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Kích thước</span>

        {/* sizes */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          {Object.values(SIZE).map((size) => (
            <div className='group relative mb-2 rounded-[4px] hover:text-football-primary' key={size}>
              <button
                className={classNames(
                  'rounded-[4px] border px-4 py-2 text-football-gray7A hover:border-football-primary hover:bg-white hover:text-football-primary group-hover:text-football-primary',
                  {
                    'border-transparent bg-football-gray7A/10': !isActiveSize(size),
                    'border-football-primary bg-white': isActiveSize(size)
                  }
                )}
                onClick={() => handleChangeSize(size)}
              >
                <span className='capitalize'>{size}</span>
              </button>
              {isActiveSize(size) && (
                <svg
                  width={24}
                  height={22}
                  className='absolute -right-0 -top-0 hover:cursor-pointer'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => handleChangeSize(size)}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M23.825 22H24V4a4 4 0 00-4-4H0v.548L23.825 22z'
                    fill='#EE4D2D'
                  />
                  <g clipPath='url(#prefix__clip0_33_1150)' stroke='#fff' strokeWidth={2} strokeLinecap='round'>
                    <path d='M20.333 3.667l-4.666 4.666M15.667 3.667l4.666 4.666' />
                  </g>
                  <defs>
                    <clipPath id='prefix__clip0_33_1150'>
                      <path fill='#fff' transform='translate(14 2)' d='M0 0h8v8H0z' />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mt-6 h-[1px] bg-gray-300' />

      {/* Price */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Khoảng giá</span>

        {/* prices */}
        <form className='mt-2' onSubmit={onSubmit}>
          <div className='flex items-start'>
            <Controller
              control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='đ TỪ'
                    classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-football-primary focus:shadow-sm'
                    classNameError='hidden'
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_max')
                    }}
                    value={field.value}
                    ref={field.ref}
                  />
                )
              }}
            />

            <div className='mx-2 mt-1 shrink-0'>-</div>

            <Controller
              control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='đ ĐẾN'
                    classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-football-primary focus:shadow-sm'
                    classNameError='hidden'
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_min')
                    }}
                    value={field.value}
                    ref={field.ref}
                  />
                )
              }}
            />
          </div>
          <div className='mt-1 min-h-[24px] text-base text-red-600'>{errors.price_min?.message}</div>
          <Button
            className='flex w-full items-center justify-center bg-football-primary p-2 uppercase text-white hover:bg-football-primary/80'
            type='submit'
          >
            Áp dụng
          </Button>
        </form>
      </div>
    </div>
  )
}
