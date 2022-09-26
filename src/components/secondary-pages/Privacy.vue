<template>
    <section class="privacy-policy__header">
      <img src="../../assets/logo-with-background.png" alt="Junior Developer Group Logo | A butterfly with a blue and a purple wing">
    </section>

    <section class="privacy-policy__content">
      <div class="column">
        <h2>Privacy Policy for Junior Developer Group</h2>
        <p>
          At Junior Developer Group, accessible from
          <a href="https://junior-developer-group.com/" target="_blank">junior-developer-group.com</a>
          one of our main priorities is the privacy of our visitors. <br>
          This Privacy Policy document contains types of information that is
          collected, used and recorded by Junior Developer Group and is
          written with the help of a generator.
        </p>
        <p>
          If you have additional questions or require more information about
          our Privacy Policy, do not hesitate to contact us trough media
          provided at the bottom of our website.
        </p>
      </div>

      <div class="column">
        <h2>General Data Protection Regulation (GDPR)</h2>
        <p>We are a Data Controller of your information.</p>

        <p>
          Junior Developer Group legal basis for collecting and using the
          personal information described in this Privacy Policy depends on the
          Personal Information we collect and the specific context in which we
          collect the information:
        </p>

        <ul>
          <li>Junior Developer Group needs to perform a contract with you</li>
          <li>You have given Junior Developer Group permission to do so</li>
          <li>
            Processing your personal information is in Junior Developer Group
            legitimate interests
          </li>
          <li>Junior Developer Group needs to comply with the law</li>
        </ul>

        <p>
          Junior Developer Group will retain your personal information only
          for as long as is necessary for the purposes set out in this Privacy
          Policy. We might retain and use your information to the extent
          necessary to enforce our policies and provide better training
          materials for our group members.
        </p>

        <p>
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us via media provided at
          the bottom of our website.
        </p>

        <p>
          In certain circumstances, you have the following data protection
          rights:
        </p>

        <ul>
          <li>
            The right to access, update or to delete the information we have
            collected
          </li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
      </div>

      <div class="column">
        <h2>Log Files</h2>
        <p>
          Junior Developer Group follows a standard procedure of using log
          files. These files log visitors when they visit websites. All
          hosting companies do this and a part of hosting services' analytics.
          The information collected by log files include internet protocol
          (IP) addresses, bcolumnser type, Internet Service Provider (ISP),
          date and time stamp, referring/exit pages, and possibly the number
          of clicks. These are not linked to any information that is
          personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users' movement
          on the website, and gathering demographic information.
        </p>
      </div>

      <div class="column">
        <h2>Cookies and Web Beacons</h2>
        <p>
          Like any other website, Junior Developer Group uses 'cookies'. These
          cookies are used to store information including visitors'
          preferences, and the pages on the website that the visitor accessed
          or visited. The information is used to optimize the users'
          experience by customizing our web page content based on visitors'
          bcolumnser type and/or other information.
        </p>
      </div>



      <div class="column">
        <h2>Third Party Privacy Policies</h2>

        <p>
          Junior Developer Group's Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and
          instructions about how to opt-out of certain options.
        </p>

        <p>
          You can choose to disable cookies through your individual bcolumnser
          options. To know more detailed information about cookie management
          with specific web bcolumnsers, it can be found at the bcolumnsers'
          respective websites.
        </p>
      </div>

      <div class="column">
        <h2>Third Parties | Google Analytics</h2>

        <p>
          Junior Developer Group does not use Google Analytics.
        </p>
      </div>

      <div class="column">
        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>
    </section>

</template>

<script>
export default {
    name: 'Privacy'
}
</script>

<style lang="scss" scoped>
    .privacy-policy__header {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        margin-top: 140px;
        max-width: 80%;

        img {
            width: 280px;
            height: 280px;

            @media (max-width: 350px) {
                width: 150px;
                height: 150px;
                margin-top: 90px;
            }
        }
    }

    .privacy-policy__content{
        margin-bottom: 80px;
        max-width: 80%;
    }

    .column {
        margin-bottom: 30px;
    }

    a {
        color: darkblue;
        text-decoration: underline;
    }
  </style>