import getOperatingSystemName, {
  isUNIX,
  isWindows,
  isMacOS,
  isLinux,
  isAndroid,
  isIOS,
} from "get-os-name";

console.log(getOperatingSystemName());
console.log(isUNIX());
console.log(isWindows());
console.log(isMacOS());
console.log(isLinux());
console.log(isAndroid());
console.log(isIOS());
