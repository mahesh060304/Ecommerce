import React from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Box,IconButton,Typography,Menu,Avatar,Tooltip,MenuItem, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import { toast } from 'react-toastify';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';    
// import MenuItem from '@mui/material/MenuItem';




const Layout=()=> {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCart=()=>{
    if(isLoggedIn){
      navigate("/Addcart")
    }else{
      toast.error("Please Login!");
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
   const name=JSON.parse(localStorage.getItem('user'));


  return (
   
    <div>
       <nav className="navbar navbar-expand-lg bg-light" style={{width:"100%"}}>
  <div className="container-fluid">
  <img src="./logo.webp" alt="CLOTHING" style={{width:"10%",marginLeft:"100px"}}/>   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-2" id="navbarTogglerDemo01" >
       
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"130px"}}>
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" >
            <font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/">HOME</Link></font></button>
        </li>
        <li className="nav-item">
          <button className="nav-link active" style={{marginLeft:"30px"}} >
            <font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/mens">MAN</Link></font>
            </button>
        </li>
        <li className="nav-item" style={{marginLeft:"30px"}}>
          <button className="nav-link active"><font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/womens">WOMAN</Link></font></button>
        </li>
        {/* <li className="nav-item" style={{marginLeft:"30px"}}>
          <button className="nav-link active"><font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/Addcart">BLOG</Link></font></button>
        </li> */}
        <li className="nav-item"style={{marginLeft:"30px"}}>
          <button className="nav-link active"><font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/about">ABOUT</Link></font></button>
        </li>
      </ul>

      <form className="d-flex navbar-nav me-auto mb-2 mb-lg-0" role="search" onSubmit={handleSubmit}>
      {/* <li className="nav-item">
          <button className="nav-link active"><font face="Montserrat"> <Link style={{textDecoration:"none",color:"black"}} to="/Login">LOGIN</Link></font></button>
        </li> */}
        <li className="nav-item"style={{marginLeft:"30px",marginRight:"30px"}}>
          <button className="nav-link active" onClick={handleCart}>
              {/* <Link style={{textDecoration:"none",color:"black"}} to="/Addcart"> */}
                <Badge badgeContent={8} color="error"><ShoppingCartIcon/></Badge>&nbsp;
          </button>
        </li>
        <div style={{fontFamily:"Noto Sans",display:"flex",justifyContent:"center",padding:"10px"}}> {name.name}</div>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isLoggedIn &&
              <>
                <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><Link style={{textDecoration:"none",color:"black"}} to="/signup">Register</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center"><Link style={{textDecoration:"none",color:"black"}} to="/login">Login</Link></Typography>
              </MenuItem> </>
              }
              {isLoggedIn &&
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"
                   onClick={()=>{dispatch(authActions.logout()); toast.show("LOgged Out Successfully")}}
                    ><Link style={{textDecoration:"none"}} to="/login">Logout</Link></Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
          
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
        
      </form>
      
    </div>
  </div>
</nav>
<div>
    <Outlet/>
</div>
</div>
    
  )
}

export default Layout;








