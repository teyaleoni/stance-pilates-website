import React from "react";
import Page from "../components/Page";
import * as C from "../constants";

export default function PrivacyPolicy() {
  return (
    <Page navHrefPrefix="/">
      <section className="policy privacy-policy">
        <h1>Privacy Policy</h1>
        <div>Last Updated: September 2024</div>

        <div>
          At Stance Pilates, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when you use our website and services.
        </div>

        <ol>
          <li>
            <div>Information We Collect</div>
            <div>
              We may collect the following types of personal information:
              <ul>
                <li>Contact Information: Name, email address, phone number.</li>
                <li>
                  Health Information: Information you voluntarily provide
                  related to your physical health for personalized Pilates
                  sessions.
                </li>
                <li>
                  Payment Information: Credit card or payment details when
                  purchasing classes or services.
                </li>
                <li>
                  Website Usage Data: IP address, browser type, device
                  information, and browsing activities through cookies or
                  similar tracking technologies, including Google Analytics.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>How We Use Your Information</div>
            <div>
              We use your personal information to:
              <ul>
                <li>
                  Provide and personalize our services, including Pilates
                  sessions tailored to your needs.
                </li>

                <li>
                  Schedule your appointments using Jane App, our third-party
                  booking platform.
                </li>

                <li>Process payments for services and products.</li>
                <li>
                  Communicate with you about bookings, services, and promotional
                  offers.
                </li>

                <li>
                  Analyze how visitors use our website through Google Analytics
                  to improve site performance and user experience.
                </li>

                <li>
                  Engage with users on social media platforms like Instagram.
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div>Sharing of Information</div>
            <div>
              We do not sell your personal information. However, we may share
              your information under the following circumstances:
              <ul>
                <li>
                  Service Providers: We use third-party vendors, such as Jane
                  App, to manage scheduling and appointments. You can review
                  their privacy policy at https://jane.app/legal/privacy-notice.
                </li>
                <li>
                  Google Analytics: We use Google Analytics to track and analyze
                  website traffic. Google may collect data such as IP addresses
                  and usage patterns. You can opt out of Google Analytics
                  tracking by using Google’s opt-out tool.
                </li>
                <li>
                  Social Media Platforms: We use Instagram to engage with
                  clients. Please be aware that if you interact with us through
                  Instagram, your information will be subject to Instagram’s
                  privacy policies, which you can review at
                  https://privacycenter.instagram.com/policy.
                </li>
                <li>
                  Payment Processors: We may share payment data with third-party
                  payment processors to securely process your transactions.
                </li>
                <li>
                  Legal Compliance: We may disclose information to comply with
                  legal obligations or respond to valid legal requests.
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div>Third-Party Websites</div>
            <div>
              Our website may contain links to third-party websites or services,
              including Jane App, Google Analytics, and Instagram. Please note
              that we are not responsible for the privacy practices of these
              external sites. We encourage you to review their privacy policies
              before sharing your personal information with them.
            </div>
          </li>

          <li>
            <div>Cookies and Tracking</div>
            <div>
              Technologies We use cookies and similar tracking technologies,
              including Google Analytics, to improve your browsing experience
              and gather website analytics. You may choose to disable cookies in
              your browser settings, though doing so may affect your site
              experience. You can opt out of Google Analytics as described in
              section 3.
            </div>
          </li>

          <li>
            <div>Data Security</div>
            <div>
              We implement robust security measures, including encryption and
              secure servers, to protect your personal information from
              unauthorized access or disclosure. Jane App and Google Analytics
              also apply stringent security practices to protect the data they
              collect through their platforms.
            </div>
          </li>

          <li>
            <div>Your Rights</div>
            <div>
              You have the right to:
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections or updates to your information.</li>
                <li>
                  Request the deletion of your personal data (subject to any
                  legal or contractual obligations). To exercise these rights,
                  please contact us at {C.EMAIL_ADDRESS}.
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div>User-Generated Content</div>
            <div>
              If you submit or post content such as comments, testimonials, or
              other feedback on our website, social media pages, or through
              direct communication with us, you agree that we may use this
              content for promotional or marketing purposes. This includes, but
              is not limited to, displaying testimonials on our website, sharing
              on social media, or using feedback in marketing materials. By
              submitting this content, you grant us permission to use,
              reproduce, modify, and distribute the content without any
              compensation to you, and you confirm that your submission does not
              violate any third-party rights. If you would prefer not to have
              your comments or testimonials used in this way, please contact us
              at {C.EMAIL_ADDRESS}.
            </div>
          </li>

          <li>
            <div>Fair Information Practices</div>
            <div>
              The Fair Information Practices Principles form the backbone of
              privacy law in the United States, and the concepts they include
              have played a significant role in the development of data
              protection laws around the globe. In order to be in line with Fair
              Information Practices, we will take the following responsive
              action should a data breach occur: We will notify you via email
              within 7 business days. We also agree to the Individual Redress
              Principle, which requires that individuals have the right to
              legally pursue enforceable rights against data collectors and
              processors who fail to adhere to the law. This principle requires
              not only that individuals have enforceable rights against data
              users, but also that individuals have recourse to courts or
              government agencies to investigate and/or prosecute non-compliance
              by data processors.
            </div>
          </li>

          <li>
            <div>California Privacy Rights</div>
            <div>
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA), including the right to
              know what personal information we collect, the right to request
              deletion, and the right to opt out of data sales. Please contact
              us at {C.EMAIL_ADDRESS} to exercise these rights.
            </div>
          </li>

          <li>
            <div>Changes to this Privacy Policy</div>
            <div>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the updated
              policy on our website and revising the “Last Updated” date.
            </div>
          </li>

          <li>
            <div>Contact Us</div>
            <div>
              If you have any questions or concerns about this Privacy Policy or
              your personal data, please contact us at:
            </div>
            <div>Email: {C.EMAIL_ADDRESS}</div>
            <div>Phone: {C.PHONE_NUMBER}</div>
            <div>Website: {C.DOMAIN_NAME}</div>
          </li>
        </ol>
      </section>
    </Page>
  );
}
