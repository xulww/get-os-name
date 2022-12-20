function getOperatingSystemName() {
  let operatingSystem = "Unknown";

  if (typeof navigator !== "undefined" && navigator && navigator.userAgent) {
    if (navigator.userAgent.indexOf("X11") !== -1) {
      operatingSystem = "Unix";
    }
    if (navigator.userAgent.indexOf("Win") !== -1) {
      operatingSystem = "Windows";
    }
    if (navigator.userAgent.indexOf("Mac") !== -1) {
      operatingSystem = "macOS";
    }
    if (navigator.userAgent.indexOf("Linux") !== -1) {
      operatingSystem = "Linux";
    }
    if (navigator.userAgent.indexOf("Android") !== -1) {
      operatingSystem = "Android";
    }
    if (
      navigator.userAgent.indexOf("iPhone") !== -1 ||
      navigator.userAgent.indexOf("iPad") !== -1 ||
      navigator.userAgent.indexOf("iPod") !== -1
    ) {
      operatingSystem = "iOS";
    }
  }

  return operatingSystem;
}

export function isUNIX() {
  const osName = getOperatingSystemName();

  if (osName === "Unix") return true;
  return false;
}

export function isWindows() {
  const osName = getOperatingSystemName();

  if (osName === "Windows") return true;
  return false;
}

export function isMacOS() {
  const osName = getOperatingSystemName();

  if (osName === "macOS") return true;
  return false;
}

export function isLinux() {
  const osName = getOperatingSystemName();

  if (osName === "Linux") return true;
  return false;
}

export function isAndroid() {
  const osName = getOperatingSystemName();

  if (osName === "Android") return true;
  return false;
}

export function isIOS() {
  const osName = getOperatingSystemName();

  if (osName === "iOS") return true;
  return false;
}

export default getOperatingSystemName;
