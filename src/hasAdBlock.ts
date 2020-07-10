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

export const checkHasAdBlock = () => promise ?? initHasAdBlock();

function hasAdBlock() {
  return blocked;
}

export default hasAdBlock;
