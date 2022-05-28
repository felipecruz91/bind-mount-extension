import React from "react";
import Button from "@mui/material/Button";
import { createDockerDesktopClient } from "@docker/extension-api-client";
import { Stack, TextField } from "@mui/material";

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

export function App() {
  const [response, setResponse] = React.useState<string>();
  const ddClient = useDockerDesktopClient();

  const showBindMountedFileContent = async () => {
    const result = await ddClient.extension.vm?.cli.exec("cat", [
      "/tmp/hello.txt",
    ]);
    setResponse(JSON.stringify(result.stdout));
  };

  return (
    <>
      <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" onClick={showBindMountedFileContent}>
          Display content of bind-mounted file
        </Button>

        <TextField
          sx={{ width: 480 }}
          disabled
          multiline
          variant="outlined"
          minRows={5}
          value={response ?? ""}
        />
      </Stack>
    </>
  );
}
