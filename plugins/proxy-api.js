export default function ({ $axios, $config }, inject) {
  const api = $axios.create({});
  api.setBaseURL($config.proxyApiUrl);
  inject('proxyApi', api);
}