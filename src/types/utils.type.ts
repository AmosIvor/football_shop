export interface SuccessResponse<Data> {
  message: string
  data: Data
}

export interface ErrorResponse {
  type: string
  title: string
  status: number
  traceId: string
}
