
// import axios from 'axios';
// export const fetchProtectedData = async (accessToken) => {
//     try {
//         const response = await axios.get('https://api.example.com/protected-endpoint', {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch protected data.');
//     }
// };

// export const refreshAccessToken = async (refreshToken) => {
//     try {
//         const response = await axios.post('https://api.example.com/refresh-token', {
//             refresh_token: refreshToken
//         });
//         const newAccessToken = response.data.access_token;
//         return newAccessToken;
//     } catch (error) {
//         throw new Error('Failed to refresh access token.');
//     }
// };