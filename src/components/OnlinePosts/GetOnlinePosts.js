import React, { Component } from 'react';
import './GetOnlinePosts.css'
// get posts from online api
// it's return a json file
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("https://api.npoint.io/221a783748c2c2377807")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <main class="_listItensContainer_18omr_82">
              
                    {
                        posts.notes.map(post => (
                            <div className="_listItem_p4y9n_1"> 
                            <p class="_listItemText_p4y9n_39">          
                            {post.note}
                            </p></div>
                         
                        )).reverse()
                    }
                </main>
            );
        }
      
    }
  }
  
  export default GetOnlinePosts;