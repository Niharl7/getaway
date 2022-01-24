module.exports = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/getaway",
    DB_URI:
      "mongodb+srv://nihar:nZhZ6bsGbyYz6zGQ@getaway.oojom.mongodb.net/getaway?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51KKrwjSI8B2j5UyCxawofmijEoodv6idX6AI3XyPNFxWyVgQQzGC9pYTBI2XyMQRgK0gKdPDi1rek97kiBUZiAli00fHSEAymj",
    STRIPE_SECRET_KEY:
      "sk_test_51KKrwjSI8B2j5UyCbUOTWiAY02SX9zqX86sEvfZ03gEYcz4Y5hPP8uRxrCS8AWnqkLAN6yl2xmjoTxrQngtNq3UI00ccJmFf6N",

<<<<<<< HEAD
    STRIPE_WEBHOOK_SECRET: "we_1KL1nBSI8B2j5UyCj44eI4M6",
=======
    STRIPE_WEBHOOK_SECRET: "whsec_0TxisFpc3C4HlBBtw7jEB5Vn9XMY9GWs",
>>>>>>> a821d1f51e8c680bdee3b25f70490101125b788c
    
    CLOUDINARY_CLOUD_NAME: "getaway",
    CLOUDINARY_API_KEY: "599735549983952",
    CLOUDINARY_API_SECRET: "Oe6jUaoM-5hqh_dHVaplHaREHpM",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "4d82be05b04819",
    SMTP_PASSWORD: "ae2bfbdddc4419",
    SMTP_FROM_EMAIL: "noreply@getaway.com",
    SMTP_FROM_NAME: "Getaway",

    NEXTAUTH_URL: "https://getaway.vercel.app",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
