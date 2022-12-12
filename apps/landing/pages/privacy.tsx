import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Text } from "@splashsaver/ui";
import { Seo } from "../components/Seo";
import { NextPage } from "next";
import { BiTimeFive } from "react-icons/bi";

const Privacy: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Privacy Policy" description="" />
      <Header title="Privacy Policy" />
      <div className="mb-8 md:mb-16 flex items-center space-x-2 text-gray-400">
      <BiTimeFive /> 
      <Text>December 12, 2022</Text>
      </div>

      <div className="flex flex-col flex-1 h-screen items-center justify-center">
          <div className="bg-slate-100 rounded-lg px-2 p-10 pl-10 pr-10">
            <Text className="text-lg text-gray-400 leading-relaxed">A privacy policy is a statement or a legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data. It fulfills a legal requirement to protect a customer or client's privacy.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed">Here at Splashsaver, we are committed to protecting the privacy of our customers and clients. We collect and use personal information to provide you with the products and services you have requested, to improve our services, and to communicate with you about our products, services, and promotions.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed">We collect personal information such as your name, email address, and IP address when you register for an account or place an order with us. We also collect payment information when you make a purchase.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed">We may use your personal information to:</Text>
            <ul class="text-lg text-gray-400 leading-relaxed list-disc list-inside">
              <li>Provide you with the products and services you have requested</li>
            </ul>
            <ul class="text-lg text-gray-400 leading-relaxed list-disc list-inside">
              <li>Respond to your inquiries and contact you about your account</li>
            </ul>
            <ul class="text-lg text-gray-400 leading-relaxed list-disc list-inside">
              <li>Improve our products and services</li>
            </ul>
            <ul class="text-lg text-gray-400 leading-relaxed list-disc list-inside">
              <li>Communicate with you about our products, services, and promotions</li>
            </ul>
            <ul class="text-lg text-gray-400 leading-relaxed list-disc list-inside">
              <li>Process your transactions and maintain your account</li>
            </ul>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We may share your personal information with third parties who provide services on our behalf, such as payment processing. We require these third parties to maintain the confidentiality of your personal information and to use it only for the purposes for which it was disclosed.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We also may disclose your personal information as required by law, such as in response to a court order or subpoena, or in response to a law enforcement agency's request.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We are committed to protecting the security of your personal information. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure. For example, we store the personal information you provide on computer servers with limited access that are located in controlled facilities.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We retain your personal information for as long as your account is active or as needed to provide you with our products and services. We may also retain your personal information for longer periods as required by law, such as for tax and accounting purposes.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We provide you with the ability to access and update your personal information through your account settings. You may also contact us to access or update your personal information.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">If you have any questions or concerns about our privacy policy or the use of your personal information, please contact us at help@splashsaver.com.</Text>
          </div>
        </div>
    </Container>
  );
};

export default Privacy;
