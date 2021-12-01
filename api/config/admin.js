module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bcf04ce0b6dced415f27866a5fb08bb5'),
  },
});
