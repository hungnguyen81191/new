

import OkrApi from "./ApiFact";


const apis = {
    okrs: OkrApi,
};

export const ApiFact = {
    get: (name) => apis[name],
};