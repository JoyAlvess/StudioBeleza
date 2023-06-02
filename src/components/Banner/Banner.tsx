import { BannerImg } from "./style";
import { BannerProps } from "./Banner.types";

export const Banner: React.FC<BannerProps> = ({ imgMobile, imgDesk, mTop }) => {
  return <BannerImg mTop={mTop} imgMobile={imgMobile} imgDesk={imgDesk} />;
};
