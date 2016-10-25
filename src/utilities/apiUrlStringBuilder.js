export const apiUrlStringBuilder = () => {
  let url = process.env.REACT_APP_HOST

  if(process.env.NODE_ENV !== 'production'){
    url += ':'.concat(process.env.REACT_APP_PORT)
  }

  return url
}