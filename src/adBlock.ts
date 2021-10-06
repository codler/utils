let blocked = false;
let promise;
const initHasAdBlock = () =>
  (promise = fetch(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    {
      method: "HEAD",
      mode: "no-cors",
    }
  )
    .then(() => false)
    .catch(function (e) {
      blocked = true;
      return true;
    }));

export const checkIsEnabled = (): Promise<boolean> =>
  promise ?? initHasAdBlock();

function isEnabled(): boolean {
  return blocked;
}

export default {
  checkIsEnabled,
  isEnabled,
};
