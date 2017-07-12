import {LocalStorage} from 'node-localstorage'

const storage = new LocalStorage('./storage')

var localStorage = {
  set: function (key, value) {
    return storage.setItem(key, value)
  },
  get: function (key) {
    return storage.getItem(key).then(function (value) {
      return value
    })
  },
  remove: function (key) {
    return storage.removeItem(key)
  }
}

export {
    localStorage
}
