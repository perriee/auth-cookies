import Cookies from 'universal-cookie';

// default value
const cookies = new Cookies();

// buat kunci cookies
const CookieKeys = {
  AuthToken: 'authToken',
  User: 'user',
  LimitError: 100,
};

// settingan default
const CookieOptions = {
  path: '/',
  secure: true,
};

const CookieStorage = {
    set: (key, data, options) => {
        return cookies.set(key, data, {...CookieOptions, ...options})
    },
    get: (key, data, options) => {
        return cookies.get(key, data, {...CookieOptions, ...options})
    },
    remove: (key, data, options) => {
        return cookies.remove(key, data, {...CookieOptions, ...options})
    },
}

export {CookieKeys, CookieOptions, CookieStorage}