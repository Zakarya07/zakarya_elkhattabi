import ContactIconBox from "../ContactIconBox";
import { FaMobileRetro } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="contact-info-container flex flex-col gap-6 lg:my-10 lg:flex-row lg:justify-between">
      {/*  Localisation */}
      <ContactIconBox title="Localisation" value="Paris, France">
      <FaMapLocationDot/>
      </ContactIconBox>

      {/* Email */}
      <ContactIconBox title="Mail" value="zakarya.elkhattabi@gmail.com">
        <FaEnvelopeOpenText/>
      </ContactIconBox>

      {/* Phone */}
      <ContactIconBox title="Téléphone portable" value="07 88 09 26 70">
      <FaMobileRetro/>
      </ContactIconBox>

    </div>
  );
};

export default ContactInfo;