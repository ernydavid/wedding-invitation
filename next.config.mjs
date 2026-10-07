/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [{ source: "/", destination: "/v2", permanent: false }];
  },
};

export default nextConfig;
