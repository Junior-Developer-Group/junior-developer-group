<template>
    <section class="tools">
     <div class="about-technologies">
         <h2>Tools &amp; Technologies</h2>
 
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
 
     h2 {
         margin-bottom: 60px;
         text-decoration-color: #22a1f5;
         text-underline-offset: 5px;
         text-decoration-line: underline;
         text-decoration-style: wavy;
         width: 100%;
         text-align: center;
     }
 
     .single-tool {
         width: 200px;
         height: 200px;
         margin: 10px;
         display: flex;
         justify-content: center;
         align-items: center;
 
         img {
             width: 50%;
             height: 50%;
         }
     }
 
     .tool-row {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
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