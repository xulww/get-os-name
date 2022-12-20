# get-os-name
This is a very simple and small npm package that gives you the operating system name of a client. It has **no dependencies** and uses JavaScript and the 
Navigator Web API, which has [wide browser support](https://caniuse.com/mdn-api_navigator).

## Important
To be more specific, this package uses [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent). Keep in mind that browser users can change 
the value of this field if they want (UA spoofing).

## Exports
| Function name               | Return type | Description                                                                                                                         |
| --------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| getOperatingSystemName      | string      | The default package export. A function that returns the name of the operating system (e.g. "Windows"). Fallbacks to "Unknown".      |
| isUNIX                      | boolean     | A function that returns true if the operating system is UNIX                                                                        |
| isWindows                   | boolean     | A function that returns true if the operating system is Windows                                                                     |
| isMacOS                     | boolean     | A function that returns true if the operating system is macOS                                                                       |
| isLinux                     | boolean     | A function that returns true if the operating system is Linux                                                                       |
| isAndroid                   | boolean     | A function that returns true if the operating system is Android                                                                     |
| isIOS                       | boolean     | A function that returns true if the operating system is iOS                                                                         |


## Usage
```javascript
import getOperatingSystemName, {
  isUNIX,
  isWindows,
  isMacOS,
  isLinux,
  isAndroid,
  isIOS,
} from "get-os-name";

const osName = getOperatingSystemName()
const isOSNameUNIX = isUNIX()
const isOSNameWindows = isWindows()
const isOSNameMacOS = isMacOS()
const isOSNameLinux = isLinux()
const isOSNameAndroid = isAndroid()
const isOSNameIOS = isIOS()
```
