import signUpUser from './4-promises.js';
import uploadPhoto from './5-promises.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => (
      results.map(o => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : o.reason.toString(),
    }))
  ));
}
