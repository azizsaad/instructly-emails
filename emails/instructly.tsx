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

const baseUrl = "https://saadaziz.co.uk/images/";

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
                    src={`${baseUrl}/static/1.png`}
                    width="220"
                    height="auto"
                    alt="screenshot of the instructly app showing many lessons plannes for the week"
                    className="rotate-6 mt-2"
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
                <Container className="w-full bg-primary flex flex-col justify-center items-center mt-4">
                  <Container className="w-full bg-primary flex flex-col justify-center items-center">
                    <Text className="text-4xl font-bold text-white py-2 text-center">
                      Download Free Today!
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Section>
            <Section className="my-6">
              <Container className="flex flex-col w-full justify-start items-center pt-4 pb-8">
                <Container className="flex flex-col w-full justify-start items-center">
                  <Img
                    src={`${baseUrl}/static/2.png`}
                    width="220"
                    height="auto"
                    alt="screenshot of the instructly app showing a students profile, payments and lessons"
                    className="mb-1"
                  />
                </Container>
                <Text className="font-semibold text-xl text-primary px-6 text-center">
                  Quick access to message/call your student, track Cash/Stripe
                  payments, and lessons with notes!
                </Text>
              </Container>
              <Container className="flex flex-col w-full justify-start items-center pt-4 pb-8">
                <Container className="flex flex-col w-full justify-start items-center">
                  <Img
                    src={`${baseUrl}/static/3.png`}
                    width="220"
                    height="auto"
                    alt="screenshot of the instructly app showing option to export payments and expenses"
                    className="mb-1"
                  />
                </Container>
                <Text className="font-semibold text-xl text-primary px-6 text-center">
                  Export payments and expenses to a spreadsheet, with images of
                  receipts - your accountant will thank you!
                </Text>
              </Container>
              <Container className="flex flex-col w-full justify-start items-center pt-4 pb-8">
                <Container className="flex flex-col w-full justify-start items-center">
                  <Img
                    src={`${baseUrl}/static/4.png`}
                    width="220"
                    height="auto"
                    alt="screenshot of the instructly app options to add a lesson"
                    className="mb-1"
                  />
                </Container>
                <Text className="font-semibold text-xl text-primary px-6 text-center">
                  Unclutter your diary and notebooks by tracking lessons in the
                  app, and in your phone's calendar!
                </Text>
              </Container>
              <Container className="w-full flex flex-col justify-center items-center mt-4 py-6 px-4">
                <Text className="text-3xl font-semibold text-primary text-center">
                  See more demos on Facebook
                </Text>
                <Container className="w-full flex flex-col justify-center items-center">
                  <Link href="https://www.facebook.com/instructlyapp">
                    <Img
                      src={`${baseUrl}/static/facebook.png`}
                      width="130"
                      height="auto"
                      alt="link to the instructly facebook"
                    />
                  </Link>
                </Container>
              </Container>
              <Container className="w-full bg-primary flex flex-col justify-center items-center mt-4 py-6 px-4">
                <Text className="text-4xl font-bold text-white">
                  Any Questions?
                </Text>
                <Text
                  style={{
                    textDecoration: "none",
                  }}
                  className="text-2xl font-medium text-white"
                >
                  Drop us an email: instructlyapp@gmail.com
                </Text>
              </Container>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResponsiveEmail;
