import axios from 'axios'

// const url = 'http://wp.lira.loc/wp-json/wp/v2'
const url = 'http://wp.liraholding.ru/wp-json/wp/v2'

export const getData = () => axios
    .get(`${url}/data`)
    .then((response) => response.data)

export const sendFeedback = (formData) => axios
    .post(`${url}/feedback`, formData)
    .then((response) => response.data)

export const requestSubscribe = (formData) => axios
    .post(`${url}/subscribe`, formData)
    .then((response) => response.data)

export default {
    getData,
    sendFeedback,
    requestSubscribe,
}
