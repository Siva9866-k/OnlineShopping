export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function getUsers() {
  const users = localStorage.getItem('registeredUsers');
  return users ? JSON.parse(users) : [];
}

export function saveUsers(users) {
  localStorage.setItem('registeredUsers', JSON.stringify(users));
}

export function setAuthSession(user) {
  const token = `${user.email}:${Date.now()}`;
  localStorage.setItem('token', token);
  localStorage.setItem('currentUser', JSON.stringify({ email: user.email, name: user.name }));
}

export function clearAuthSession() {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
}

export function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem('token') && localStorage.getItem('currentUser'));
}
