import uuid from 'uuid/v4';

export const getUUID = () => uuid();

export const getImageUrl = (imageName) => `${process.env.PUBLIC_URL}/images/${imageName}`;
