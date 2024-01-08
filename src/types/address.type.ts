export interface IAddress {
  name: string
  code: number
  division_type: string
  codename: string
}

export interface ProvinceResponse extends IAddress {
  phone_code: number
  districts: DistrictResponse[]
}

export interface DistrictResponse extends IAddress {
  province_code: number
  wards: WardResponse[]
}

export interface WardResponse extends IAddress {
  district_code: number
}

export interface AddressType {
  province: string
  district: string
  ward: string
}
