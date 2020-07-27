import React,{Component} from 'react';
import Page from '../../Page';
import Table from '../../Table';

import './conductor.css'

export default class extends Component {
    constructor(){
      super();
    }
    render(){
    
      return (

        <Page
          title="Logo"
          showHeader={true}
          showFooter={true}
        >
   

        
          <Table>
          </Table>
      
         
        </Page>
      );
    }
  }