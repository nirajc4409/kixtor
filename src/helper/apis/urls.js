const urls = {
  baseUrl: '192.168.10.168/api/v1/',
}

export const getBaseUrl = (key) => {
  return urls[key]
}