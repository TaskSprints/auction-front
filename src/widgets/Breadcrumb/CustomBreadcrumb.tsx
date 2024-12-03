import { Breadcrumb } from "antd";

export function CustomBreadcrumb() {
  return (
    <Breadcrumb
      items={[
        { title: "홈" },
        { title: "뷰티" },
        { title: "해외직구몰" },
        { title: "비오템 몰모" },
      ]}
      className="mb-4"
    />
  );
}
