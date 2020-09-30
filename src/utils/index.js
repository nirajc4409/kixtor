// ADD ALL COMMON METHODS HERE

export const tempResolve = (data) => {
  return Promise.resolve({
    status: 'ok',
    ...data
  })
}