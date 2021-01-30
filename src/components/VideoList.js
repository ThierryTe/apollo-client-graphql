import {useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag"
import React from 'react'

const GET_VIDEO = gql `
query videos {
    videos{
        id
        title
        url
        author{
            id
            name
        }

    }
}

`;
const VideoList = ()=>{
 const {loading, error, data} = useQuery(GET_VIDEO, {
    pollInterval: 100
 }
    )
 if(loading){
    return <div>Loading...</div>;
}
if(error){
 return <div>Erreur {error.message}</div>
}
return (
    <div className="list">
        <table className="pure-table pure-table-horizontal center">
            <thead>
                <tr>
                    <th colSpan="4">Liste des vidéos</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Url</th>
                    <th>Auteur</th>
                </tr>
            </thead>
            <tbody>
               {data.videos.map(video =>
               <tr key={video.id}>
                <td>{video.id}</td>
                <td>{video.title}</td>
                <td>{video.url}</td>
                <td>{video.author.name}</td>
               </tr>
               )}
            </tbody>
        </table>
    </div>
)
};
export default VideoList;