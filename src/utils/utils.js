import { find } from 'lodash';

export const isNode = () => {
    try {
        window;
        return false;
    } catch (e) {
        return true;
    }
}

export const getEnLabel = (data, key) => {
    return find(data, function (o) {
        if (o.language.name === "en") return o
    })[key] || '';
}