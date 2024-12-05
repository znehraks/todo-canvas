import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  /* config options here */
};

export default withVanillaExtract(nextConfig);
