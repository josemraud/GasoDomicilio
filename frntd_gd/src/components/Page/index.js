import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Grid} from '@material-ui/core'

import './page.css';


export default ({showHeader, showFooter , title, children})=>{
  const myHeader = (showHeader)? (<Header title={title}></Header>) : null;
  const myFooter = (showFooter) ? (<Footer></Footer>) : null;
  return (
    <Grid containe direction="column">
      <Grid item>
        {myHeader}
      </Grid>
      <Grid item xs={0} sm={2}/>
      <Grid item xs={12} sm={8}>
        {children}
      </Grid>
      <Grid item xs={0} sm={2}/>
      <Grid item>
        {myFooter}
      </Grid>
    </Grid>
  );
}