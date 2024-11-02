import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Terms({  settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
      Terms and Conditions
      </h1>
    

      <div className="prose mx-auto mt-14 text-left dark:prose-invert">
    <p><strong>Last updated: 20-October-2024</strong></p>
    <p>We kindly request that you carefully review the following terms and conditions before utilizing our services.</p>

    <h2>Interpretation and Definitions</h2>

    <h3>Interpretation</h3>
    <p>The capitalized words used in this document have specific meanings defined under the following conditions. These definitions hold the same meaning whether in singular or plural form.</p>

    <h3>Definitions</h3>
    <p>For the purpose of these Terms and Conditions:</p>
    <ul>
        <li><strong>Affiliate</strong>: Refers to any entity that controls, is controlled by, or is under common control with another party. &quot;Control&quot; denotes the ownership of 50% or more of shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.</li>
        <li><strong>Country</strong>: Refers to Delhi, India.</li>
        <li><strong>Company</strong> (referred to as &quot;the Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot; in this Agreement): Refers to Fast Video Save.</li>
        <li><strong>Device</strong>: Any electronic device capable of accessing our services, such as a computer, cellphone, or tablet.</li>
        <li><strong>Service</strong>: Refers to our website, Fast Video Save.</li>
        <li><strong>Terms and Conditions</strong> (also referred to as &quot;Terms&quot;): These terms and conditions constitute the entire agreement between You and the Company regarding the use of our services.</li>
        <li><strong>Third-party Social Media Service</strong>: Any services or content (including data, information, products, or services) provided by a third party that may be displayed, included, or made available through our Service.</li>
        <li><strong>You</strong>: The individual accessing or using our Service, or the company or other legal entity on whose behalf such individual is accessing or using our Service.</li>
    </ul>

    <h2>Acknowledgment</h2>
    <p>These Terms and Conditions govern the use of our services and form the agreement between You and the Company. They outline the rights and obligations of all users in relation to using our Service.</p>

    <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use the Service.</p>

    <p>By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these Terms, You may not access the Service.</p>

    <p>You represent that you are over the age of 18. The Company does not permit individuals under 18 to use the Service.</p>

    <p>Your access to and use of the Service is also conditioned on your acceptance of and compliance with the Company&apos;s Privacy Policy. Our Privacy Policy describes our policies on the collection, use, and disclosure of your information. Please read our Privacy Policy carefully before using our Service.</p>

    <h2>Links to Other Websites</h2>
    <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>

    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through third-party websites.</p>

    <p>We strongly recommend reviewing the terms and privacy policies of any third-party websites or services you visit.</p>

    <h2>Termination</h2>
    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.</p>

    <p>Upon termination, Your right to use the Service will cease immediately.</p>

    <h2>Limitation of Liability</h2>
    <p>Notwithstanding any damages that You might incur, the Company&apos;s entire liability and any of its suppliers&apos; liability under any provision of these Terms shall be limited to the amount You actually paid through the Service or ₹5000 INR if You haven&apos;t purchased anything through the Service.</p>

    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages (including, but not limited to, loss of profits, loss of data, business interruption, personal injury, or loss of privacy) arising out of or related to the use of or inability to use the Service or third-party software/hardware used with the Service.</p>

    <h2>Disclaimer</h2>
    <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE,&quot; without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

    <h2>Governing Law</h2>
    <p>The laws of Delhi, India, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>

    <h2>Dispute Resolution</h2>
    <p>If You have any concern or dispute regarding the Service, You agree to first try to resolve the matter informally by contacting Us at <a href="mailto:fastvideosave@gmail.com">fastvideosave@gmail.com</a>.</p>

    <h2>Changes to These Terms and Conditions</h2>
    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days&apos; notice before any new terms take effect. What constitutes a material change will be determined at Our sole discretion.</p>

    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
    <ul>
        <li>By email: <a href="mailto:fastvideosave@gmail.com">fastvideosave@gmail.com</a></li>
    </ul>

      </div>
    </Container>
  );
}

