import { store } from '@/store/store';
import { isNil, find } from 'lodash';

export const isNode = () => {
    try {
        window;
        return false;
    } catch (e) {
        return true;
    }
}

export const getLabel = (data, key) => {
    const obj = find(data, function (o) {
        if (o.language.name === (store.getState()['app']['config']['language']) || o.language.name === 'en') {
            return o;
        }
    });
    return isNil(obj) ? 'N.A.' : obj[key]
}