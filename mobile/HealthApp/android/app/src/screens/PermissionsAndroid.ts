import { PermissionsAndroid, Platform, Alert } from 'react-native';

export const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Access is Required',
                    message: 'This App needs to access your location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
                return true;
            } else {
                Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else {
        //For IOS IF PERMISSION IS HANDLED
        return false;
    }
};
