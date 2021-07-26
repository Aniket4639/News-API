import { Box } from '@material-ui/core';
import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/Grid";
import {Button}  from '@material-ui/core';
class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            news:[],
        }
    }
        
    async componentDidMount(){
        const url='https://newsapi.org/v2/everything?q=india&from=2021-06-25&sortBy=publishedAt&apiKey=7ec53a93c34b4484bbad684b5e50a828';
        const res=await fetch(url);
        const news=await res.json();
        
        console.log(news);
        this.setState({news:news.articles})
    }
    render() {
      const {news}=this.state;
    
     return (
         
      <div>
            {this.state.news.map(news => 
                       <div>
                           <Grid container spacing={4}>
                            <Grid item lg={8}>
                               <Paper>
                                   <Box p={1} boxShadow={1}>
                                        <Typography variant="subtitle1" variant="h4">
                                         <b>{news.title}</b>
                                        </Typography>
                                           <img src={news.urlToImage} width={750}/><div></div>
                                              {news.description}
                                              <div align="left"><Button href={news.url} variant="outlined">Read More</Button></div>
                                              <h4>source:{news.source.name}</h4><Typography align="right">author:{news.author}<div></div>publishedAt:{news.publishedAt}</Typography>
                                   </Box>
                                </Paper>
                            </Grid>
                           </Grid>
                       </div> )
            }
      </div>
        );
    }
}
export default Post