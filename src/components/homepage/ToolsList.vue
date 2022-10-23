<template>
    <section class="tools">
     <div class="about-technologies">
         <h2> Frequently Used Tools &amp; Technologies ⚒️ </h2>
 
         <div class="tool-row">
           <div class="single-tool green">
             <img src="../../assets/images/html5.png" alt="html 5">
           </div>
 
           <div class="single-tool pink">
             <img src="../../assets/images/css3.png" alt="css 3">
           </div>
 
           <div class="single-tool blue">
             <img src="../../assets/images/javascript.png" alt="javascript">
           </div>
 
           <div class="single-tool green">
             <img src="../../assets/images/vs-code.png" alt="Visual Studio Code">
           </div>
 
           <div class="single-tool pink">
             <img src="../../assets/images/jira.png" alt="Jira">
           </div>
 
           <div class="single-tool blue">
             <img src="../../assets/images/git.png" alt="git logo">
           </div>
           <p> ... we always make sure to include accessibility topics 🤗</p>
         </div>

       </div>
    </section>
 </template>
 
 
 <script>
 export default {
     // eslint-disable-next-line
     name: 'ToolsList'
 }
 </script>
 
 
 <style lang="scss" scoped>

 .tools {
  width: 100%;
  min-height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2c3e50;
  color: white;
 }
     .green {
         background: linear-gradient(132.9deg, #63F7A1 1.3%, #27AE60 98.06%), linear-gradient(143.36deg, #D6FF94 3.66%, #3DC24B 103.19%);
         border-radius: 16px;
     }
 
     .pink {
         background: linear-gradient(321.69deg, #FF6188 0%, #FFB199 100%);
         border-radius: 16px;
     }
 
     .blue {
         background: linear-gradient(321.69deg, #4481EB 0%, #04BEFE 100%);
         border-radius: 16px;
     }

     .about-technologies {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     }
 
     h2 {
         margin-bottom: 60px;
         color: white;
         width: 80%;
         text-align: center;
         font-size: 2rem;
         word-break: break-word;

     }

     p {
      text-align: right;
      width: 100%;
     }
 
     .single-tool {
         width: 200px;
         height: 200px;
         margin: 10px;
         display: flex;
         justify-content: center;
         align-items: center;
 
         img {
             width: 120px;
             height: 120px;
         }

         @media (max-width: 600px) {
          width: 90px;
          height: 90px;

          img {
            height: 50px;
            width: 50px;
          }
         }

     }
 
     .tool-row {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        flex-wrap: wrap;
        max-width: 800px;
        margin: 0 auto;

     }
 
 
     @media (max-width: 890px) {
         .tools {
             margin-top: 80px;
         }
     }
 
 </style>