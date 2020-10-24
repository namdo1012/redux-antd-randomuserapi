import axios from 'axios';

export const getData = async () => {
  const res = await axios('https://randomuser.me/api/?results=1');
  const data = res.data.results[0];

  return {
    name: data.name.first,
    email: data.email,
    phone: data.phone,
    address: data.location.city
  }

}