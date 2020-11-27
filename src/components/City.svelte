<script lang="typescript">
 // eslint-disable-next-line ParseError
 import type { IWebcam } from '../data/index'
 export let id: string
 export let name: string
 export let country: string
 export let state: string
 export let url: string
 export let webcams: IWebcam[]

 let showFullScreen: boolean = false

 function toggleFullScreen() {
  showFullScreen = !showFullScreen
  console.log(showFullScreen)
 }
</script>

<style>
 h3 {
  margin: 5px;
 }

 .city-container {
  border-radius: 16px;

  background-color: #333333;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 16px;
 }

 .city-container.full-screen {
  background-color: #222;
 }

 .city-container a {
  color: #fff;
 }

 .city-container h3 {
  text-align: center;
 }

 .city-container p {
  text-align: center;
  color: #cccccc;
 }

 .webcam-image-container {
  max-height: 400px;
  height: auto;
  overflow-x: scroll;
  max-width: 100%;
  border-radius: 16px;
  /* margin-bottom: 30px; */
 }

 .webcam-image {
  display: block;
  max-height: 400px;
  min-height: 400px;
  /* max-width: 80%; */
  min-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
 }

 @media screen and (max-width: 768px) {
  .city-container {
   max-width: 100%;
  }

  .webcam-image-container {
   max-height: 200px;
   max-width: 100%;
  }

  .webcam-image {
   max-height: 200px;
   min-height: 200px;
   margin: 0;
   padding: 0;
   /* max-width: 100%; */
  }
 }

 ::-webkit-scrollbar {
  width: 0;
  height: 0;
 }
</style>

<div
 class="city-container "
 class:full-screen={showFullScreen === true}
 {id}
 on:click={toggleFullScreen}>
 <h3><a href={url} target="_blank">{name}</a></h3>
 <p>{country} - {state}</p>
 <div class="webcam-image-container">
   {#if ['skaping', 'viewsurf'].includes(webcams[0].type)}
    <iframe title={webcams[0].name} style="width:100%;height:100%;min-height: 400px;top:0;left:0;right:0;bottom:0;border:none;" allowfullscreen allow="autoplay; fullscreen" src={webcams[0].url}></iframe>
   {:else}
    <img src={webcams[0].url} class="webcam-image" alt={name} />
   {/if}
 </div>
</div>
