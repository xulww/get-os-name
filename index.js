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

module.exports = getOperatingSystemName;
