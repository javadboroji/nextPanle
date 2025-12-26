import React, { useEffect, useState } from "react";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
type UploaderProps = {
  setimagesUploaded: React.Dispatch<React.SetStateAction<any>>;
  maxCount?: number
};


function Uploader(props: UploaderProps) {
  const [fileList, setFileList] = useState<any>();

  const onChange: UploadProps["onChange"] = ({ file, fileList }) => {
    setFileList(fileList);
    if (props.maxCount && props.maxCount > 1) {
      const imagesArray = fileList.map((file) => file.originFileObj);
      props.setimagesUploaded(imagesArray)
    } else {
      props.setimagesUploaded(file.originFileObj)
    }

  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as any);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={props.maxCount ? props.maxCount : 1}
      >
        آپلود
      </Upload>
    </ImgCrop>
  );
}

export default Uploader;