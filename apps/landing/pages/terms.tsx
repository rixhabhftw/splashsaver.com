import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Text } from "@splashsaver/ui";
import { Seo } from "../components/Seo";
import { NextPage } from "next";
import { BiTimeFive } from "react-icons/bi";
import privacy from "../lib/privacy.md";

const TOS: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Terms of Service" description="" />
      <Header title="Terms of Service" />
      <div className="mb-8 md:mb-16 flex items-center space-x-2 text-gray-400">
      <BiTimeFive /> 
      <Text>December 12, 2022</Text>
      </div>

      <div className="flex flex-col flex-1 h-screen items-center justify-center">
          <div className="bg-slate-100 rounded-lg px-2 p-10 pl-10 pr-10">
            <Text className="text-lg text-gray-400 leading-relaxed">Welcome to Splashsaver! We are excited to have you on board as a user of our platform. These terms of service ("Terms") govern your access to and use of our website and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.</Text>
            <ul class="text-lg text-gray-400 leading-relaxed list-decimal list-inside">
              <li>Agreement to Terms</li>
            </ul>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you are accessing or using our Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that company or other legal entity to these Terms. In that case, "you" and "your" will refer to that company or other legal entity.</Text>
            <ul class="text-lg text-gray-400 leading-relaxed list-decimal list-inside">
              <li>Changes to Terms and Services</li>
            </ul>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We may change these Terms from time to time. If we make changes, we will post the amended Terms on our website and update the "Last Updated" date above. We may also provide notice of changes to the Terms through the Services or by email. If you do not agree to the amended Terms, you must stop using our Services. We may change, suspend, or discontinue any aspect of our Services at any time, including the availability of any feature, database, or content. We may also impose limits on certain features and services or restrict your access to parts or all of our Services without notice or liability.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We are committed to protecting the security of your personal information. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure. For example, we store the personal information you provide on computer servers with limited access that are located in controlled facilities.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We retain your personal information for as long as your account is active or as needed to provide you with our products and services. We may also retain your personal information for longer periods as required by law, such as for tax and accounting purposes.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">We provide you with the ability to access and update your personal information through your account settings. You may also contact us to access or update your personal information.</Text>
            <Text className="text-lg text-gray-400 leading-relaxed list-desc">If you have any questions or concerns about our privacy policy or the use of your personal information, please contact us at help@splashsaver.com.</Text>
          </div>
        </div>
    </Container>
  );
};

export default TOS;
