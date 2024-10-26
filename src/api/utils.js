import axios from "axios";

export const DOMAIN = `https://glutton-backend.onrender.com/`; // Live Server

export const SOCKET_URL = 'https://glutton-backend.onrender.com/';

const BASE_URL = `${DOMAIN}api/`;

const USER_BASE_URL = `${BASE_URL}/user`;
const CHECK_USER_URL = `${USER_BASE_URL}/check`;

const CUSTOMER_BASE_URL = `${BASE_URL}/customer`;
const CUSTOMER_REGISTER_URL = `${CUSTOMER_BASE_URL}/register`;
const CUSTOMER_UPDATE_URL = `${CUSTOMER_BASE_URL}/update`;
const MANAGE_FAVORITE_URL = `${CUSTOMER_BASE_URL}/manage-favorite`;

const RESTAURANT_BASE_URL = `${BASE_URL}/restaurant`;
const ACTIVE_RESTAURANT_URL = `${RESTAURANT_BASE_URL}/active`;
const FAVOURITE_RESTAURANT_URL = `${RESTAURANT_BASE_URL}/favourite`;
const GET_PHOTOS_URL = `${RESTAURANT_BASE_URL}/photo`;

const RATING_BASE_URL = `${BASE_URL}/rating`;
const ADD_RATING_URL = `${RATING_BASE_URL}/add`;

const MENU_ITEM_BASE_URL = `${BASE_URL}/menu-item`;
const WHOLE_MENU_URL = `${MENU_ITEM_BASE_URL}/menu`;

const BOOKINGS_BASE_URL = `${BASE_URL}/booking`;
const BOOKINGS_TIMESLOT_URL = `${BOOKINGS_BASE_URL}/timeslot`;
const BOOK_TABLE_URL = `${BOOKINGS_BASE_URL}/add`;
const CANCEL_BOOKING_URL = `${BOOKINGS_BASE_URL}/cancel`;
const VERIFY_BOOKING_URL = `${BOOKINGS_BASE_URL}/verify`;

const INVOICE_BASE_URL = `${BASE_URL}/invoice`;
const INVOICE_LIST_URL = `${INVOICE_BASE_URL}/customer`;

// GET
export const checkUserByUID = async (uid) => {
    const res = await axios.get(`${CHECK_USER_URL}/${uid}`);
    return res;
}

export const getCustomerByUidAPI = async (uid) => {
    const res = await axios.get(`${CUSTOMER_BASE_URL}/${uid}`);
    return res;
}

export const getBookingsByUidAPI = async (uid) => {
    const res = await axios.get(`${BOOKINGS_BASE_URL}/${uid}`);
    return res;
}

export const getActiveRestaurantsAPI = async () => {
    const res = await axios.get(`${ACTIVE_RESTAURANT_URL}`);
    return res;
}

export const getRestaurantReviewsAPI = async (id) => {
    const res = await axios.get(`${RATING_BASE_URL}/${id}`);
    return res;
}

export const getRestaurantPhotosAPI = async (id) => {
    const res = await axios.get(`${GET_PHOTOS_URL}/${id}`);
    return res;
}

export const getMenuByRestIDAPI = async (id) => {
    const res = await axios.get(`${WHOLE_MENU_URL}/${id}`);
    return res;
}

export const getInvoiceListAPI = async (uid) => {
    const res = await axios.get(`${INVOICE_LIST_URL}/${uid}`);
    return res;
}

export const getInvoiceByIDAPI = async (id) => {
    const res = await axios.get(`${INVOICE_BASE_URL}/${id}`);
    return res;
}

// POST
export const customerRegiaterAPI = async (params) => {
    const res = await axios.post(`${CUSTOMER_REGISTER_URL}`, params);
    return res;
}

export const getFavouriteRestaurantsAPI = async (params) => {
    const res = await axios.post(`${FAVOURITE_RESTAURANT_URL}`, params);
    return res;
}

export const addRatingAPI = async (params) => {
    const res = await axios.post(`${ADD_RATING_URL}`, params);
    return res;
}

export const bookTableAPI = async (params) => {
    const res = await axios.post(`${BOOK_TABLE_URL}`, params);
    return res;
}

export const getBookingTimeSlot = async (params) => {
    const res = await axios.post(`${BOOKINGS_TIMESLOT_URL}`, params);
    return res;
}

// PATCH
export const updateCustomerByUidAPI = async (uid, params) => {
    const res = await axios.patch(`${CUSTOMER_UPDATE_URL}/${uid}`, params);
    return res;
}

export const manageFavoriteByUidAPI = async (uid, params) => {
    const res = await axios.patch(`${MANAGE_FAVORITE_URL}/${uid}`, params);
    return res;
}

export const cancelBookingAPI = async (id) => {
    const res = await axios.patch(`${CANCEL_BOOKING_URL}/${id}`);
    return res;
}

export const verifyBookingAPI = async (id) => {
    const res = await axios.patch(`${VERIFY_BOOKING_URL}/${id}`);
    return res;
}
