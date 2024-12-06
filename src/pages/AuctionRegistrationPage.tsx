import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Button,
  Select,
  DatePicker,
  message,
  Upload,
  Input,
  Image,
  Form,
} from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { menus } from "features/auction/ui/constants";

const { Option } = Select;

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const AuctionRegistrationPage: React.FC = () => {
  const noMenu = ["일반상품", "커뮤니티", "마이페이지"];
  const [firstCategoryNumber, setFirstCategoryNumber] = useState<number>(0);
  const [secondCategoryNumber, setSecondCategoryNumber] = useState<number>(0);
  const [auctionName, setAuctionName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>();
  const [startTime, setStartTime] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date | null>();
  const [endTime, setEndTime] = useState<number>(0);
  const [hours, setHours] = useState<string[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);
  const [startBid, setStartBid] = useState<number>(0);
  const [onlyViewBid, setOnlyViewBid] = useState<string>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  // const onRangeChange = () => {};
  const handleOk = () => {};
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.info(values);
    // 여기서 제출한 데이터를 처리하는 로직을 추가합니다.
    return true;
  };

  const handlePreview = async (file: UploadFile) => {
    const updatedFile = { ...file };
    if (!updatedFile.url && !updatedFile.preview) {
      updatedFile.preview = await getBase64(
        updatedFile.originFileObj as FileType,
      );
    }

    setPreviewImage(updatedFile.url || (updatedFile.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleSubmit = () => {
    if (auctionName.length === 0) {
      message.error("이름을 입력해주세요");
    }
    if (startBid === 0) {
      message.error("경매 시작가를 입력해주세요");
    }
    return false;
  };
  useEffect(() => {
    const hoursArr: string[] = [];
    for (let i = 0; i < 24; i += 1) {
      hoursArr.push(`${i.toString().padStart(2, "0")} 시`);
    }
    setHours(hoursArr);
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuctionName(event.target.value);
  };

  const handleChangeBid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value.replace(/,/g, ""));

    setStartBid(inputValue);
    setOnlyViewBid(inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };
  // const handleRemove = (file: any) => {
  //   setFileList((prev) => prev.filter((item) => item.uid !== file.uid)); // 삭제할 파일 필터링
  // };

  // const uploadProps = {
  //   fileList,
  //   onChange: handleChange,
  //   onRemove: handleRemove,
  //   multiple: true,
  //   beforeUpload: (file: any) => {
  //     const isImage = file.type.startsWith("image/");
  //     if (!isImage) {
  //       message.error("이미지 파일만 업로드할 수 있습니다.");
  //     }
  //     return isImage; // 이미지 파일만 허용
  //   },
  //   showUploadList: {
  //     showPreviewIcon: false,
  //     showRemoveIcon: false,
  //     extra: false,
  //   },
  // };
  const handleStartDateChange = (value: dayjs.Dayjs) => {
    const newDate = new Date(value.toDate());
    if (value) {
      if (startTime >= 0 && startTime < 24) {
        newDate.setHours(Number(hours[startTime])); // 시간을 설정
      }
      setStartDate(newDate);
    }
  };
  const handleEndDateChange = (value: dayjs.Dayjs) => {
    message.info(endTime);
    const newDate = new Date(value.toDate());
    if (value) {
      if (endTime >= 0 && endTime < 24) {
        newDate.setHours(Number(hours[endTime])); // 시간을 설정
        setEndDate(newDate);
      }
    }
  };

  const handleStartTimeChange = (value: number) => {
    if (startDate) {
      const newDate = new Date(startDate);
      if (startTime >= 0 && startTime < 24) {
        newDate.setHours(Number(hours[startTime])); // 시간을 설정
      }
      setStartDate(newDate);
    }

    setStartTime(value);
  };

  const handleEndTimeChange = (value: number) => {
    if (endDate) {
      const newDate = new Date(endDate);
      if (endTime >= 0 && endTime < 24) {
        newDate.setHours(Number(hours[endTime])); // 시간을 설정
      }
      setEndDate(newDate);
    }
    setEndTime(value);
  };
  const handlesecondCategoryNumber = (number: number) => {
    setSecondCategoryNumber(number);
  };
  const handlefirstCategoryNumber = (number: number) => {
    setFirstCategoryNumber(number);
    setSecondCategoryNumber(0);
  };

  return (
    <div className=" w-[700px] h-screen mx-auto ">
      <div className="bid-name w-full p-4 ml-2 mx-auto ">
        <div className="form mx-auto">
          <span className="text-xl font-bold ">경매 등록</span>
          <div className="description_section ml-0 ">
            <div className="mt-4  " />
          </div>
          <div className="name-section">
            <Form.Item htmlFor="name" className=" text-black ">
              경매 이름
            </Form.Item>
            <Input
              id="name"
              type="text"
              value={auctionName}
              onChange={handleNameChange}
              autoComplete="off"
              allowClear
              className=" ml-3 w-[15rem] focus:border-gray-500 transition duration-200"
              placeholder="ex) 좋은 돌"
            />
            <div className="bid mt-4">
              <Form
                form={form}
                name="postForm"
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
              >
                <Form.Item
                  name="content"
                  label="내용"
                  rules={[{ message: "Please input the content!" }]}
                >
                  <Input.TextArea rows={6} placeholder="내용을 입력하세요" />
                </Form.Item>
              </Form>
              <Form.Item htmlFor="startBid" className="text-black">
                경매 가격
              </Form.Item>
              <Input
                className="w-[15rem] ml-3"
                id="startBid"
                value={onlyViewBid} // , 찍기위한 상태
                onChange={handleChangeBid}
                placeholder="경매 시작가격을 입력하세요"
              />
            </div>
          </div>
        </div>
        <div className="category-section mt-6 mx-auto">
          <span className="text-lg block">카테고리 설정</span>

          <Select
            id="category"
            placeholder="카테고리를 선택하세요"
            className="w-[15rem] mx-2 mt-2"
            value={firstCategoryNumber}
            onChange={handlefirstCategoryNumber}
          >
            {menus
              .filter((item) => !noMenu.includes(item.title))
              .map((item, index) => (
                <Option key={item.title} value={index}>
                  {item.title}
                </Option>
              ))}
          </Select>

          <Select
            id="category"
            placeholder="카테고리를 선택하세요"
            className="w-[15rem] mx-2"
            value={secondCategoryNumber}
            onChange={handlesecondCategoryNumber}
          >
            {menus[firstCategoryNumber].subMenu.map((item, index) => (
              <Option key={item} value={index}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="date-section flex  mt-4 mb-1">
          <span className="block text-lg">날짜 선택</span>
          <div className="start-section ml-2">
            <DatePicker
              onChange={handleStartDateChange}
              onOk={handleOk}
              placeholder="시작 날짜"
              className="cursor-pointer "
            />
            <Select
              className="w-[5rem] "
              value={startTime}
              onChange={handleStartTimeChange}
            >
              {hours.map((item, index) => (
                <Option key={item} value={index}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
          <span className="text-xl mx-4">~</span>
          <div className="end-section inline-block">
            <DatePicker
              placeholder="종료 날짜"
              onChange={handleEndDateChange}
              onOk={handleOk}
              className="cursor-pointer"
            />
            <Select
              className="w-[5rem] mx-2"
              value={endTime}
              onChange={handleEndTimeChange}
            >
              {hours.map((item, index) => (
                <Option key={item} value={index}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="image-selector mt-10 w-[600px] ">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            multiple
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <div className="mx-auto flex justify-center">
            {previewImage && (
              <Image
                wrapperStyle={{ display: "none" }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
      </div>

      <div className="up-load mt-5 mx-auto flex justify-center">
        <Button className="h-[2.5rem]">취소</Button>
        <Button
          className="h-[2.5rem] ml-4 bg-red-400 text-white"
          onClick={handleSubmit}
        >
          경매 등록
        </Button>
      </div>
    </div>
  );
};
