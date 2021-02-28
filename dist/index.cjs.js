'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var ExpiredStorage = require('expired-storage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ExpiredStorage__default = /*#__PURE__*/_interopDefaultLegacy(ExpiredStorage);

/**
 * An implement of the same API of react useState but with the difference of
 * localStorage persist. So, you can change your state and when the user reload
 * the browser, the state will persist!
 *
 * @param key name of the key to be stored on localStorage
 * @param initialValue value to be the default, like useState('defaultvalue')
 * @param expire time in seconds to expiry this state, set false to infinite
 */
function useLocalStorage(key, initialValue, expire) {
    if (expire === void 0) { expire = 60 * 30; }
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = react.useState(function () {
        try {
            // Instantiate the expiredStorage
            var expiredStorage = new ExpiredStorage__default['default']();
            // Get from local storage by key
            var item = expiredStorage.getItem(key);
            var parsedInitialValue = JSON.stringify(initialValue);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : JSON.parse(parsedInitialValue);
        }
        catch (error) {
            // If error also return initialValue
            console.error("Error when using useLocalStorage" + error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            var expiredStorage = new ExpiredStorage__default['default']();
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            expire === false
                ? window.localStorage.setItem(key, JSON.stringify(valueToStore))
                : expiredStorage.setItem(key, JSON.stringify(valueToStore), typeof expire === "number" ? expire : undefined);
        }
        catch (error) {
            // A more advanced implementation would handle the error case
            console.error(error);
        }
    };
    return [storedValue, setValue];
}

exports.useLocalStorage = useLocalStorage;
