import { Inter } from "next/font/google";
import PageWrapper from "@/components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageWrapper title="提交失败">
      <h3>提交失败</h3>
    </PageWrapper>
  );
}
