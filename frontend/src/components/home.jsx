
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCartShopping,faEye,faRepeat} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import BootstrapCarousel from './Carousel';

const Home=()=>{
    const navigate=useNavigate();
  
    return (
        <>
    <div className="container-fluid" style={{backgroundImage:"url(slider01.webp)",height:"700px",width:"100%",backgroundRepeat:"no-repeat"}}>
        <div className="row justify-content-center align-items-center" style={{height: "100%"}}>
            <div className="col-10 col-md-8 col-lg-6">
                <div className="text-center">
                    <h1 className="text-white" style={{fontFamily:"Montserrat",fontSize:"40px"}}>Best collection</h1>
                </div>
                <div className="text-center">
                    <h5 className="text-white font-weight-bold" style={{fontFamily: "sans-serif",fontSize:"55px",fontWeight:"bold"}}>EXCLUSIVE FASHION<br/>2023</h5>
                </div>
                <div className="text-center mt-3">
                    <button className="shop">SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3 col-6 mb-3" id="box">
                <div className="text-center mt-5">
                    <img src="garantee.webp" alt="Money guarantee"/>
                </div>
                <p className="text-center">MONEY GUARANTEE</p>
            </div>
            <div className="col-md-3 col-6 mb-3" id="box">
                <div className="text-center mt-5">
                    <img src="coupon.webp" alt="Money guarantee"/>
                </div>
                <p className="text-center">GIFT COUPON</p>
            </div>
            <div className="col-md-3 col-6 mb-3" id="box">
                <div className="text-center mt-5">
                    <img src="delivery.webp" alt="Money guarantee"/>
                </div>
                <p className="text-center">FREE SHIPPING</p>
            </div>
            <div className="col-md-3 col-6 mb-3" id="box">
                <div className="text-center mt-5">
                    <img src="support.webp" alt="Money guarantee"/>
                </div>
                <p className="text-center">24 X 7 SUPPORT</p>
            </div>
        </div>
    </div>
  

     <div className="container mt-5">
        <div className="row" >
            <div className="col-md-5 mb-3">
                <img src="./branding.webp" alt="" className="img-fluid"/>
            </div>
             <div className="col-md-6" >
                <div className="bg-dark text-white p-4" style={{height:"400px"}}>
                    <h4 className="font-weight-bold" style={{fontFamily:"Montserrat"}}>New Fashion</h4>
                    <h2 className="font-weight-bold" style={{fontSize: "40px",fontWeight:"bold"}}>BRAND CORTTA</h2>
                    <h2 className="font-weight-bold" style={{fontSize:"40px",fontWeight:"bold"}}>$200.00</h2>
                    <p className="font-weight-light" style={{lineHeight:"30px",fontFamily:"poppins"}}>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.</p>
                      <button  style={{fontSize:"24px",backgroundColor:"#333333",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon icon={faCartShopping} style={{color:"#CCCCCC"}}/></button>
                  <button style={{fontSize:"24px",backgroundColor:"#333333",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon icon={faHeart} style={{color:"#CCCCCC"}}/></button>
                  <button style={{fontSize:"24px",backgroundColor:"#333333",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon icon={faEye} style={{color:"#CCCCCC"}}/></button>
                  <button style={{fontSize:"24px",backgroundColor:"#333333",border:"1px solid #CCCCCC"}}>
                  <FontAwesomeIcon icon={faRepeat} style={{color:"#CCCCCC"}}/></button>
              </div>
          </div>
      </div> 
      
  
      <div className="container mt-5">
          <h3 style={{textAlign:"center",fontFamily:"Montserrat",fontWeight:"550",fontSize:"25px"}}>NEW ARRIVALS</h3>
          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"2%",height:"5px",backgroundColor:"grey"}}/>
          <div style={{width:"2%",height:"5px",backgroundColor:"#cc3333"}}/> 
          </div>
          <div><BootstrapCarousel/></div>
          
      </div>
      </div>

      <div className="container mt-5">
        <div className="row" style={{display:"flex",justifyContent:"space-between"}}>
        <div class="card mb-3" style={{maxWidth: "650px",backgroundColor:'#f4f4f4',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-5">
                <img src="02.png" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-6 d-flex flex-row align-items-center " >
                <div class="card-body ml-6 " >
                  <h5 class="card-title" style={{color:"grey",fontFamily:"Lato,sans-serif"}}>New Arrival</h5>
                  <h2 class="card-title" style={{color:"#666666",fontFamily:"Montserrat",fontWeight:"550"}}>Gray T-shirt</h2>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Montserrat",fontWeight:"bolder",fontSize:"30px"}}>$99.9</h2>
                  <p class="card-text" style={{color:"grey",fontFamily:"Lato,sans-serif",marginTop:"20px"}}>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faHeart} /></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC"}}>
                  <FontAwesomeIcon className="icons" icon={faRepeat} /></button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{maxWidth: "650px",backgroundColor:'#f4f4f4',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-5">
                <img src="01.png" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-6 d-flex flex-row align-items-center " >
                <div class="card-body " >
                  <h5 class="card-title" style={{color:"grey",fontFamily:"Lato,sans-serif"}}>New Arrival</h5>
                  <h2 class="card-title" style={{color:"#666666",fontFamily:"Montserrat",fontWeight:"550"}}>Gray T-shirt</h2>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Montserrat",fontWeight:"bolder",fontSize:"30px"}}>$99.9</h2>
                  <p class="card-text" style={{color:"grey",fontFamily:"Lato,sans-serif",marginTop:"20px"}}>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faHeart} /></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC"}}>
                  <FontAwesomeIcon className="icons" icon={faRepeat} /></button>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"row",overflowX:"hidden"}}>
      <div className="container mt-5">
      <h3 style={{fontFamily:"Montserrat",fontWeight:"550",fontSize:"25px"}}>NEW ARRIVAL</h3>
          <div style={{display:"flex"}}>
          <div style={{width:"3%",height:"5px",backgroundColor:"#cc3333"}}/>
          <div style={{width:"3%",height:"5px",backgroundColor:"grey"}}/> 
          </div>
        <div className="col mt-4" >
        <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="container mt-5">
          <h3 style={{fontFamily:"Montserrat",fontWeight:"550",fontSize:"25px"}}>NEW ONE</h3>
          <div style={{display:"flex"}}>
          <div style={{width:"3%",height:"5px",backgroundColor:"grey"}}/>
          <div style={{width:"3%",height:"5px",backgroundColor:"#cc3333"}}/> 
          </div>
        <div className="col mt-4" >
        <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="container mt-5">
          <h3 style={{fontFamily:"Montserrat",fontWeight:"550",fontSize:"25px"}}>TOP RATED</h3>
          <div style={{display:"flex"}}>
          <div style={{width:"3%",height:"5px",backgroundColor:"#cc3333"}}/>
          <div style={{width:"3%",height:"5px",backgroundColor:"grey"}}/> 
          </div>
        <div className="col mt-4" >
        <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                  
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5" style={{maxWidth: "500px",height:"16rem",backgroundColor:'white',border:"none"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="s01.webp" class="img-fluid rounded-start" width={'450px'} alt="..."/>
              </div>
              <div class="col-md-3 d-flex flex-row align-items-center " >
                <div class="card-body ml-6" >
                  <h5 class="card-title" style={{color:"black",fontFamily:"Lato,sans-serif"}}>Primo Court Mid Suede</h5>
                  <h2 class="card-title" style={{color:"#212529",fontFamily:"Lato",fontWeight:"bolder",fontSize:"20px",marginTop:"20px",marginBottom:"30px"}}>$99.9</h2>
                  <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                        <FontAwesomeIcon className="icons" icon={faCartShopping}/></button>
                        <button className="icons" style={{fontSize:"24px",border:"1px solid #CCCCCC",marginRight:"3%"}}>
                  <FontAwesomeIcon className="icons" icon={faEye} /></button>
                   
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
      <footer style={{backgroundColor: "#000000",padding: "20px",textAlign: "center"}}>
        <p style={{fontSize: "20px",color: "#ffffff",margin: "0",padding: "0",lineHeight: "1.5", fontFamily: "Montserrat",fontWeight: "900"}}>&ldquo;Discover , Shop , and Embrace the Joy of Finding Your Perfect Treasure.&rdquo;</p>
      </footer>
      {/* <div className="container mt-5">
      <h3 style={{textAlign:"center",fontFamily:"Montserrat",fontWeight:"550",fontSize:"25px"}}>BLOGS</h3>
          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"2%",height:"5px",backgroundColor:"grey"}}/>
          <div style={{width:"2%",height:"5px",backgroundColor:"#cc3333"}}/> 
          </div>
      <div class="row mt-5">
  <div class="col-sm-4" >
    <div class="card" style={{height:"31rem",border:"none"}}>
      <div class="card-body">
        <img src="mahesh re2.jpeg" alt="" height={"300px"} width={"100%"}/>
        <h5 class="card-title" style={{marginTop:"17px",fontFamily:"Lato",fontWeight:"bolder",fontSize:"22px"}}>NEW FASHION 2023</h5>
        <p class="card-text" style={{marginTop:"15px",fontFamily:"Lato",fontWeight:"550",fontSize:"18px"}}>I love the way your website is done with the flip images and the catwalks. Makes it wonderful to shop online. Thank you. I'll be back again and again!</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4" >
    <div class="card" style={{height:"31rem",border:"none"}}>
      <div class="card-body">
        <img src="mahesh.jpg" alt="" height={"300px"} width={"100%"}/>
        <h5 class="card-title" style={{marginTop:"17px",fontFamily:"Lato",fontWeight:"bolder",fontSize:"22px"}}>NEW FASHION 2023</h5>
        <p class="card-text" style={{marginTop:"15px",fontFamily:"Lato",fontWeight:"550",fontSize:"18px"}}>Great service, Great clothes and FAST delivery!! Loved the dress, now buying more! Happy! Happy!.</p>
      </div> */}
    {/* </div>
  </div>
  <div class="col-sm-4" >
    <div class="card" style={{height:"31rem",border:"none"}}>
      <div class="card-body">
        <img src="mahesh1.jpg" alt="" height={"300px"} width={"100%"}/>
        <h5 class="card-title" style={{marginTop:"17px",fontFamily:"Lato",fontWeight:"bolder",fontSize:"22px"}}>NEW FASHION 2023</h5>
        <p class="card-text" style={{marginTop:"15px",fontFamily:"Lato",fontWeight:"550",fontSize:"18px"}}>Thank you for offering these beautifully unique tops. They are flattering and gorgeous.</p>
      </div>
    </div>
  </div>
</div>
      </div> */}
     
   
      

        </>
    )
}
export default Home;