import axios from 'axios'

export const errorHandler = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error('Axios Error Response:')
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
      console.error('Headers:', error.response.headers)
    } else if (error.request) {
      console.error('Axios Error Request:')
      console.error('No hubo respuesta del servidor:', error.request)
    } else {
      console.error('Axios Error Message:', error.message)
    }
  } else if (error instanceof Error) {
    console.error('Standard Error:', error.message)
    console.error(error.stack)
  } else if (typeof error === 'string') {
    console.error('String Error:', error)
  } else {
    console.error('Unknown Error:', error)
  }
}

export default { errorHandler }
