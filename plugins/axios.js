import axios from 'axios';
import Vue from 'vue';

axios.interceptors.request.use(
  config => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjY0MDQxMDA1M2ZhODg3NGY4MmZmMDZkNmNhNTMwMyIsInN1YiI6IjVlZGQzMDBjOGQ1MmM5MDAyMmE0ZTM5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ItX5mF8ugXZurOYzZF3Bs-ddhqal6DDPyX3WkLmnqmc';

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';
      }
    return config;

  } catch (error) {
      console.log('erro', error)
    }
  },
  error => {
    console.log('error', error);
    Promise.reject(error)
  }

);

Vue.prototype.$http = axios;
Vue.prototype.$API_LANG = 'language=pt-BR';
Vue.prototype.$BASE_URL = 'https://api.themoviedb.org/3/';
