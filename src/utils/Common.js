// return the user data from the session storage
export const getUser = () => {
    const user = sessionStorage.getItem('user');
    if (user) return JSON.parse(user);
    else return null;
  }
  
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('accessToken') || null;
  }
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('emailId');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('finalRole');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (emailId, password, accessToken, id, user, finalrole, isAdmin) => {
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('emailId', emailId);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('finalrole', finalrole);
    sessionStorage.setItem('isAdmin', isAdmin);
    sessionStorage.setItem('user', JSON.stringify(user));
  }