import CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY } from 'shared/constants/index';

// function to check if user is logged in or not. We can store user sessions in cookie also If we want
const checkLogin = (): boolean => {
	if (localStorage.authData && localStorage.userData) {
		return true;
	} else {
		return false;
	}
};

// function to set user authentication data
const setAuthData = (data: string): void => {
	const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY as string);
	localStorage.setItem('authData', cipherText.toString());
};

// function to get user authentication data
const getAuthData = (): string => {
	const data = localStorage.authData;
	if (data) {
		const bytes = CryptoJS.AES.decrypt(data.toString(), ENCRYPTION_KEY as string);
		const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return decryptedData;
	} else {
		return '';
	}
};

// function to remove user authentication data
const removeAuthData = (): void => {
	localStorage.removeItem('authData');
};

// function to remove user data
const removeUserData = (): void => {
	localStorage.removeItem('userData');
};

const authService = {
	checkLogin: checkLogin,
	setAuthData: setAuthData,
	getAuthData: getAuthData,
	removeAuthData: removeAuthData,
	removeUserData: removeUserData
};

export default authService;
