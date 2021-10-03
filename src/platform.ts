const isIos = () =>
  (/iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
  !(window as any).MSStream;
const isAndroid = () => /(android)/i.test(navigator.userAgent);

export default {
  isIos,
  isAndroid,
};
