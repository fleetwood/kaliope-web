
import { __prod__ } from "./constants"

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

export const jsonify = (obj:any) => JSON.stringify(obj,null,2)

export const log = (message?: any, ...optionalParams: any[]) => {
    if (!__prod__) {
        if (optionalParams && "string" === typeof optionalParams[0] ) {
            console.log(message+' '+optionalParams)
          }
          else if (optionalParams && optionalParams.length > 0) {
              console.log(message,jsonify(optionalParams.map(o => o)))
          }
          else {
              console.log(message)
          }
    }
}

export const logError = (message?: any, ...optionalParams: any[]) => {
    if (!__prod__) {
        console.error(message,optionalParams)
    }
};

export const todo = (...params:any) => log(`!!!TODO!!!`,...params)

export const now = () => new Date();