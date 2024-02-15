import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Addcart from './Addcart';



const Product=({product})=> {
  const[data,setData]=useState();
  const sendData=()=>{
    const data=product;
    setData(data);
  }

  return (
    <>
    <Card sx={{ width: 250 }}>
      <Link style={{textDecoration:"none",color:"black"}} to={"products/"+product._id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300" 
          width="300" 
          image={product.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Noto Sans"}}>
          {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary"  style={{fontFamily:"Noto Sans"}}>
          {product.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div"  style={{fontFamily:"Noto Sans"}}>
          &#8377; {product.amount}
          </Typography>
        <IconButton aria-label="add to favorites">
          
          <FavoriteIcon color="black"/>
        </IconButton>
        <IconButton aria-label="add to favorites"><ShoppingCartIcon/>
        </IconButton>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </>
  )
}

export default Product;
