import "./globals.css";
import NotificationModal from "@/components/modals/notif-modal";

export const metadata = {
  title: "MQTT GATE",
  description: "Created by Adrian Aji Septa & Didi Prasetyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <main>{children}</main>
        <NotificationModal />
        <div id="portal"></div>
      </body>
    </html>
  );
}
