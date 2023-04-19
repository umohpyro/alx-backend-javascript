import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userData = signUpUser(firstName, lastName);
  const photoData = uploadPhoto(fileName);

  return Promise.allSettled([userData, photoData ]).then((values) => {
    const response = [];
    values.map((item) => {
      if (item.status === 'fulfilled') {
        response.push({ status: item.status, value: item.value });
      } else {
        response.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return response;
  });
}