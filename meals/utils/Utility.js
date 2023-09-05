import { Platform } from 'react-native';

export const getDateTimeMetadata = () => {
    return Platform.OS +" "+ new Date().toLocaleString() +" : ";
};

export const getMessage = () => {
    return "Message from CODE. " ;
};
