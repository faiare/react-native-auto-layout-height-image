import React, { useEffect, useState } from 'react';
import { Image, ImageProps, ImageURISource, ImageResolvedAssetSource } from 'react-native';

export const AutoHeightImage: React.FC<ImageProps> = (props) => {
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const calcHeight = (srcWidth, srcHeight): void => {
    const optimizeHeight = srcHeight * (imageWidth / srcWidth);
    if (optimizeHeight !== 0) {
        setHeight(optimizeHeight);
    }
  }
  
  useEffect(() => {
    const uri = (props.source as ImageURISource).uri;
    if (uri === undefined) {
        const srcImage: ImageResolvedAssetSource = Image.resolveAssetSource(props.source);
        calcHeight(srcImage.width, srcImage.height);
    }
    else{
        Image.getSize(
            uri,
            (srcWidth, srcHeight) => {
                calcHeight(srcWidth, srcHeight);
            },
            () => {
                setHeight(100);
            }
        );	
    }
  }, [props.source, imageWidth]);

  return (
    <Image
      {...props}
      onLayout={(layout) => setImageWidth(layout.nativeEvent.layout.width)}
      style={[props.style, { height }]}
    />
  );
};