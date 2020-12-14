import React/* ,{useState ,useEffect } */ from 'react'
import './Feed.css';

import TweetBox from './TweetBox';
import Post from './Post';
import firebase from "./firebase";
// import FlipMove from './react-flip-move';



class Feed extends React.Component {
    constructor(){
        super()
        this.state={
            
            displayName:'',
            username:'',
            verified:'',
            text:'',
            image:'',
            avatar:''

        }
    }

    componentDidMount = async () => {
       
        const user= firebase.database().ref('post/');
        
        user.once('value',(snapShot)=>{
        
        snapShot.forEach(childSnapshot=>{
            
        this.setState({
          
          displayName:`${childSnapshot.val().displayName}`,
          username:`${childSnapshot.val().username}`,
          verified:`${childSnapshot.val().verified}`,
          text:`${childSnapshot.val().text}`,
          image:`${childSnapshot.val().image}`,
          avatar:`${childSnapshot.val().avatar}`,
           }/* ,()=>{
               console.log(this.state);
           } */)})
        })
      
        
      }
      shouldComponentUpdate() {
        return true;
      }
   
    
    render() {
        return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            {/* <FlipMove> */}
              <Post 
                //key={this.state.text}
                displayName={this.state.displayName}
                username={this.state.username}
                verified={this.state.verified}
                /* timestamp, */
                text={this.state.text}
                image={this.state.image}
                avatar={this.state.avatar}/> 
            {/* </FlipMove> */}
        </div>
    )
    }
}

export default Feed;