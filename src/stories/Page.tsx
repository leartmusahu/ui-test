import React from "react";
// import { Alert } from "../components/Alert";
// import { Info } from "lucide-react";
import { Header } from "./Header";
import "./page.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      {/* <Alert
        type="info"
        description="This is an informational alert."
        icon={<Info />}
      />

      <Alert
        type="success"
        description="Operation completed successfully!"
        variant="default"
      />

      <Alert
        type="success"
        description="This is a subtle alert!"
        variant="subtle"
      /> */}
    </article>
  );
};
