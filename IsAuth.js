export const isAuth = () =>{
    if (AsyncStorage.getItem('token')){
        return true
    }
  else
  return false
}
export default isAuth;