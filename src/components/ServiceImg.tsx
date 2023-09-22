import React from 'react';

import img_service_android_viewer from '../assets/images/Product/img_service_android_viewer.png';
import img_service_android_viewer_2x from '../assets/images/Product/img_service_android_viewer@2x.png';
import img_service_ios_viewer from '../assets/images/Product/img_service_ios_viewer.png';
import img_service_ios_viewer_2x from '../assets/images/Product/img_service_ios_viewer@2x.png';
import img_service_web_viewer from '../assets/images/Product/img_service_web_viewer.png';
import img_service_web_viewer_2x from '../assets/images/Product/img_service_web_viewer@2x.png';

interface Props {
  service: 'android' | 'ios' | 'web';
}

export default function ServiceImg({ service }: Props) {
  const imageSrcByService = {
    android: {
      x1: img_service_android_viewer,
      x2: img_service_android_viewer_2x,
    },
    ios: {
      x1: img_service_ios_viewer,
      x2: img_service_ios_viewer_2x,
    },
    web: {
      x1: img_service_web_viewer,
      x2: img_service_web_viewer_2x,
    },
  };

  return (
    <img
      width={70}
      height={70}
      alt={`${service} service`}
      src={imageSrcByService[service].x1}
      srcSet={`${imageSrcByService[service].x1} 1x, ${imageSrcByService[service].x2} 2x`}
    />
  );
}
