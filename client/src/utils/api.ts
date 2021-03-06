import { apiBaseUrl } from '../constants'

type Options = Omit<RequestInit, 'body'> & { body?: unknown }

const api = <Data = unknown>(endpointUrl: string, { body, ...customConfig }: Options = {}): Promise<Data> => {
  const isPost = Boolean(body)
  const headers = isPost ? { 'Content-Type': 'application/json' } : undefined

  const config = {
    method: isPost ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  let stringifiedBody: string | undefined

  if (isPost) {
    stringifiedBody = JSON.stringify(body)
  }

  return window.fetch(`${apiBaseUrl}/${endpointUrl}`, { ...config, body: stringifiedBody }).then(async response => {
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      return Promise.reject(response)
    }
  })
}

export default api
