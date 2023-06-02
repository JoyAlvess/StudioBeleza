import { BannerImg } from "./style";
import { BannerProps } from "./Banner.types";

export const Banner: React.FC<BannerProps> = ({
  imgMobile,
  imgDesk,
  mTop,
  media320height,
  media375height,
  media425height,
  media768height,
}) => {
  return (
    <BannerImg
      mTop={mTop}
      imgMobile={imgMobile}
      imgDesk={imgDesk}
      media320height={media320height}
      media375height={media375height}
      media425height={media425height}
      media768height={media768height}
    />
  );
};
