<template>
    <section class="get-involved" id="getInvolved">
       <!-- JUNIOR DEVELOPERS -->
       <div class="get-involved__column">
         <div class="badge">Get Involved</div>
         <div class="column-title">
           <h3>Junior Developers</h3>
         </div>
         <div class="column-price">
           <p>
             <strong> £0</strong>
             <span> / membership</span>
           </p>
         </div>
         <div class="column-information">
           <ul>
             <li><strong>Request</strong> skill appropriate reviews &amp; feedback</li>
             <li><strong>Meet </strong> new people and practice public speaking</li>
             <li><strong>Participate</strong> in workshops &amp; hackathon events</li>
             <li><strong>Get familiar</strong> with tools like Jira </li>
           </ul>
         </div>
         <div class="column-button">
           <a href="/member-application-form">Become a member</a>
         </div>
       </div>
 
       <!-- SKATEBOY IMAGE -->
       <div class="get-involved__column skateboy">
         <img src="../../assets/images/skateboy.png" alt="a skateboy in an orange coloured tshirt enjoying his ride">
         <br>
       </div>
 
       <!-- SENIOR DEVELOPERS AND MENTORS -->
       <div class="get-involved__column">
         <div class="badge">Get Involved</div>
         <div class="column-title">
           <h3>Mentors &amp; Team Leads</h3>
         </div>
         <div class="column-price">
           <p>
             <strong> £0</strong>
             <span> / membership</span>
           </p>
         </div>
         <div class="column-information">
           <ul>
             <li>
               <strong>Help</strong> others with skill appropriate feedback
             </li>
             <li>
               <strong>Practice</strong> planning and organising projects
             </li>
             <li><strong>Lead</strong> monthly workshops &amp; hackathon events</li>
             <li><strong>Introduce</strong> use of tools like Jira </li>
           </ul>
         </div>
         <div class="column-button">
           <a href="/mentor-application-form">Become a mentor</a>
         </div>
       </div>
     </section>
 </template>
 
 
 <script>
 export default {
     // eslint-disable-next-line
     name: 'GetInvolved'
 }
 </script>
 
 
 <style lang="scss" scoped>

  .skateboy {
    display: flex;
    align-items: center;
    justify-content: center;

      img {
        width: 250px;
        height: 450px;
      }

        @media (max-width: 600px) {
          img {
              width: 80%;
              height: unset;
          }
        }
  }
     .get-involved {
         display: flex;
         justify-content: space-evenly;
         align-items: center;
         min-height: 900px;
         width: 100%;
         flex-wrap: wrap;
         min-height: 900px;
         background: #f5f4f4;
     }
 
     .get-involved__column {
         max-width: 400px;
     }
 
 
     .badge {
         background: #ffc22b;
         border-radius: 6px;
         font-style: normal;
         font-weight: bold;
         font-size: 14px;
         line-height: 25px;
         letter-spacing: 0.2em;
         color: var(--dark);
         width: 150px;
         height: 24px;
         display: flex;
         justify-content: center;
         position: relative;
         left: 220px;
         margin-bottom: 30px;
     }
 
     .column-title h3 {
         font-style: normal;
         font-weight: 600;
         font-size: 17px;
         line-height: 25px;
         letter-spacing: 0.2em;
         color: #21243d;
         text-transform: uppercase;
         text-align: center;
         margin-bottom: 40px;
     }
 
 
 .column-price {
     display: flex;
     justify-content: center;
     align-items: center;
 
     strong {
         font-style: normal;
         font-weight: normal;
         font-size: 44px;
         line-height: 25px;
         letter-spacing: 0.04em;
         color: #21243d;
     }
 
     span {
         font-style: normal;
         font-weight: normal;
         font-size: 22px;
         line-height: 25px;
         letter-spacing: 0.04em;
         color: #21243d;
     }
 }
 
 .column-information {
     display: flex;
     justify-content: center;
     align-items: center;
 
     li {
         list-style: none;
         margin: 10px;
         text-align: center;
     }
 }
 
 .column-button {
     display: flex;
     justify-content: center;
     align-items: center;
 
     a {
        background: #ff3e3e;
        border-radius: 10px;
        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        padding: 10px 20%;
        transition: 300ms all ease-in-out;
     }
 }
 
 @media (max-width: 980px) {
     .get-involved__column {
         margin-top: 50px;
         margin-bottom: 50px;
 
         img {
             width: 80%;
         }
     }
 
     .badge {
         position: relative;
         left: 20px;
     }
 
     .column-button {
         a {
          width: 80%   
         }
     }
 
     .column-information {
         ul {
             margin-block-start: 0;
             padding-inline-start: 0;
         }
     }
 
     
 }
 </style>