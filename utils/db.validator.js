//Validar datos relacionados a la BD

import User from '../src/user/user.model.js'

export const existUsername = async (username) => {
    const alreadyUser = await User.findOne({ username});
    if (alreadyUser) {
        console.error(`Username${username} is already taken`);
        throw new Error(`Username${username} is already taken`);
    }
}

export const existEmail = async (email) => {
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
        console.error(`Email${email} is already taken`);
        throw new Error(`Email${email} is already taken`);
    }
}