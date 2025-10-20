export default interface axiosHelperType {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data?: unknown
}
