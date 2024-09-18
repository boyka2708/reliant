import React from 'react';
import YouTubeEmbed from '../../components/Youtube';

const App = () => {
  return (
    <>
    <h1 className='text-4xl font-semibold text-blue-500 text-center my-10'>Video Gallery</h1>
    <div className='sm:grid flex px-3 flex-col grid-cols-3 grid-rows-5 gap-3 space-x-2'>
      <YouTubeEmbed videoId="Cvd-QeGne_4" /> 
      <YouTubeEmbed videoId="C8q3Zqa9yWA" /> 
      <YouTubeEmbed videoId="_413ZHx_6RM" /> 
      <YouTubeEmbed videoId="lDZAqlAhjkg" /> 
      <YouTubeEmbed videoId="WkcxJRl9gRI" /> 
      <YouTubeEmbed videoId="x6L4JBGtOUU" /> 
      <YouTubeEmbed videoId="tqfS8zNE80c" /> 
      <YouTubeEmbed videoId="LlLdvLuk7N8" /> 
      <YouTubeEmbed videoId="mUdTNNUZX0U" /> 
      <YouTubeEmbed videoId="PkLQ4MvJL_k" /> 
      <YouTubeEmbed videoId="_RZ3P9TAyPw" /> 
      <YouTubeEmbed videoId="mUdTNNUZX0U" /> 
      <YouTubeEmbed videoId="VODshMtmfmE" /> 
      <YouTubeEmbed videoId="ouWs4scZlpc" /> 
      <YouTubeEmbed videoId="JT4HxPb0OzA" /> 
      <YouTubeEmbed videoId="C7mWYFf55HY" /> 
      <YouTubeEmbed videoId="GN7YDs9b7_M" /> 
    </div>
    </>
  );
};

export default App;
