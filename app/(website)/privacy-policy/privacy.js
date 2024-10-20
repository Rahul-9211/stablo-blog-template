import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Privacy({  settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Privacy Policy
      </h1>
    

      <div className="prose mx-auto mt-14 text-left dark:prose-invert flex justify-start">
  <p>
    <span>Last updated: 20-October-2024</span>
    <br />
    This Privacy Policy describes how we collect, use, and disclose information about you when you use our service. It also explains your privacy rights and how applicable laws protect you. By using our service, you consent to the collection and use of your information as described in this Privacy Policy.
    <br /><br />
    <strong>Interpretation and Definitions</strong>
    <br />
    <strong>Interpretation</strong><br />
    Capitalized terms have specific meanings outlined under certain conditions. These definitions apply equally whether they are used in singular or plural form.
    <br /><br />
    <strong>Definitions</strong>
    <br />
    For the purpose of this Privacy Policy:
    <ul className="list-disc list-inside">
      <li><strong>Company:</strong> Refers to Fast Video Save, located in Delhi, India. It may also be referred to as “We,” “Us,” or “Our” throughout this Policy.</li>
      <li><strong>Service:</strong> Refers to the Fast Video Save website, accessible at <a href="https://fastvideosave.com/" target="_blank" rel="noopener noreferrer">https://fastvideosave.com/</a>.</li>
      <li><strong>You:</strong> The individual accessing or using our Service, or the legal entity on whose behalf the individual is accessing or using the Service.</li>
      <li><strong>Usage Data:</strong> Data automatically collected when using the Service, including but not limited to, your IP address, browser type and version, pages visited, time spent on pages, and diagnostic data.</li>
      <li><strong>Third-Party Service Providers:</strong> External companies (e.g., Google Analytics) that assist in analyzing and monitoring the performance of our Service.</li>
    </ul>
    <br />
    <strong>Collecting and Using Your Personal Data</strong>
    <br />
    <strong>Types of Data Collected</strong>
    <br />
    <strong>Usage Data:</strong> While we do not collect personal data directly, certain information may be automatically collected during your use of the Service, such as:
    <ul className="list-disc list-inside">
      <li>Your device’s Internet Protocol (IP) address</li>
      <li>Browser type and version</li>
      <li>Pages visited on our Service</li>
      <li>Date and time of visits</li>
      <li>Time spent on pages</li>
      <li>Diagnostic data</li>
    </ul>
    <br />
    <strong>Tracking Technologies and Cookies</strong>
    <br />
    We do not use cookies or similar tracking technologies.
    <br /><br />
    <strong>Use of Your Data</strong>
    <br />
    We may use Usage Data to:
    <ul className="list-disc list-inside">
      <li>Provide and maintain our Service</li>
      <li>Monitor usage and performance of our Service</li>
      <li>Analyze usage to improve performance</li>
    </ul>
    <br />
    <strong>Third-Party Services</strong>
    <br />
    We use Google Analytics to monitor and analyze the use of our Service. This third-party service may collect data based on their privacy policies. For more information, review the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics Privacy Policy</a>.
    <br /><br />
    We also use Google AdSense to display advertisements on our website.
    <br /><br />
    <strong>Security of Your Data</strong>
    <br />
    We prioritize the security of your data. However, please note that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your Usage Data with commercially reasonable safeguards, we cannot guarantee absolute security.
    <br /><br />
    <strong>Links to Other Websites</strong>
    <br />
    Our Service may contain links to external websites not operated by Us. If you click on a third-party link, you will be directed to their site. We encourage you to review the Privacy Policy of every website you visit. We are not responsible for the content or privacy practices of any third-party websites or services.
    <br /><br />
    <strong>Changes to This Privacy Policy</strong>
    <br />
    We may update this Privacy Policy from time to time. Changes will be posted on this page, and we advise you to review this page periodically. Updates take effect when posted.
    <br /><br />
    <strong>Contact Us</strong>
    <br />
    If you have any questions about this Privacy Policy, feel free to contact us via email at <a href="mailto:fastvideosave@gmail.com">fastvideosave@gmail.com</a>.
    <br /><br />
    This Privacy Policy applies to the Fast Video Save website, based in Delhi, India, available at <a href="https://fastvideosave.com/" target="_blank" rel="noopener noreferrer">https://fastvideosave.com/</a>.
  </p>
</div>

    </Container>
  );
}

