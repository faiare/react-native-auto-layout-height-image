import React, { useEffect, useState } from 'react';
import { Image, ImageProps, ImageURISource } from 'react-native';

export const AutoHeightImage: React.FC<ImageProps> = (props) => {
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const uri = (props.source as ImageURISource).uri;
    if (uri === undefined) {
      setHeight(100);
      return;
    }
    Image.getSize(
      uri,
      (srcWidth, srcHeight) => {
        const optimizeHeight = srcHeight * (imageWidth / srcWidth);
        if (optimizeHeight !== 0) {
          setHeight(optimizeHeight);
        }
      },
      () => {
        setHeight(100);
      }
    );
  }, [props.source, imageWidth]);

  return (
    <Image
      {...props}
      onLayout={(layout) => setImageWidth(layout.nativeEvent.layout.width)}
      style={[props.style, { height }]}
    />
  );
};
