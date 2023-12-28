export default function ({ $axios }, inject) {
  class HttpClient {
    get({ url, query }) {
      return $axios.get(url, {
        params: { ...query },
      })
    }

    post({ url, data }) {
      return $axios.post(url, data)
    }
  }
  // Inject to context as $http
  inject('http', new HttpClient())
}
