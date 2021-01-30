import {useSubscription} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

const SUBSCRIBE_VIDEO_ADDED = gql`
  subscription onVideoAdded($title: String!){
      videoAdded(title: $title){
          id
          title
          url
      }
  }`;

  const NewVideoNotification = () => {
  const {data,error,loading} = useSubscription(SUBSCRIBE_VIDEO_ADDED, {
      variables:{
        title: 'Ma nouvelle vidéo'
      }
        
    });
    if(loading){
        return <div>Loading</div>;
    }
    if(error){
     return <div>Erreur {error.message}</div>
    }
    return (
        <div class='notification'>
            <h2>Nouvelle vidéo ajoutée !</h2>
            <p>ID: {data.videoAdded.id}</p>
            <p>Title: {data.videoAdded.title}</p>
            <p>Url: {data.videoAdded.url}</p>
        </div>
    )
  }

  export default NewVideoNotification;