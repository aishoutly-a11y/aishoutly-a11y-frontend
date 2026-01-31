import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 font-arial">
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
