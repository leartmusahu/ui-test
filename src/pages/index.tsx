import localFont from "next/font/local";
import { Alert } from "@/components/Alert";
import { useState, useEffect } from "react";
import { MultiSelect } from "@/components/MultiSelect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [isAlertVisible, setAlertVisible] = useState(true);
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedOptions = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ];
      setOptions(fetchedOptions);
    };

    fetchOptions();
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {isAlertVisible && (
          <Alert
            type="error"
            title="Error"
            description="This is an error alert!"
            variant="default"
            onClose={handleCloseAlert}
          />
        )}

        <Alert
          type="success"
          description="This is a success alert"
          variant="subtle"
          onClose={handleCloseAlert}
        />

        <Alert
          type="info"
          description="This is an info alert"
          variant="subtle"
          onClose={handleCloseAlert}
        />

        <Alert
          type="warning"
          title="Warning"
          description="This is a warning alert"
          variant="subtle"
          icon
          onClose={handleCloseAlert}
        />

        <MultiSelect
          options={() => Promise.resolve(options)}
          placeholder="Choose items"
          isLoading={false}
          onChange={(selected) => console.log(selected)}
        />
      </main>
    </div>
  );
}
