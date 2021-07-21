export const isNode = () => {
    try {
        window;
        return false;
    } catch (e) {
        return true;
    }
}