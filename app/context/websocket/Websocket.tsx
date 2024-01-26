"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface WebSocketContextProps {
  sockets: Record<string, WebSocket>;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(
  undefined
);

interface WebSocketProviderProps {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}: WebSocketProviderProps) => {
  const [sockets, setSockets] = useState<Record<string, WebSocket>>({});

  useEffect(() => {
    const routes = ["payments", "notifications", "door-status/:lockerId"];

    const newSockets = routes.reduce((acc, route) => {
      acc[route] = new WebSocket(
        `${process.env.NEXT_PUBLIC_WS_BASE_URL}${route}`
      );
      return acc;
    }, {});

    setSockets(newSockets);

    return () => {
      // Clean up WebSocket connections
      Object.values(newSockets).forEach((socket: WebSocket) => socket.close());
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ sockets }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (
  route?: string
): WebSocket | Record<string, WebSocket> => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }

  if (route && !context.sockets[route]) {
    throw new Error(`No WebSocket found for route: ${route}`);
  }

  return route ? context.sockets[route] : context.sockets;
};
