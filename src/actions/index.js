import axios from 'axios';


const ROOT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/'


export const FETCH_LASTS_CAMPERS = 'FETCH_LASTS_CAMPERS'
export const FETCH_ALL_CAMPERS = 'FETCH_ALL_CAMPERS'

export function fetchLastsCampers(){
  const url = `${ROOT_URL}recent`
  const request = axios.get(url);

  return{
    type: FETCH_LASTS_CAMPERS,
    payload: request
  }
}



export function fetchAllCampers(){
  const url = `${ROOT_URL}alltime`
  const request = axios.get(url);

  return{
    type: FETCH_ALL_CAMPERS,
    payload: request
  }
}
