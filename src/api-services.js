import request from 'superagent';

const URL = `https://covid-19-backend.herokuapp.com/`;

/* GET ROUTES FOR FUNDS */

// GET route for all funds
export const getAllFunds = async (req, res) => {
    const data = await request.get(`${URL}/listings`);
    return data.body;
}

// GET route to retrieve single fund by its id
export const getFund = async (id) => {
  const result = await request.get(`${URL}/listings/${id}`);
  return result.body[0];
}

// GET route to retrieve funds by state
export const getFundsByState = async (state) => {
  const result = await request.get(`${URL}/listings/state/${state.id}`);
  return result.body;
}

// GET route to retrieve funds by country
export const getFundsByCountry = async (country) => {
  const result = await request.get(`${URL}/listings/country/${country.id}`);
  return result.body;
}

// GET route to retrieve funds by search
export const getFundsBySearch = async (searchQuery) => {
  const result = await request.get(`${URL}/search?search=${searchQuery}`);
  return result.body;
}

/*ENDPOINT DOES NOT EXIST */
// GET route for paged funds
// export const getPagedFunds = async (id) => {
//     const URL = `${process.env.DATABASE_URL}/listings/page/${id}`;
//     const result = await request.get(URL);
//     return result.body;
// }

/* USER ROUTES */

// Retrieve user from local storage
export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
}

// GET route for all users
export const getAllUsers = async () => {
  const result = await request.get(`${URL}/users`);
  return result.body;
}

/* AUTH ROUTE */

// POST sign in/up route (pass in `signin` or `signup` as param)
export const logInUser = async (param) => {
  const user = getUserFromLocalStorage();
  await request.post(`${URL}/api/auth/${param}`, {
      email: user.email,
      displayName: user.displayName,
      password: user.password
  });
}

/* ADMIN ROUTES */

// POST route for creating a listing
export const createNewListing = async (listing) => {
  const user = getUserFromLocalStorage();
  const result = await request.post(`${URL}/api/admin/listings`, listing).set('Authorization', user.token);
}

// POST route to update listing
export const updateListing = async (listing, matchingListing) => {
  const user = getUserFromLocalStorage();
  const result = await request.put(`${URL}/api/admin/listings/${listing.id}`, matchingListing).set('Authorization', user.token);
}

// DELETE route to remove listing
export const deleteListing = async (listing) => {
  const user = getUserFromLocalStorage();
  const result = await request.delete(`${URL}/api/admin/listings/${listing.id}`).set('Authorization', user.token);
}
