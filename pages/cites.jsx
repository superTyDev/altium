import * as React from "react";

/**
 * The cites function defines the component that makes up the cites page
 * This component needs to be attached to the /cites path in /src/components/router.jsx
 */

export default function Cites() {
  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1>Cites</h1>
        <p>A awesome site cannot be made with a lot of help.</p>
        <p>
          Not true citations, but this site was made possible by React, Vite,
          Babel, Glitch, StackOverflow, VSCode, Git, and many more.
        </p>
        <ul>
          <li>
            Rocket 3D file,{" "}
            <a href="https://nasa3d.arc.nasa.gov/models">NASA 3D Resources</a>
          </li>
          <li>
            Space Panorama, <a href="https://www.hdri-hub.com">HDRI Hub</a>
          </li>
          <li>
            NASA Mobile Launcher,{" "}
            <a href="https://www.nasa.gov/exploration/systems/sls/MLmoves.html">
              NASA Mobile Launcher
            </a>
          </li>
          <li>
            Atmosphere Photograph,{" "}
            <a href="https://www.livescience.com/64825-why-earth-has-an-atmosphere.html"></a>
          </li>
        </ul>
        <h2>Legal</h2>
        <h3>License</h3>
        <p>
          Licensed under the Apache License, Version 2.0 (the "License"); you
          may not use the files except in compliance with the License. You may
          obtain a copy of the License at
          <br />
          <a href="http://www.apache.org/licenses/LICENSE-2.0">
            http://www.apache.org/licenses/LICENSE-2.0
          </a>
        </p>
        <p>
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
          implied. See the License for the specific language governing
          permissions and limitations under the License.
        </p>

        <h3>Terms of Use/Privacy Policy</h3>
        <p>
          Please review the following terms carefully. By accessing or using the
          Service, you signify your agreement to these Terms of Use. If you do
          not agree to be bound by these Terms of Use in their entirety, you may
          not access or use the Service.
        </p>
        <p>
          If you submit the information, we, Altium Aeronautics, may use your
          information. Although the data is encrypted, we are not responsible
          for leaked data. On request, your data will be deleted. Altium
          Aeronautics is not liable for media uploaded by users. You must be at
          least 99 years old to use this service. Be nice.
        </p>
        <p>
          By purchasing a ticket you agree to not sue us no matter what. In the
          event you are severely harmed and need medical attention one can file
          a claim to
          <strong>
            {" "}
            <a href="mailto: notmyproblem@gmail.com">notmyproblem@gmail.com</a>
          </strong>{" "}
          for a complementary gum stick. If you die we get your life insurance.
        </p>
        <p>
          Any person caught being rude or making a public seen between the ages
          of 13 and 98 can and will be thrown into space by security.
        </p>
        <h4>Privacy Policy</h4>

        <p>
          This data protection declaration explains the type, scope and purpose
          of the processing of personal data (hereinafter referred to as "data")
          within our online offer and the websites, functions and content
          associated with it, as well as external online presences, such as our
          social media profile (hereinafter referred to as collectively referred
          to as the "Online Offering"). With regard to the terms used, such as
          "processing" or "person responsible", we refer to the definitions in
          Article 4 of the General Data Protection Regulation (GDPR).
        </p>

        <h4>Types of data processed:</h4>
        <ul>
          <li>Inventory data (eg, names, addresses).</li>
          <li>Contact details (e.g., e-mail, telephone numbers).</li>
          <li>Content data (e.g., text input, photographs, videos).</li>
          <li>
            Usage data (e.g. websites visited, interest in content, access
            times).
          </li>
          <li>
            Meta/communication data (e.g. device information, IP addresses).
          </li>
        </ul>

        <h4>Categories of data subjects</h4>
        <p>
          Visitors and users of the online offer (in the following we refer to
          the persons concerned collectively as "users").
        </p>

        <h4>purpose of processing</h4>
        <ul>
          <li>Provision of the online offer, its functions and content.</li>
          <li>Answering contact requests and communicating with users.</li>
          <li>Safety measures.</li>
          <li>Reach measurement/marketing</li>
        </ul>

        <h4>Terms used</h4>
        <p>
          "Personal data" means any information relating to an identified or
          identifiable natural person (hereinafter "data subject"); an
          identifiable natural person is one who can be identified directly or
          indirectly, in particular by means of assignment to an identifier such
          as a name, an identification number, location data, an online
          identifier (e.g. cookie) or one or more special features, are an
          expression of the physical, physiological, genetic, mental, economic,
          cultural or social identity of that natural person.
        </p>

        <p>
          "Processing" is any process or series of processes carried out with or
          without the aid of automated processes in connection with personal
          data. The term is broad and encompasses practically every handling of
          data.
        </p>

        <p>
          "Pseudonymization" means the processing of personal data in such a way
          that the personal data can no longer be assigned to a specific data
          subject without the use of additional information, provided that this
          additional information is stored separately and is subject to
          technical and organizational measures that ensure that the personal
          data not assigned to an identified or identifiable natural person.
        </p>

        <p>
          "Profiling" any type of automated processing of personal data,
          consisting in using this personal data to evaluate certain personal
          aspects relating to a natural person, in particular aspects related to
          work performance, economic situation, health, personal Analyze or
          predict that natural person’s preferences, interests, reliability,
          behavior, whereabouts or relocation.
        </p>

        <p>
          The "person responsible" is the natural or legal person, authority,
          institution or other body that alone or jointly with others decides on
          the purposes and means of processing personal data.
        </p>

        <p>
          "Processor" means a natural or legal person, public authority, agency
          or other body that processes personal data on behalf of the
          controller.
        </p>

        <h4>Relevant legal bases</h4>
        <p>
          In accordance with Art. 13 GDPR, we will inform you of the legal basis
          for our data processing. If the legal basis is not mentioned in the
          data protection declaration, the following applies: The legal basis
          for obtaining consent is Art. 6 (1) lit. a and Art Answering inquiries
          is Article 6(1)(b) GDPR, the legal basis for processing to fulfill our
          legal obligations is Article 6(1)(c) GDPR, and the legal basis for
          processing to safeguard our legitimate interests is Article 6(1)(c)
          GDPR 6 Paragraph 1 lit. f GDPR. In the case,
        </p>

        <h4>Safety measures</h4>
        <p>
          In accordance with Art. 32 GDPR, we take appropriate technical
          measures, taking into account the state of the art, the implementation
          costs and the type, scope, circumstances and purposes of the
          processing as well as the different probability of occurrence and
          severity of the risk for the rights and freedoms of natural persons
          and organizational measures to ensure a level of protection
          appropriate to the risk.
        </p>

        <p>
          The measures include, in particular, securing the confidentiality,
          integrity and availability of data by controlling physical access to
          the data, as well as access, input, transfer, securing availability
          and their separation. Furthermore, we have set up procedures that
          ensure the exercise of data subject rights, deletion of data and
          reaction to data threats. Furthermore, we already take the protection
          of personal data into account during the development or selection of
          hardware, software and processes, in accordance with the principle of
          data protection through technology design and through data
          protection-friendly default settings (Article 25 GDPR).
        </p>

        <h4>Cooperation with processors and third parties</h4>
        <p>
          If, as part of our processing, we disclose data to other people and
          companies (contract processors or third parties), transmit it to them
          or otherwise grant them access to the data, this is only done on the
          basis of legal permission (e.g. if the data is transmitted to third
          parties, as to payment service providers, pursuant to Art. 6 Para. 1
          lit. b GDPR is required for the fulfillment of the contract), you have
          consented, a legal obligation provides for this or on the basis of our
          legitimate interests (e.g. when using agents, web hosts, etc.).
        </p>

        <p>
          If we commission third parties to process data on the basis of a
          so-called "order processing contract", this is done on the basis of
          Art. 28 GDPR.
        </p>

        <h4>Transfers to third countries</h4>
        <p>
          If we process data in a third country (i.e. outside the European Union
          (EU) or the European Economic Area (EEA)) or this happens as part of
          the use of third-party services or disclosure or transmission of data
          to third parties, this only takes place if it is to fulfill our
          (pre)contractual obligations, on the basis of your consent, on the
          basis of a legal obligation or on the basis of our legitimate
          interests. Subject to legal or contractual permissions, we only
          process or have the data processed in a third country if the special
          requirements of Art. 44 et seq. GDPR are met. This means that the
          processing takes place, for example, on the basis of special
          guarantees, such as the officially recognized determination of a data
          protection level corresponding to that of the EU (e.g
        </p>

        <h4>Rights of data subjects</h4>
        <p>
          You have the right to request confirmation as to whether the data in
          question is being processed and to request information about this data
          as well as further information and a copy of the data in accordance
          with Art. 15 GDPR.
        </p>

        <p>
          You have accordingly. Art. 16 DSGVO the right to request the
          completion of the data concerning you or the correction of incorrect
          data concerning you.
        </p>

        <p>
          In accordance with Art. 17 GDPR, you have the right to demand that the
          data in question be deleted immediately, or alternatively, in
          accordance with Art. 18 GDPR, to demand a restriction of the
          processing of the data.
        </p>

        <p>
          You have the right to request that you receive the data that you have
          provided to us in accordance with Art. 20 GDPR and to request that it
          be transmitted to other responsible parties.
        </p>

        <p>
          You also have the right, in accordance with Article 77 GDPR, to lodge
          a complaint with the competent supervisory authority.
        </p>

        <h4>right of withdrawal</h4>
        <p>
          You have the right to revoke your consent in accordance with Article 7
          (3) GDPR with effect for the future
        </p>

        <h4>Right to object</h4>
        <p>
          You can object to the future processing of data relating to you at any
          time in accordance with Art. 21 GDPR. The objection can be made in
          particular against processing for direct advertising purposes.
        </p>

        <h4>Cookies and the right to object to direct advertising</h4>
        <p>
          "Cookies" are small files that are stored on users' computers.
          Different information can be stored within the cookies. A cookie is
          primarily used to store information about a user (or the device on
          which the cookie is stored) during or after their visit to an online
          offer. Temporary cookies, or "session cookies" or "transient cookies",
          are cookies that are deleted after a user leaves an online offer and
          closes his browser. In such a cookie, for example, the content of a
          shopping cart in an online shop or a login status can be saved.
          "Permanent" or "persistent" refers to cookies that remain stored even
          after the browser is closed. For example, the login status can be
          saved if users visit it after several days. The interests of the users
          can also be stored in such a cookie, which are used for range
          measurement or marketing purposes. "Third-party cookies" are cookies
          that are offered by providers other than the person responsible for
          operating the online offer (otherwise, if they are only their cookies,
          we speak of "first-party cookies").
        </p>

        <p>
          We can use temporary and permanent cookies and explain this in our
          data protection declaration.
        </p>

        <p>
          If users do not want cookies to be stored on their computer, they are
          asked to deactivate the corresponding option in their browser's system
          settings. Saved cookies can be deleted in the system settings of the
          browser. The exclusion of cookies can lead to functional restrictions
          of this online offer.
        </p>

        <p>
          A general objection to the use of cookies for online marketing
          purposes can be raised for a large number of services, especially in
          the case of tracking, via the US website
          http://www.aboutads.info/choices/ or the EU website
          http://www.youronlinechoices.com/be explained. Furthermore, the
          storage of cookies can be achieved by switching them off in the
          browser settings. Please note that in this case not all functions of
          this online offer can be used.
        </p>

        <h4>deletion of data</h4>
        <p>
          The data processed by us will be deleted or their processing
          restricted in accordance with Art. 17 and 18 GDPR. Unless expressly
          stated in this data protection declaration, the data stored by us will
          be deleted as soon as they are no longer required for their intended
          purpose and the deletion does not conflict with any statutory storage
          requirements. If the data is not deleted because it is required for
          other and legally permissible purposes, its processing will be
          restricted. This means that the data will be blocked and not processed
          for other purposes. This applies, for example, to data that must be
          retained for commercial or tax reasons.
        </p>

        <p>
          According to legal requirements in Germany, storage takes place in
          particular for 10 years in accordance with §§ 147 Paragraph 1 AO, 257
          Paragraph 1 No. 1 and 4, Paragraph 4 HGB (books, records, management
          reports, accounting documents, trading books, relevant for taxation
          documents, etc.) and 6 years in accordance with Section 257 Paragraph
          1 Nos. 2 and 3, Paragraph 4 HGB (commercial letters).
        </p>

        <p>
          According to legal requirements in Austria, storage takes place in
          particular for 7 years in accordance with § 132 Para. 1 BAO
          (accounting documents, receipts/invoices, accounts, receipts, business
          papers, list of income and expenses, etc.), for 22 years in connection
          with properties and for 10 years for documents related to
          electronically supplied services, telecommunications, radio and
          television services supplied to non-businesses in EU Member States and
          for which the Mini One Stop Shop (MOSS) is used.
        </p>

        <h4>contact</h4>
        <p>
          When contacting us (e.g. via contact form, e-mail, telephone or via
          social media), the information provided by the user is used to process
          the contact request and to process it in accordance with Article 6 (1)
          b. (in the context of contractual/pre-contractual relationships), Art.
          6 Paragraph 1 lit. f. (other inquiries) GDPR processed get saved.
        </p>

        <p>
          We delete the requests if they are no longer necessary. We review
          necessity every two years; Furthermore, the statutory archiving
          obligations apply.
        </p>

        <h4>hosting and email delivery</h4>
        <p>
          The hosting services we use serve to provide the following services:
          infrastructure and platform services, computing capacity, storage
          space and database services, e-mail dispatch, security services and
          technical maintenance services that we use for the purpose of
          operating this online offer.
        </p>

        <p>
          In doing so, we or our hosting provider process inventory data,
          contact data, content data, contract data, usage data, meta and
          communication data from customers, interested parties and visitors to
          this online offer on the basis of our legitimate interests in making
          this online offer available efficiently and securely in accordance
          with Art. 6 Para. 1 lit. f GDPR in conjunction with Art. 28 GDPR
          (conclusion of order processing contract).
        </p>

        <h4>Collection of access data and log files</h4>
        <p>
          We, or our hosting provider, collect data about every access to the
          server on which this service is located (so-called server log files)
          on the basis of our legitimate interests within the meaning of Article
          6 Paragraph 1 lit. The access data includes the name of the accessed
          website, file, date and time of access, amount of data transferred,
          notification of successful access, browser type and version, the
          user's operating system, referrer URL (the previously visited page),
          IP address and the requesting provider .
        </p>

        <p>
          Log file information is stored for a maximum of 7 days for security
          reasons (e.g. to investigate misuse or fraud) and then deleted. Data
          whose further storage is required for evidence purposes are excluded
          from deletion until the respective incident has been finally
          clarified.
        </p>

        <h4>Online presence in social media</h4>
        <p>
          We maintain online presences within social networks and platforms in
          order to be able to communicate with the customers, interested parties
          and users active there and to be able to inform them about our
          services there.
        </p>

        <p>
          We would like to point out that user data can be processed outside of
          the European Union. This can result in risks for the user because, for
          example, the enforcement of the user's rights could be made more
          difficult. With regard to US providers who are certified under the
          Privacy Shield, we would like to point out that they undertake to
          comply with the data protection standards of the EU.
        </p>

        <p>
          Furthermore, user data is usually processed for market research and
          advertising purposes. For example, usage profiles can be created from
          usage behavior and the resulting interests of users. The usage
          profiles can in turn be used, for example, to place advertisements
          inside and outside the platforms that presumably correspond to the
          interests of the user. For these purposes, cookies are usually stored
          on the users' computers, in which the usage behavior and the interests
          of the users are stored. Furthermore, data can also be stored in the
          usage profiles independently of the devices used by the users
          (especially if the users are members of the respective platforms and
          are logged in to them).
        </p>

        <p>
          The processing of the personal data of the users takes place on the
          basis of our legitimate interests in effective information of the
          users and communication with the users in accordance with Article 6
          Paragraph 1 lit. f GDPR. If the users are asked by the respective
          providers to consent to the data processing (i.e. declare their
          consent, for example by ticking a check box or confirming a button),
          the legal basis for the processing is Article 6 Paragraph 1 Letter a.,
          Article 7 GDPR.
        </p>

        <p>
          For a detailed description of the respective processing and the
          possibility of objection (opt-out), we refer to the following linked
          information from the providers.
        </p>

        <p>
          Also in the case of requests for information and the assertion of user
          rights, we would like to point out that these can be asserted most
          effectively with the providers. Only the providers have access to the
          data of the users and can take appropriate measures and provide
          information directly. If you still need help, you can contact us.
        </p>
        <ul>
          <li>
            Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
            Harbour, Dublin 2, Ireland) - Privacy Policy:
            https://www.facebook.com/about/privacy/ , Opt-Out: https://www.
            facebook.com/settings?tab=ads and http://www.youronlinechoices.com ,
            Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
            .
          </li>
          <li>
            Google/ YouTube (Google LLC, 1600 Amphitheater Parkway, Mountain
            View, CA 94043, USA) ? Privacy Policy:
            https://policies.google.com/privacy , Opt-Out:
            https://adssettings.google.com/authenticated , Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
            .
          </li>
          <li>
            Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025,
            USA) ? Privacy Policy/ Opt-Out:
            http://instagram.com/about/legal/privacy/ .
          </li>
          <li>
            Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco,
            CA 94103, USA) - Privacy Policy: https://twitter.com/de/privacy ,
            Opt-Out: https://twitter.com/personalization , Privacy
            Shield:https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active
            .
          </li>
          <li>
            Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301,
            USA) ? Privacy Policy/ Opt-Out:
            https://about.pinterest.com/de/privacy-policy .
          </li>
          <li>
            LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2,
            Ireland) - Privacy Policy
            https://www.linkedin.com/legal/privacy-policy , Opt-Out:
            https://www.linkedin.com/psettings/guest
            -controls/retargeting-opt-out , Privacy Shield:
            https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active
            .
          </li>
          <li>
            Xing (XING AG, Dammtorstrasse 29-32, 20354 Hamburg, Germany) -
            Privacy Policy/
            Opt-Out:https://privacy.xing.com/de/datenschutzerklaerung .
          </li>
          <li>
            Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United
            Kingdom) - Privacy Policy/ Opt-Out: https://wakelet.com/privacy.html
            .
          </li>
          <li>
            Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115
            Berlin, Germany) - Privacy Policy/ Opt-Out:
            https://soundcloud.com/pages/privacy .
          </li>
        </ul>

        <h4>Integration of third-party services and content</h4>
        <p>
          We use content or service offers from third-party providers within our
          online offer on the basis of our legitimate interests (ie interest in
          the analysis, optimization and economic operation of our online offer
          within the meaning of Art. 6 Para. 1 lit Integrate services such as
          videos or fonts (hereinafter uniformly referred to as "content?").
        </p>

        <p>
          This always presupposes that the third-party providers of this content
          perceive the IP address of the user, since without the IP address they
          could not send the content to their browser. The IP address is
          therefore required for the display of this content. We endeavor to
          only use content whose respective providers only use the IP address to
          deliver the content. Third-party providers can also use so-called
          pixel tags (invisible graphics, also known as "web beacons") for
          statistical or marketing purposes. The "pixel tags" can be used to
          evaluate information such as visitor traffic on the pages of this
          website.
        </p>

        <h4>Youtube</h4>
        <p>
          We embed videos from the "YouTube" platform provided by Google LLC,
          1600 Amphitheater Parkway, Mountain View, CA 94043, USA. Privacy
          policy: https://www.google.com/policies/privacy/ , Opt-Out: https
          ://adssettings.google.com/authenticated .
        </p>

        <h4>Google Fonts</h4>
        <p>
          We integrate the fonts ("Google Fonts") provided by Google LLC, 1600
          Amphitheater Parkway, Mountain View, CA 94043, USA. Privacy Policy:
          https://www.google.com/policies/privacy/ , Opt-Out:
          https://adssettings.google.com/authenticated .
        </p>

        <h4>Google ReCaptcha</h4>
        <p>
          We integrate the function for detecting bots, e.g. when making entries
          in online forms ("ReCaptcha") from the provider Google LLC, 1600
          Amphitheater Parkway, Mountain View, CA 94043, USA. Privacy Policy:
          https://www.google.com/policies/privacy/ , Opt-Out:
          https://adssettings.google.com/authenticated .
        </p>

        <h4>Google Maps</h4>
        <p>
          We integrate the maps of the "Google Maps" service provided by Google
          LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043, USA. The data
          processed may include, in particular, IP addresses and location data
          of the users, but not without their consent (usually carried out as
          part of the settings on your mobile devices).The data may be processed
          in the USA.Privacy Policy: https://www.google.com/policies/privacy/ ,
          Opt-Out: https://adssettings .google.com/authenticated .
        </p>
      </div>
    </>
  );
}
