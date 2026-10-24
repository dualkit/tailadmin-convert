import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("signin.title"), description: t("signin.description") };
}

export default function SignIn() {
  return <SignInForm />;
}
