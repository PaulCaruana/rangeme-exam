//@ts-check

/**
 *
 * @param {Array} arr
 * @param {string} index
 */
export const getUnique = (arr, index) => {
  const unique = arr
    .map(e => e[index])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e]);
  return [...unique];
};

export const handleOnScroll = () => {
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  const scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 356) {
    return true;
  } else {
    return false;
  }
};
