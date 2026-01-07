import React from "react";
import Page from "../components/Page";
import * as C from "../constants";

export default function PrivacyPolicy() {
  return (
    <Page navHrefPrefix="/">
      <section className="policy privacy-policy">
        <h1>Accessibility Statement for Stance Pilates</h1>
        <div>
          <p>
            Stance Pilates is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone and applying the relevant accessibility
            standards.
          </p>
        </div>

        <div>
          <h2>Conformance Status</h2>
          <p>
            The{" "}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener"
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>
            defines requirements for designers and developers to improve
            accessibility for people with disabilities. Stance Pilates targets
            conformance with <strong>WCAG 2.1 Level AA</strong>.
          </p>
        </div>

        <div>
          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of Stance Pilates.
            Please let us know if you encounter accessibility barriers:
          </p>

          <ul>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:info@stancepilates.com">info@stancepilates.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+17026082065">702-608-2065</a>
            </li>
            <li>
              <strong>Address:</strong> 6675 S Tenaya Way #200, Las Vegas, NV
              89113
            </li>
          </ul>

          <p>We try to respond to feedback within 5 business days.</p>
        </div>
      </section>
    </Page>
  );
}
