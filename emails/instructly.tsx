import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Img,
  Link,
  Font,
} from "@react-email/components";

const baseUrl = process.env.isLocal
  ? "/static"
  : "https://firebasestorage.googleapis.com/v0/b/instructai-server-e8aa9.appspot.com/o";

const getImageSrc = (imageName) => {
  if (process.env.isLocal) {
    return `${baseUrl}/${imageName}`;
  } else {
    return `${baseUrl}/${imageName}?alt=media`;
  }
};

const ResponsiveEmail = () => {
  return (
    <Html>
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
      <Body style={{ backgroundColor: "#f3f4f6", margin: "0", padding: "0" }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
          }}
        >
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{ borderCollapse: "collapse" }}
          >
            <tr>
              <td
                align="center"
                style={{ backgroundColor: "#005490", padding: "20px" }}
              >
                <Img
                  src={getImageSrc("logo.png")}
                  width="320"
                  height="auto"
                  alt="instructly logo"
                />
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: "20px" }}>
                <Img
                  src={getImageSrc("1.png")}
                  width="220"
                  height="auto"
                  alt="screenshot of the instructly app showing many lessons planned for the week"
                  style={{ transform: "rotate(6deg)" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0 20px" }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td
                      align="center"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#000000",
                        padding: "5px 0",
                      }}
                    >
                      🚗 Lessons, students, payments & expenses
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#000000",
                        padding: "5px 0",
                      }}
                    >
                      🗣️ Easily share notes with students
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#000000",
                        padding: "5px 0",
                      }}
                    >
                      📅 Schedule lessons, integrated with your calendar
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#000000",
                        padding: "5px 0",
                      }}
                    >
                      💰 Track payments on-time with Stripe
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{ paddingTop: "20px", paddingBottom: "5px" }}
              >
                <Link href="https://apps.apple.com/gb/app/instructly/id6532619801">
                  <Img
                    src={getImageSrc("app-store.png")}
                    width="200"
                    height="auto"
                    alt="Download on App Store"
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ paddingBottom: "20px" }}>
                <Link href="https://play.google.com/store/apps/details?id=com.saadaziz.instructly">
                  <Img
                    src={getImageSrc("google-play.png")}
                    width="200"
                    height="auto"
                    alt="Get it on Google Play"
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  backgroundColor: "#005490",
                  padding: "20px",
                  color: "#ffffff",
                }}
              >
                <p
                  style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}
                >
                  Download Free Today!
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: "20px" }}>
                <Img
                  src={getImageSrc("2.png")}
                  width="220"
                  height="auto"
                  alt="screenshot of the instructly app showing a student's profile, payments and lessons"
                />
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#005490",
                    padding: "10px 0",
                    textAlign: "center",
                  }}
                >
                  Quick access to message/call your student, track Cash/Stripe
                  payments, and lessons with notes!
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: "20px" }}>
                <Img
                  src={getImageSrc("3.png")}
                  width="220"
                  height="auto"
                  alt="screenshot of the instructly app showing option to export payments and expenses"
                />
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#005490",
                    padding: "10px 0",
                    textAlign: "center",
                  }}
                >
                  Export payments and expenses to a spreadsheet, with images of
                  receipts - your accountant will thank you!
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: "20px" }}>
                <Img
                  src={getImageSrc("4.png")}
                  width="220"
                  height="auto"
                  alt="screenshot of the instructly app options to add a lesson"
                />
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#005490",
                    padding: "10px 0",
                    textAlign: "center",
                  }}
                >
                  Unclutter your diary and notebooks by tracking lessons in the
                  app, and in your phone's calendar!
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#005490",
                    margin: "0 0 10px 0",
                  }}
                >
                  See more demos on Facebook
                </p>
                <Link href="https://www.facebook.com/instructlyapp">
                  <Img
                    src={getImageSrc("facebook.png")}
                    width="130"
                    height="auto"
                    alt="link to the instructly facebook"
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  backgroundColor: "#005490",
                  padding: "20px",
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "0 0 10px 0",
                  }}
                >
                  Any Questions?
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    margin: "0 0 10px 0",
                  }}
                >
                  Drop us an email:
                </p>
                <a
                  href="mailto:instructlyapp@gmail.com"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  instructlyapp@gmail.com
                </a>
              </td>
            </tr>
          </table>
        </Container>
      </Body>
    </Html>
  );
};

export default ResponsiveEmail;
