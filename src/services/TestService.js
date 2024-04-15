import axiosRequest from './ApiService';
import API_ENDPOINTS from '@/endpoints/apiEndpoints';
const { VITE_SMTP_KEY } = import.meta.env;

export const sendEmail = async (emailData) => {
  return axiosRequest({
    method: 'post',
    url: API_ENDPOINTS.sendEmail,
    data: emailData,
    headers: { 'Access-Key': VITE_SMTP_KEY },
  });
};
