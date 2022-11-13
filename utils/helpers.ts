export const URLify = (content:string) => {
  const urls = content.match(
    /((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g
  );
  if (urls) {
    urls.forEach(function (url:string) {
      content = content.replace(
        url,
        '<a target="_blank" href="' + url + '">' + url + "</a>"
      );
    });
  }
  return content.replace("(", "<br/>(");
};
