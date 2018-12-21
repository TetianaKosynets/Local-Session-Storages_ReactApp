export const keys = {
    count: 'count',
    user_form: 'user_form'
}

//local storage

export const getLocalItem = function (key) {
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

export const setLocalItem = function (key, value) {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
}

export const removeLocalItem = function (key) {
    localStorage.removeItem(key);
}

//session storage

export const getSessionItem = function (key) {
    let item = sessionStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

export const setSessionItem = function (key, value) {
    let item = JSON.stringify(value);
    sessionStorage.setItem(key, item);
}

export const removeSessionItem = function (key) {
    sessionStorage.removeItem(key);
}
