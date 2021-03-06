import { NativeModules, NativeEventEmitter } from 'react-native';

const { RNAdyen } = NativeModules;

const RNEventEmitter = new NativeEventEmitter(RNAdyen);

export default {
  initializeAdyen() {
    return RNAdyen.initializeAdyen();
  },
  setPaymentData(data) {
    return RNAdyen.setPaymentData(data);
  },
  setCardDetails(data) {
    return RNAdyen.setCardDetails(data);
  },
  setPaymentMethodForIdeal(data, id = '') {
    return RNAdyen.setPaymentMethodForIdeal(data, id);
  },
  setPaymentMethodForCard(data) {
    return RNAdyen.setPaymentMethodForCard(data);
  },
  setURLCompletion(url) {
    return RNAdyen.setURLCompletion(url);
  },
  RNEventEmitter,
};
