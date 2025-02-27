import AccountForm from "@/app/(auth)/signup/_components/account-form";
import AnonProfileSetting from "@/app/(auth)/signup/_components/anon-profile-setting";
import CompanyAccountForm from "@/app/(auth)/signup/_components/company-account-form";
import CompanyProfileSetting from "@/app/(auth)/signup/_components/company-profile-setting";
import ProfileSettings from "@/app/(auth)/signup/_components/profile-setting";
import { notFound } from "next/navigation";
import GoToLoginHome from "@/app/(auth)/_components/go-to-login-home";

type Props = {
  searchParams: {
    type: "user" | "company" | "anon";
    step: string;
  };
};

export default function Signup({ searchParams }: Props) {
  const type = searchParams.type;
  const step = searchParams?.step || "1";

  if (!type) notFound();

  if (type === "anon") {
    return <AnonProfileSetting />;
  }
  if (type === "user") {
    return step === "1" ? <AccountForm type={type}/> : <ProfileSettings />;
  }

  if (type === "company") {
    return step === "1" ? (
      <AccountForm type={type}/>
    ) : step === "2" ? (
      <CompanyAccountForm />
    ) : (
      <CompanyProfileSetting />
    );
  }

  return (
    <GoToLoginHome />
  );
}
