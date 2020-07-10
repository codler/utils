function debounce(func: Function, wait: number) {
  let timeout: number;
  return function (this: any) {
    const context = this;
    const args = arguments;
    const later = function () {
      clearTimeout(timeout);
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default debounce;
