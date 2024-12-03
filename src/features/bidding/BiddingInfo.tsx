"use client";

import { useState, useEffect } from "react";
import { Button, InputNumber, Progress } from "antd";

export function BiddingInfo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 19,
    minutes: 13,
    seconds: 53,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg">현재가</span>
        <span className="text-2xl font-bold text-red-600">106,000 원</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span>남은시간</span>
          <span className="font-bold">
            {timeLeft.days}일 {timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>입찰자</span>
          <span className="font-bold">6 명</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span>목표가</span>
          <span className="font-bold">133,000 원</span>
        </div>
        <Progress percent={75} showInfo={false} strokeColor="#4CAF50" />
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <InputNumber
            className="flex-1"
            min={107000}
            step={1000}
            defaultValue={107000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            // parser={(value) => Number(value!.replace(/\$\s?|(,*)/g, ""))}
          />
          <Button type="primary" className="bg-green-600">
            입찰하기
          </Button>
        </div>
        <Button block>즉시구매</Button>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-bold mb-2">상품정보</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">시작가</span>
            <span>89,000 원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">즉시구매가</span>
            <span>210,000 원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">판매지역</span>
            <span>전국</span>
          </div>
        </div>
      </div>
    </div>
  );
}
