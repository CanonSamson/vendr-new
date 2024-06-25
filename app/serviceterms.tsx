import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const serviceterms = () => {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{}} className=" flex-1 w-full  ">
        <View
          style={styles.container}
          className="rounded-[14px] mt-2   mx-1 bg-white p-5"
        >

          <Text className=" text-[36px] text-primary font-bold">
            Terms of Service & Use
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Welcome to Vendr, operated by Cameron Chin, Anthony Tescano, and Nick Schnering
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            1. Acceptance of Terms of Use Agreement.
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            By creating a Vendr account or by using any Vendr service, whether through a mobile device,
            mobile application or computer collectively, the “Service” you agree to be bound by  these
            Terms of Use, (our terms disclosed to you if you purchase or have purchased additional
            features, products or services we offer on the Service (collectively, this “Agreement”).
            If you do not accept and agree to be bound by all of the terms of this Agreement you 
            should not use the Service.
          </Text>
          <Text className=" text-[16px] my-4 leading-[24px]">
            We may make changes to this Agreement and to the Service at our own discretion. We may do
            this for a variety of reasons including to reflect changes in our requirements of the law,
            new features or changes in business practices. The most recent version of this Agreement 
            will be posted on the Service under “Settings” and also on www.vendr.site, and its your 
            own responsibility to regularly check for the most recent version. The most recent version
            is the only version that applies, and replaces all former versions. If the changes include
            material changes that affect your rights or obligations, we will notify you in advance of
            the changes by reasonable means, which could include notification through the Service or via
            email. If you continue to use the Service after the changes become effective, then you agree 
            to the revised Agreement. You agree that this Agreement shall supersede any prior agreements 
            (except as specifically stated herein), and shall govern your entire relationship with Vendr,
            including but not limited to events, agreements, and conduct preceding your acceptance of this Agreement.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            2. Eligibility.
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            To use the Service, you must be at least 16 years old. By creating an account and using the Service, you affirm that:
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; You can form a binding contract with Vendr.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; You are not prohibited under U.S. law or any other jurisdiction from using the Service, such as being listed on the U.S. Treasury Department’s Specially Designated Nationals or facing similar prohibitions.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; You will comply with this Agreement and all applicable laws and regulations.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; You have not been convicted of or pled no contest to a felony, a sex crime, or any crime involving violence, nor are you required to register as a sex offender..
          </Text>


          <Text className=" text-[28px] text-primary font-semibold">
            3. Your Account
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            You are responsible for maintaining the confidentiality of your login credentials and for all
            activities under your account. If you believe your account has been compromised, please 
            immediately contact us at www.vendr.site/contact.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            4. Modifying the Service and Termination
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Vendr strives to enhance the Service, which may involve adding or removing features. Unless
            these changes materially affect your rights or obligations, we may not provide prior notice.
            We may suspend the Service entirely, with advance notice when possible, unless prevented by
            circumstances like safety or security concerns.
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            You may terminate your account at any time via the Service settings. Vendr may terminate your
            account without notice if you violate this Agreement. Upon termination, you are not entitled
            to refunds for purchases. Provisions of this Agreement that, by their nature, should survive
            termination will remain in effect after your account is terminated.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            5. Safety and Interactions with Other Members
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Vendr encourages a respectful user experience, but is not responsible for the conduct of any member
            on or off the Service. Exercise caution in all interactions, especially if meeting in person or 
            communicating outside the Service. Vendr does not conduct criminal background checks but reserves
            the right to conduct such checks and other screenings at any time using public records.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            6. Rights Vendr Grants You
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Vendr grants you a personal, worldwide, royalty-free, non-assignable, nonexclusive, revocable, and 
            non-sublicensable license to access and use the Service. This license is intended solely for you to
            enjoy and benefit from the Service’s offerings as envisioned by Vendr. You agree not to misuse the 
            Service’s content or features for unauthorized commercial purposes. Vendr may take legal action against
            unauthorized or illegal use of the Service. Moreover, you agree not to:
          </Text>

          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Copy, modify, transmit, create derivative works from, or redistribute any content without express written permission from Vendr.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Imply endorsement of your statements by Vendr without permission.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Engage in unauthorized use of bots, scrapers, or other automated devices.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Disrupt or interfere with the security or operation of the Service.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Engage in any activity that violates this Agreement.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            7. Rights You Grant Vendr
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            By creating an account, you grant Vendr a worldwide, transferable, sublicensable, royalty-free 
            license to use, copy, display, and distribute any content you post or transmit on the Service. 
            This license allows Vendr to operate, develop, and improve the Service and to create new services.
            You confirm that the information you provide is accurate and that you have the right to share the
            content you post. You authorize Vendr to act on your behalf in preventing infringement of your content by third parties.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            8. Community Rules
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Vendr reserves the right to terminate your account if you violate these guidelines or misuse the
            Service.By using the Service, you agree to:
          </Text>

          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Copy, modify, transmit, create derivative works from, or redistribute any content without express written permission from Vendr.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Imply endorsement of your statements by Vendr without permission.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Engage in unauthorized use of bots, scrapers, or other automated devices.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Disrupt or interfere with the security or operation of the Service.
          </Text>
          <Text className=" text-[16px] my-3 leading-[24px]">
            &#x2022; Engage in any activity that violates this Agreement.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            9. Other Members' Content
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
          Vendr does not take responsibility for content posted by members, which remains their sole responsibility.
          We reserve the right to remove content that violates this Agreement. If you encounter content that violates
          our rules, please report it within the Service.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            10. Purchases
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Generally. From time to time, Vendr may offer products and services for purchase (“in app purchases”) through App Store, 
            Google Play, carrier billing, Vendr direct billing or other payment platforms authorized by Vendr. If you choose to make 
            an in app purchase, you will be prompted to confirm your purchase with the applicable payment provider and your method of 
            payment (be it your card or a third party account such as Google Play or App Store) (your “Payment Method”) will be charged
            at the prices displayed to you for the service(s) you’ve selected as well as any sales or other taxes that may be imposed 
            on your payments and you authorize Vendr or the third party account, as applicable, to charge you.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            11. Copyright Claims
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            If you believe that your work has been copied in a way that constitutes copyright infringement, please contact our 
            Copyright Agent at cameronchin1997@gmail.com with the following information:
            Your electronic or physical signature. A description of the copyrighted work you claim has been infringed. The location
            of the infringing material on the Service. Your contact details.A statement that you have a good faith belief that the disputed use is not authorized.
            A statement, under penalty of perjury, that the information in your notification is accurate and that you are authorized to act on behalf of the copyright owner.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            12. Disclaimers
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            VENDR PROVIDES THE SERVICE ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED. Vendr does not guarantee that the Service will function without interruptions or errors,
             and it provides no assurances that defects will be corrected or that the Service or the server that makes it available 
             are free of viruses or other harmful components.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            13. Limitation of Liability
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            Vendr and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages,
            including loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of, 
            or inability to access or use the Service; the conduct or content of other members or third parties on, through, or 
            following use of the Service; or unauthorized access, use, or alteration of your transmissions or content.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            14. Indemnification
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            You agree to indemnify and hold Vendr, its affiliates, and their respective officers, directors, employees, 
            and agents harmless from any and all claims, demands, losses, responsibilities, and expenses (including attorneys' fees)
            arising out of or connected with your use of the Service, your content, or your violation of this Agreement.
          </Text>

          <Text className=" text-[28px] text-primary font-semibold">
            15. Entire Agreement
          </Text>

          <Text className=" text-[16px] my-4 leading-[24px]">
            This Agreement, together with any additional terms or conditions disclosed to you if you purchase or have purchased 
            additional features, products, or services we offer, constitutes the entire agreement between you and Vendr regarding
            your use of the Service. If any provision of this Agreement is found to be invalid by any court having competent 
            jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement,
            which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing 
            waiver of such term or any other term.
          </Text>

        </View>
      </ScrollView>
    </>
  );
};

export default serviceterms;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
  },
});