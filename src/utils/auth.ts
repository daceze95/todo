import { User } from '../types/User';

const USERS_KEY = 'Users';
const AUTH_USER_KEY = 'AuthenticatedUser';

// Get all users from localStorage
const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save all users to localStorage
const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Sign up
export const signup = (username: string, password: string): string | null => {
  const users = getUsers();
  const existing = users.find((u) => u.username === username);
  if (existing) return 'User already exists';

  users.push({ username, password });
  saveUsers(users);
  return null;
};

// Sign in
export const signin = (username: string, password: string): string | null => {
  const users = getUsers();
  const match = users.find((u) => u.username === username && u.password === password);
  if (!match) return 'Invalid credentials';

  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(match));
  return null;
};

// Sign out
export const signout = () => {
  localStorage.removeItem('AuthenticatedUser');
};

// Get logged-in user
export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('AuthenticatedUser');
  return user ? JSON.parse(user) : null;
};
