import {
 Body,
 Button,
 Container,
 Head,
 Hr,
 Html,
 Img,
 Preview,
 Section,
 Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
 userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
 ? `https://${process.env.VERCEL_URL}`
 : "";

export const Email = ({
 userFirstname,
}: KoalaWelcomeEmailProps) => (
 <Html>
   <Head />
   <Preview>
     Welcome to ticket
   </Preview>
   <Body style={main}>
     <Container style={container}>
       <Img
         src={`${baseUrl}/static/koala-logo.png`}
         width="170"
         height="50"
         alt="Koala"
         style={logo}
       />
       <Text style={paragraph}>Hi {userFirstname},</Text>
       <Text style={paragraph}>
         Welcome Thank for Booking Your Ticket with us. We are excited to have you on board.
       </Text>
       <Section style={btnContainer}>
         <Button style={button} href="https://getkoala.com">
           View your ticket
         </Button>
       </Section>
       <Text style={paragraph}>
         Best,
         <br />
         The Koala team
       </Text>
       <Hr style={hr} />
       <Text style={footer}>
         470 Noor Ave STE B #1148, South San Francisco, CA 94080
       </Text>
     </Container>
   </Body>
 </Html>
);

Email.PreviewProps = {
 userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default Email;

const main = {
 backgroundColor: "#ffffff",
 fontFamily:
   '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
 margin: "0 auto",
 padding: "20px 0 48px",
};

const logo = {
 margin: "0 auto",
};

const paragraph = {
 fontSize: "16px",
 lineHeight: "26px",
};

const btnContainer = {
 textAlign: "center" as const,
};

const button = {
 backgroundColor: "#5F51E8",
 borderRadius: "3px",
 color: "#fff",
 fontSize: "16px",
 textDecoration: "none",
 textAlign: "center" as const,
 display: "block",
 padding: "12px",
};

const hr = {
 borderColor: "#cccccc",
 margin: "20px 0",
};

const footer = {
 color: "#8898aa",
 fontSize: "12px",
};
