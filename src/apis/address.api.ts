import { DistrictResponse, ProvinceResponse } from '~/types/address.type'
import httpAddress from '~/utils/httpAddress'

const addressApi = {
  getProvinces() {
    return httpAddress.get<ProvinceResponse[]>('/')
  },
  getDistricts(code: string) {
    return httpAddress.get<ProvinceResponse>(`/p/${code}?depth=2`)
  },
  getWards(code: string) {
    return httpAddress.get<DistrictResponse>(`/d/${code}?depth=2`)
  }
}

export default addressApi
