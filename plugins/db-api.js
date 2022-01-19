export default function ({ $axios, $config }, inject) {
  const api = $axios.create({})
  api.setBaseURL($config.dbApiUrl)
  inject('dbApi', api)
}