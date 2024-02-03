"use client"
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from 'react';

  interface CaptureData {
    capturedData: any; 
    updateCapturedData: Dispatch<SetStateAction<any>>;
  }

  const CaptureDataContext = createContext<CaptureData | undefined>(undefined);


  interface CaptureDataProviderProps {
    children: ReactNode;
  }

  export const CaptureDataProvider: React.FC<CaptureDataProviderProps> = ({
    children,
  }) => {
    const [capturedData, setCapturedData] = useState<any>(null);

    console.log("capture data inside context",capturedData)
  
    const updateCapturedData = (data: any) => {
      setCapturedData(data);
    };
  
    return (
      <CaptureDataContext.Provider value={{ capturedData, updateCapturedData }}>
        {children}
      </CaptureDataContext.Provider>
    );
  };

  export const useCaptureData = (): CaptureData => {
    const context = useContext(CaptureDataContext);
    if (!context) {
      throw new Error('useCaptureData must be used within a CaptureDataProvider');
    }
    return context;
  };