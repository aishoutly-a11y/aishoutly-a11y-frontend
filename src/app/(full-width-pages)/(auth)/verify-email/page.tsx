import OTPForm from "@/components/auth/OTPForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verify Email | Shoutly.ai",
};

export default function VerifyEmail() {
    return <OTPForm />;
}

