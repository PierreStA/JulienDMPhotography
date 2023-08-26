import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        The Personal Data Protection Act (PDPA) is the data protection law in
        Thailand, which governs the collection, use, disclosure, and processing
        of personal data. It aims to protect the rights and privacy of
        individuals while ensuring that organizations handle personal data
        responsibly. Here are some more details about the key requirements of
        the PDPA:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Consent: Organizations must obtain explicit consent from individuals
          before collecting, using, or disclosing their personal data. Consent
          must be freely given, informed, specific, and revocable.
        </li>
        <li>
          Purpose Specification: Personal data can only be collected for
          specified and legitimate purposes. Organizations must inform
          individuals about the purposes of data collection and ensure that data
          is not used for other purposes without appropriate consent.
        </li>
        <li>
          Rights of Individuals: The PDPA grants individuals rights similar to
          those under the GDPR, including the right to access their data,
          rectify inaccuracies, erase data, restrict processing, data
          portability, and object to processing.
        </li>
        <li>
          Transparency: Organizations must provide clear and easily
          understandable information about their data processing practices. This
          is typically achieved through a privacy policy or notices provided at
          the point of data collection.
        </li>
        <li>
          Data Security: Organizations are required to implement appropriate
          technical and organizational measures to safeguard personal data
          against unauthorized access, disclosure, alteration, or destruction.
        </li>
        <li>
          Data Retention: Personal data should only be retained for as long as
          necessary for the purposes for which it was collected. Organizations
          should establish clear retention periods and delete data when it is no
          longer needed.
        </li>
        <li>
          Cross-Border Data Transfer: Transfers of personal data outside of
          Thailand are subject to certain restrictions. Organizations must
          ensure that the recipient country provides an adequate level of data
          protection or implement appropriate safeguards.
        </li>
        <li>
          Data Breach Notification: Organizations are required to report data
          breaches to the Personal Data Protection Committee (PDPC) and affected
          individuals if a breach is likely to result in a risk to the rights
          and freedoms of individuals.
        </li>
        <li>
          Responsibility and Accountability: Organizations are accountable for
          compliance with the PDPA. This includes maintaining documentation of
          data processing activities, conducting privacy impact assessments, and
          training staff on data protection practices.
        </li>
        <li>
          Data Protection Officer (DPO): Some organizations may be required to
          appoint a DPO to oversee data protection matters within the
          organization.
        </li>
        <li>
          Marketing Communications: Organizations must obtain consent from
          individuals before sending marketing communications via electronic
          means (e.g., email, SMS). Unsolicited marketing communications are
          subject to restrictions.
        </li>
        <li>
          Sensitive Personal Data: The PDPA categorizes certain types of
          personal data (e.g., health, religious beliefs) as sensitive. Special
          requirements apply to the processing of sensitive data.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
