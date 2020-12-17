
// eslint-disable-next-line import/no-anonymous-default-export
export default (url) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  return fetch(baseUrl + url)
      .then(value => value.json())
}