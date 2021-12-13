import AsyncStorage from '@react-native-async-storage/async-storage';

export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const AppStorage = {

  storeStringData: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  },

  getStringData: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  },

  storeObjectData: async (key: string, value: object) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  },

  getObjectData: async (key: string, value_when_null?: object) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : value_when_null;
    } catch (e) {
      // error reading value
      console.error('Error in getObjectData: ', e);
      
    }
  }
}