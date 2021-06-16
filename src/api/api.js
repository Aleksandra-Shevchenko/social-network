import axios from 'axios';

const api = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {"API-KEY": "15561bb6-da04-4759-83e8-0491bebdaf61"},
});

//получение пользователей и разворачивание страницы пользователя
export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10){
    return api.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(res => res.data)
  },

  getFriends(currentPage = 1, pageSize = 10){
    return api.get(`users?page=${currentPage}&count=${pageSize}&friend=true`)
    .then(res => res.data);
  },

  getUserInfo(userId) {
    return profileApi.getProfile(userId);
  },

  //добавление или удаление пользователя из друзей
  followFriend (userId) {
    return api.post(`follow/${userId}`, {})
    .then(res => {
      if(!res.data.resultCode){
        return res.data;
      }
    })
  },

  unfollowFriend(userId) {
    return api.delete(`follow/${userId}`)
    .then(res => {
      if(!res.data.resultCode){
        return res.data;
      }
    })
  }

}



//авторизация пользователя
export const authApi = {
  authUser() {
    return api.get(`auth/me`);
  },

  login(values){
    return api.post(`auth/login`, values);
  },
  
  logout(){
    return api.delete(`auth/login`);
  }
}





//
export const profileApi = {
  getProfile(userId) {
    return api.get(`profile/${userId}`)
    .then(res => res.data)
  },
  getStatus(userId) {
    return api.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return api.put(`profile/status`, {status: status}) 
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append('image', photoFile);
    return api.put(`profile/photo`, formData, {
      'Content-Type': 'multipart/form-data',
    });
  },
}



    