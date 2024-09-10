import React, { createContext, useContext, useState, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
export type SeverityType = "success" | "error" | "info";
export type SnackbarData = {
  message: string;
  severity: SeverityType;
  key: number;
};
export type ShowSnackbarType = (data: SnackbarData) => void;
interface SnackbarContextType {
  showSnackbar: (data: SnackbarData) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbars, setSnackbars] = useState<SnackbarData[]>([]);

  const showSnackbar = (data: SnackbarData) => {
    setSnackbars((prev) => [...prev, { ...data, key: new Date().getTime() }]);
  };

  const handleClose = (key: number) => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.key !== key));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbars.map((snackbar) => (
        <Snackbar
          key={snackbar.key}
          open={true}
          autoHideDuration={3000}
          onClose={() => handleClose(snackbar.key)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      ))}
    </SnackbarContext.Provider>
  );
};
