export const LANDING_PAGE =
  process.env.NODE_ENV === "production"
    ? "https://splashsaver.com"
    : "http://localhost:3000";
export const WEB_PAGE =
  process.env.NODE_ENV === "production"
    ? "https://app.splashsaver.com"
    : "http://localhost:3001";
export const DOCS_PAGE =
  process.env.NODE_ENV === "production"
    ? "https://docs.splashsaver.com"
    : "http://localhost:3002";
export const CODES_PAGE =
  process.env.NODE_ENV === "production"
    ? "https://codes.splashsaver.com"
    : "http://localhost:3003";

export const CALLBACK_URL = `${WEB_PAGE}/auth/create`;
export const COOKIE_NAME = "splash-cookie-tkn";
