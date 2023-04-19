import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName);
  const photoData = await uploadPhoto(fileName);

  const values_1 = await Promise.allSettled([userData, photoData]);
  const response = [];
  values_1.map((item) => {
    //console.log(item.value);
    if (item.status === 'fulfilled') {
      response.push({ status: item.status, value: item.value, });
      //console.log(response);
    } else {
      response.push({ status: item.status, value: `${item.reason}`, });
     // console.log(response);
    }
  });
  return response;
}