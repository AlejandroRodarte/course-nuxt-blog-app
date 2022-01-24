export default function ({ $axios, $config }, inject) {
  const api = $axios.create({});
  api.setBaseURL(`${$config.hostUrl}${$config.proxyApiPrefix}`);
  inject('proxyApi', api);
}