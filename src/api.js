import axios from 'axios';


export const baseUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
export const getCards = (url) => {
    return axios.get(url);
}

