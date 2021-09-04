import React from 'react';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
import Countup from 'react-countup';
import styles from './Cards.module.css';
import sx from 'classnames';

const Cards =({data:{confirmed,  recovered,deaths,lastUpdate}})=> {
  if(!confirmed){
    return 'Loading...';
  }

  return(
    <div className ={styles.container}>
     <h1 className={styles.h1}>Covid-19</h1>
     <Grid container spacing ={3} justify='center'>

     <Grid item component ={Card}  xs ={12}md ={3}className={sx(styles.card,styles.infected)}>
         <CardContent>
           <Typography color ="textSecondary" gutterBottom> Infected</Typography>
           <Typography varaint ='h5'>
             <Countup
               start ={0}
               end ={confirmed.value}
               duration={2.5}
               separator=","
             />
           </Typography>
           <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography varaint ="body2">Number of active cases of COVID-19</Typography>
         </CardContent> 
     </Grid>
     <Grid item component ={Card}  xs ={12}md ={3}className={sx(styles.card,styles.Recovered)}>
         <CardContent>
           <Typography color ="textSecondary" gutterBottom> Recovered</Typography>
           <Typography varaint ='h5'>
             <Countup
               start ={0}
               end ={recovered.value}
               duration={2.5}
               separator=","
             />
           </Typography>
           <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography varaint ="body2">Number of recovered from  COVID-19</Typography>
         </CardContent> 
     </Grid>
     <Grid item component ={Card}  xs ={12}md ={3}className={sx(styles.card,styles.Deaths)}>

         <CardContent>
           <Typography color ="textSecondary" gutterBottom> Deaths</Typography>
           <Typography varaint ='h5'>
             <Countup
               start ={0}
               end ={deaths.value}
               duration={2.5}
               separator=","
             />
           </Typography>
           <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography varaint ="body2">Number of Deaths  caused by COVID-19</Typography>
         </CardContent> 
     </Grid>
     </Grid>

    </div>
   
  )
}

export default Cards;
