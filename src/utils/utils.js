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

export const translator = (entity, value) => {
    const lan = store.getState()['app']['config']['language']
    const translate =  require(`../../public/locales/${lan}/translation.json`);
    return (entity in translate && translate[entity][value]) ? translate[entity][value] : value;
}

export const getLabel = (data, key, lang) => {
    let obj = find(data, function (o) {
        if (o.language.name === (store.getState()['app']['config']['language'])) {
            return o;
        }
    });
    if (isNil(obj)) {
        obj = find(data, function (o) {
            if (o.language.name === 'en') {
                return o;
            }
        });
    } 

    return isNil(obj) || obj[key].length === 0 ? 'N.A.' : obj[key]
}