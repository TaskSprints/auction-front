import React, { useState, useEffect } from "react";

interface TermsAgreementFormProps {
  // termRequiredCheck: boolean;
  setTermRequiredCheck: (value: boolean) => void;
}

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  labelClass: string; // 텍스트 클래스 추가
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  labelClass = "text-base", // 기본 크기 설정
}) => (
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-0"
    />
    <label htmlFor={id} className={`text-gray-800 ${labelClass}`}>
      {label}
    </label>
  </div>
);

export const TermsAgreementForm: React.FC<TermsAgreementFormProps> = ({
  // termRequiredCheck,
  setTermRequiredCheck,
}) => {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const toggleAllCheck = () => {
    const newState = !allCheck;
    setAllCheck(newState);
    setAgeCheck(newState);
    setUseCheck(newState);
    setMarketingCheck(newState);
    setTermRequiredCheck(!newState);
    // console.log(termRequiredCheck);
  };

  useEffect(() => {
    if (ageCheck && useCheck && marketingCheck) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  return (
    <form className="max-w-lg mx-auto pt-6">
      <Checkbox
        id="all-check"
        label="모두 확인하였으며 동의합니다."
        checked={allCheck}
        onChange={toggleAllCheck}
        labelClass="text-base font-bold" // 텍스트 크기 조정
      />
      <span className="text-sm text-gray-600 mb-4">
        전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
        개별적으로 동의를 선택하실 수 있습니다. 선택 항목에 대한 동의를
        거부하시는 경우에도 서비스 이용이 가능합니다.
      </span>

      <div className="mt-5 mb-4 border border-gray-300 p-4 rounded-lg bg-gray-50">
        <Checkbox
          id="check1"
          label="만 14세 이상입니다 (필수)"
          checked={ageCheck}
          onChange={() => setAgeCheck(!ageCheck)}
          labelClass="text-sm" // 필수 약관 텍스트 크기 조정
        />
        <Checkbox
          id="check2"
          label="이용약관 (필수)"
          checked={useCheck}
          onChange={() => setUseCheck(!useCheck)}
          labelClass="text-sm" // 필수 약관 텍스트 크기 조정
        />
        <Checkbox
          id="check3"
          label="마케팅 동의 (선택)"
          checked={marketingCheck}
          onChange={() => setMarketingCheck(!marketingCheck)}
          labelClass="text-sm" // 필수 약관 텍스트 크기 조정
        />
      </div>
    </form>
  );
};
