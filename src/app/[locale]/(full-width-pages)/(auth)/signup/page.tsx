import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("signup.title"), description: t("signup.description") };
}

export default function SignUp() {
  return <SignUpForm />;
}
