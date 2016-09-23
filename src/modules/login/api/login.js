export function login(user, password) {
  return new Promise((resolve, reject) => {
    if (user === 'crm') {
      resolve({
        ok: true,
        sessionKey: 'asdf'
      });
    } else {
      resolve({
        ok: false
      });
    }
  });
}