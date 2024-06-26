import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function transformImgClassName(className) {
  return clsx(className, styles.img);
}
export default function MDXImg(props) {
  const {
    siteConfig,
  } = useDocusaurusContext();

  if (props.src.includes('res.cloudinary.com') && (props.title && !props.title.includes('default'))) {
    const splitSrc = props.src.split('/')
    const publicId = splitSrc.splice(7).join('/').split('.')[0]

    const cld = new Cloudinary({
      cloud: {
        cloudName: siteConfig.customFields.cloudinaryCloudName,
      },
    });

    const myImage = cld.image(`${publicId}`);

    myImage.quality('auto').format('auto').resize(scale().width(480));

    return (
      <AdvancedImage
        cldImg={myImage}
        {...props}
        loading="lazy"
        className={transformImgClassName(props.className)}
      />
    )
  } else {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        loading="lazy"
        {...props}
        className={transformImgClassName(props.className)}
      />
    );
  }

}
