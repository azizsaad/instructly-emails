import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Tailwind,
  Img,
  Text,
  Link,
  Font,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const ResponsiveEmail = () => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#005490",
                secondary: "#4CAF50",
              },
            },
          },
        }}
      >
        <Head>
          <title>
            Driving instructors: manage your entire business, on your phone
          </title>
          <Font
            fontFamily="Red Hat Display"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.gstatic.com/s/redhatdisplay/v14/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbmyWQkEz_lWZk33BGmGH.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-gray-100 font-sans m-auto">
          <Container className="border border-solid border-gray-200 rounded mx-auto w-full max-w-xl bg-white">
            <Section className="bg-primary h-36">
              <Img
                src={`${baseUrl}/static/logo.png`}
                width="320"
                height="auto"
                alt="instructly logo"
                className="mx-auto"
              />
            </Section>
            <Section>
              <Container className="text-center flex flex-col justify-start items-center pt-6 w-full">
                <Container className="w-full flex flex-row justify-center pb-4">
                  <Img
                    src={`${baseUrl}/static/img1.png`}
                    width="220"
                    height="auto"
                    alt="screenshot of the instructly app showing many lessons plannes for the week"
                    className="rotate-6"
                  />
                </Container>
                <Container className="px-4 py-4">
                  <Text className="text-xl font-semibold">
                    🚗 Lessons, students, payments & expenses
                  </Text>
                  <Text className="text-xl font-semibold">
                    🗣️ Easily share notes with students
                  </Text>
                  <Text className="text-xl font-semibold">
                    📅 Schedule lessons, integrated with your calendar
                  </Text>
                  <Text className="text-xl font-semibold">
                    💰 Track payments on-time with Stripe
                  </Text>
                </Container>
                <Container className="w-full bg-primary flex flex-col justify-center items-center mb-4">
                  <Text className="text-4xl font-bold text-white py-2">
                    Download Free Today!
                  </Text>
                </Container>
                <Container className="flex flex-col justify-start items-center">
                  <Link
                    href="https://apps.apple.com/gb/app/instructly/id6532619801"
                    className="mx-2"
                  >
                    <Img
                      src={`${baseUrl}/static/app-store.png`}
                      width="200"
                      height="auto"
                      alt="Download on App Store"
                    />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.saadaziz.instructly"
                    className="mx-2"
                  >
                    <Img
                      src={`${baseUrl}/static/google-play.png`}
                      width="200"
                      height="auto"
                      alt="Get it on Google Play"
                    />
                  </Link>
                </Container>
              </Container>
            </Section>

            <Section className="mt-8">
              <Text className="text-xl font-bold text-center text-gray-800">
                Control your Home Lighting
              </Text>
              <Text className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel consectetur interdum.
              </Text>
              <Container className="text-center my-4">
                <Link
                  href="#"
                  className="bg-secondary text-white font-bold py-2 px-4 rounded"
                >
                  Learn more
                </Link>
              </Container>
            </Section>

            <Section className="mt-8 text-center">
              <Text className="text-lg font-bold text-gray-800">Features</Text>
              <Container className="flex justify-around my-4">
                {/* <div>
                  <Img
                    src={`${baseUrl}/static/light-icon.png`}
                    width="40"
                    height="40"
                    alt="Light Intensity"
                  />
                  <Text className="text-sm text-gray-600">Light Intensity</Text>
                </div> */}
                <div>
                  <Img
                    src={`${baseUrl}/static/logo.png`}
                    width="40"
                    height="40"
                    alt="Lights Groups"
                  />
                  <Text className="text-sm text-gray-600">Lights Groups</Text>
                </div>
                <div>
                  <Img
                    src={`${baseUrl}/static/logo.png`}
                    width="40"
                    height="40"
                    alt="Eco Mode"
                  />
                  <Text className="text-sm text-gray-600">Eco Mode</Text>
                </div>
              </Container>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResponsiveEmail;
