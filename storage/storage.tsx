import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';


export const storage=new Storage({
    size : 1000,
    storageBackend: AsyncStorage,
    defaultExpires : null,
    enableCache : true,
})
storage.save({
    key : 'loginInfo',
    data : {
        username : null,
        loggedIn : false,

    }
})
//aghfiushgdfiuahsf
