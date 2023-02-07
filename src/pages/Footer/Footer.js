import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import lazo from '../../images/footer/lazo.png';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
const Footer = () => {
  let urlFacebook="https://www.facebook.com/profile.php?id=100068703835576";
  let urlInstagram="https://www.instagram.com/explore/tags/venezia/";
  let urlTwitter="https://twitter.com/?lang=es";
  return (
    <div className="bg-dark text-bg-dark ps-5">  
        <Box sx={{ flexGrow: 1 ,}}>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} 
              columns={{ md: 2, lg: 6}} 
              display="flex" 
              justifyContent="center">
          <Grid item md={2}  >
                <Typography level="body3"><EmailIcon color="success" fontSize="large"  /> contacto@venezzia.cl </Typography>
                <Typography level="body3"><CallIcon  fontSize="large"  /> Whatsapp: +569 3251 3550 </Typography>
                <Typography level="body2"><AccessTimeIcon color="error" fontSize="large"  /> Abierto de lunes a Domingo</Typography> 
                </Grid> 

          <Grid item md={2}  > 
     
                <Link href={urlFacebook} target="_blank"><FacebookIcon color="success" fontSize="large"  />  </Link>
                <Link href={urlInstagram} target="_blank"><InstagramIcon color="success" fontSize="large"  />  </Link>
                <Link href={urlTwitter} target="_blank"><TwitterIcon color="error" fontSize="large"  /> </Link>
          </Grid>
          <Grid item md={2}  >
                <img src={lazo} width="500" height="120" className="d-inline-block" alt="Logo"/>
                </Grid>    
        </Grid>    
      </Box>
    </div>
  )
}


export default Footer