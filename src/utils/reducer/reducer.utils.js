export const createAction = (type, payload) => {
    if (!type) {
        throw new Error('Type is required for an action');
    }
    return { type, payload };
};
