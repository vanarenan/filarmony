import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));

/* Private section */

function _storeUser(user: any): void {
  localStorage.setItem('currentUser', user);
  currentUserSubject.next(user);
}

function _clearUser(): void {
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}

/* Public section */

function login(user: string, password: string): Boolean {
  if (user === 'admin' && password === 'admin') {
    _storeUser({ user: 'admin', password: 'admin'});
    return true;
  } else {
    _clearUser();
    return false;
  }
}

function logout(): void {
  _clearUser();
}

export const authenticationService = {
  login,
  logout,
  currentUserSubject
}