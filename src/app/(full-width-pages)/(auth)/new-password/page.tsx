import NewPasswordForm from "@/components/auth/NewPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Password | Shoutly.ai",
};

export default function NewPassword() {
    return <NewPasswordForm />;
}

