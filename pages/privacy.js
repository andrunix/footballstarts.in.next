import Link from 'next/link';
import Layout from '../components/layout.js';

export default function Privacy() {
  return (
    <Layout>
      <div className="privacy">
        <h1>Privacy Policy</h1>

        <p>
          FootballStarts.in is part of XOSO, LLC. This privacy policy explains how we
          use any personal information we collect about you.
        </p>

        <h2>What information do we collect about you?</h2>
        <div>
          We collect information about you when you register with us or place an order for products.
          We also collect information when you voluntarily complete forms, provide feedback and
          participate in events. Website usage information is collected using cookies.          
        </div>

        <h2>How will we use the information about you?</h2>
        <div>
          We collect information about you to process your order, manage your account,
          notify you about security issues and new product features and, if you agree,
          to email you about other products and services we think may be of interest to you.          
        </div>

        <h2>
          We use your information collected from the website to personalize your repeat visits to our website
        </h2>
        <div>
          XOSO will not share your information for marketing purposes with other companies.
          In processing your order, we may send your details to,
          and also use information from credit reference agencies and fraud prevention agencies.          
        </div>

        <h2>Marketing</h2>
        <div>
          <p>
            We would like to send you information about products and services of ours and other
            XOSO companies which may be of interest to you. If you have consented to
            receive marketing, you may opt out at a later date.
          </p>
          <p>
            You have a right at any time to stop us from contacting you for marketing purposes or
            giving your information to other XOSO properties.
          </p>

          <p>
            If you no longer wish to be contacted for marketing purposes, please <a href="hello@footballstarts.in">email</a> us.
          </p>
        </div>
        
        <h2>Access to your information and correction</h2>
        <div>
          <p>
            You have the right to request a copy of the information that we hold about you.
            If you would like a copy of some or all of your personal information, please
            contact us via <a href="mailto:hello@footballstarts.in">email</a>.
          </p>
          <p>
            We may make a small charge for this service.
          </p>
          <p>
            We want to make sure that your personal information is accurate and up to date.
            You may ask us to correct or remove information you think is inaccurate.          
          </p>
        </div>

        <h2>Cookies</h2>
        <div>
          <p>
            Cookies are text files placed on your computer to collect standard internet log information
            and visitor behavior information. This information is used to track visitor use of the
            website and to compile statistical reports on website activity.
          </p>
          <p>
            For further information visit <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer">www.aboutcookies.org</a> or
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">www.allaboutcookies.org</a>.
          </p>
          <p>
            You can set your browser not to accept cookies and the above websites tell you how to remove cookies
            from your browser. However, in a few cases some of our website features may not function as a result.
          </p>
        </div>

        <h2>Linked Websites</h2>
        <div>
          Our website contains links to other websites. This privacy policy only applies to this website so
          when you link to other websites you should read their own privacy policies.
        </div>

        <h2>Childrens Privacy</h2>
        <div>
          We do not knowingly collect personal information from children under the age of 13. If we learn that
          we have personal information on a child under the age of 13, we will delete that information from our systems.
        </div>

        <h2>Changes to our Privacy Policy</h2>
        <div>
          We keep our privacy policy under regular review and we will place any updates on this
           web page. This privacy policy was last updated on November 5, 2021.
        </div>

        <h2>How to Contact Us</h2>
        <div>
          Please contact us by <a href="mailto:hello@footballstarts.in">email</a> if you have
          any questions about our privacy poicy or information we hold about you.
        </div>
      </div>
    </Layout>
  );
}
