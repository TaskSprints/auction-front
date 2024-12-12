import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ConfigProvider, Layout as AntLayout } from "antd";
import { Header } from "@/widgets/Header/index";
import { Footer } from "@/widgets/Footer/index";

const { Content } = AntLayout;

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4CAF50",
          borderRadius: 8,
        },
      }}
    >
      <AntLayout className="min-h-screen bg-gray-50">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </AntLayout>
    </ConfigProvider>
  );
}
