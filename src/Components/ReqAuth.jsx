
//Create the HOC for protected Routes
const ReqAuth = () => {
    const isAuth =useSelector((state)=>state.Authreducer.token)
    const location =useLocation()
  // console.log(location )
if(!isAuth){
    return <Navigate to={"/login"} state={{from :location }} replace/>
}
 return children


};

export default ReqAuth;
