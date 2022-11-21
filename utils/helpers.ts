import { __prod__ } from "./constants";

export const URLify = (content: string) => {
  const urls = content.match(
    /((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g
  );
  if (urls) {
    urls.forEach(function (url: string) {
      content = content.replace(
        url,
        '<a target="_blank" href="' + url + '">' + url + "</a>"
      );
    });
  }
  return content.replace("(", "<br/>(");
};

export const jsonify = (obj: any) => JSON.stringify(obj, null, 2);

export const log = (message?: any, ...optionalParams: any[]) => {
  if (!__prod__) {
    if (optionalParams && "string" === typeof optionalParams[0]) {
      console.log(message + " " + optionalParams);
    } else if (optionalParams && optionalParams.length > 0) {
      console.log(message, jsonify(optionalParams.map((o) => o)));
    } else {
      console.log(message);
    }
  }
};

export const logError = (message?: any, ...optionalParams: any[]) => {
  if (!__prod__) {
    console.error(message, optionalParams);
  }
};

export const todo = (...params: any) => log(`!!!TODO!!!`, ...params);

export const now = () => new Date();

export const valToLabel = (val: number) => {
  let result = val.toString();
  const tolerances: Array<{ x: number; l: string; d: number; p: number }> = [
    { x: 1000000, l: "M", d: 1000000, p: 2 },
    { x: 10000, l: "K", d: 1000, p: 3 },
    { x: 1000, l: "K", d: 1000, p: 2 },
  ];
  tolerances.every((t) => {
    if (val >= t.x) {
      result = (Math.round(val) / t.d).toPrecision(t.p).toString();
      result += t.l;
      return false;
    }
    return true;
  });
  return result;
};
