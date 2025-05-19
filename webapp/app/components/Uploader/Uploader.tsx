import React, { useEffect, useState } from "react";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
type UploaderProps = {
  setimagesUploaded: React.Dispatch<React.SetStateAction<any>>;
};


function Uploader(props: UploaderProps) {
  const [fileList, setFileList] = useState<any>();

  const onChange: UploadProps["onChange"] = ({ file ,fileList}) => {
    setFileList(fileList);
    props.setimagesUploaded(file.originFileObj)
    
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
        maxCount={1}
      >
       آپلود
      </Upload>
    </ImgCrop>
  );
}

export default Uploader;