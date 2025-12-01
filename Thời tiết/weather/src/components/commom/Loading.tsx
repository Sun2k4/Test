import React from "react";
import { Spin } from "antd";

interface Props {
  isLoading: boolean;
  tip?: string;
}

const Loading: React.FC<Props> = ({
  isLoading,
  tip = "Đang tải dữ liệu...",
}) => {
  return <Spin spinning={isLoading} tip={tip} size="large" fullscreen />;
};

export default Loading;
