import { siteConfig } from '../../config/site';

export const metadata = {
  title: 'Privacy Policy' + siteConfig.title,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div id='__next' className='container'>
      {/* FIXME: replace privacy policy placeholder content */}
      <h2>Privacy Policy</h2>
      <h3>Introduction</h3>
      <p>
        This privacy policy explains how this website collects, uses, and
        protects your information. By using this website, you agree to the terms
        outlined below.
      </p>
      <h3>1. Information Collection</h3>
      <p>
        This website collects data to enhance its services and improve your
        experience. The information gathered includes:
      </p>
      <ul>
        <li>
          <strong>Usage Data:</strong>
          <ul>
            <li>
              This website utilizes Google Analytics to track user behavior,
              including:
              <ul>
                <li>IP addresses</li>
                <li>Browser types</li>
                <li>Pages visited</li>
                <li>Referral sources</li>
                <li>Time spent on the site</li>
              </ul>
            </li>
            <li>
              Importantly, this website does not collect personally identifiable
              information (PII) such as names, email addresses, or phone
              numbers.
            </li>
          </ul>
        </li>
      </ul>
      <h3>2. Use of Data</h3>
      <p>The primary purposes for collecting data are:</p>
      <ul>
        <li>
          <strong>Performance Optimization:</strong>
          <ul>
            <li>
              This website collects aggregated data to understand user
              preferences and enhance our content.
            </li>
            <li>This helps tailor this website to better serve you.</li>
          </ul>
        </li>
      </ul>
      <h3>3. Cookies</h3>
      <ul>
        <li>
          <p>
            <strong>What Are Cookies?</strong>
          </p>
          <ul>
            <li>
              Cookies are small text files stored on your device during your
              visit.
            </li>
            <li>
              They improve your browsing experience by remembering preferences
              and settings.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Managing Cookies:</strong>
          </p>
          <ul>
            <li>
              You can adjust your browser settings to manage cookies. Most
              browsers allow you to accept or reject them.
            </li>
            <li>Note that disabling cookies may impact certain features.</li>
          </ul>
        </li>
      </ul>
      <h3>4. Third-Party Services</h3>
      <ul>
        <li>
          This website uses Google Analytics to track user behavior. Google
          Analytics has its own privacy policy.
        </li>
        <li>
          We are not responsible for the privacy practices of other third-party
          services linked from this website.
        </li>
      </ul>
      <h3>5. Security Measures</h3>
      <ul>
        <li>
          This website takes reasonable steps to protect your data from
          unauthorized access.
        </li>
        <li>However, no internet transmission is 100% secure.</li>
      </ul>
      <h3>6. Children’s Privacy</h3>
      <ul>
        <li>This website is not intended for children under 13.</li>
        <li>
          This website does not intentionally collect personal information from
          children.
        </li>
      </ul>
      <h3>7. Changes to this Policy</h3>
      <ul>
        <li>
          This policy may be updated periodically without prior notice. Check
          back for any changes.
        </li>
      </ul>
    </div>
  );
}
