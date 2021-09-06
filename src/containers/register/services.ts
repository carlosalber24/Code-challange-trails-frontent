import { IRequestOptions } from '../../interfaces/axios';
import { IRegisterData } from '../../interfaces/registration';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function saveTrail(data: IRegisterData) {
  try {
    const ENDPOINT_URL = `${BASE_URL}v1/trails/create`;
    const requestOptions: IRequestOptions = {
      headers: { 'Content-Type': 'application/json' },
      data
    };

    const requestData: AxiosResponse = await axios.post(ENDPOINT_URL, requestOptions);
    return { status: requestData.data.status, data: requestData.data, error: '' };
  } catch (err) {
    console.log(err);
    return { status: false, data: '', error: 'An expected error has ocurred' }
  }
}