import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from 'react';

const ADD_NEW_VIDEO = gql `
mutation createVideo($title:String!,$url: String!, $userId: String!){
    createVideo(input: {
        title: $title,
        url: $url,
        userId: $userId
    }){
        id
        title
        url
        author {
            id
            name
        }
    }
}

`;

const AddVideo = () =>{
    let title, url, userId
    const [createVideo] = useMutation(ADD_NEW_VIDEO);
    return (
        <div>
            <form  onSubmit={e => {
                e.preventDefault();
                createVideo({variables: {title:title.value, url: url.value, userId:userId.value}})
            }}
            class="pure-form pure-form-aligned form"
            >
             <fieldset>
             <div class="pure-control-group">
             <label>Titre</label>
             <input ref={value =>title= value} id="title"  placeholder="Titre"/>
             </div>
             <div class="pure-control-group">
             <label>Url</label>
             <input ref={value =>url= value} id="url" placeholder="Url"/>
             </div>
             <div class="pure-control-group">
             <label>Auteur</label>
             <input ref={value =>userId= value} id="userId" placeholder="Auteur" />
           </div>
             <div class="pure-controls">
             <button type="submit">Ajouter</button>
             </div>
        </fieldset>
            </form>
        </div>
    )

}

export default AddVideo;