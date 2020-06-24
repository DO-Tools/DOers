import readMessage from "./pages/messages";

const url = document.URL;
const pageNotSupported = (): void => console.log(`Page not supported for now: ${url}`);
let executor = pageNotSupported;

if (url.match(/\/messages\/readmsg/) !== null) {
    executor = readMessage;
}

export default executor;
