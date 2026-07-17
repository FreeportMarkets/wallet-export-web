'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: '#000000',
          minHeight: '100vh',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <PrivyProvider
          appId="cmhpi6h9x002tl50cus1kfdah"
          clientId="client-WY6SVru3DDccrifgfLhzK1hXZ63Rmte6U5KXdV5tZvpwq"
          config={{
            appearance: {
              theme: 'dark',
              accentColor: '#00C805',
            },
            loginMethods: ['google', 'apple', 'email'],
            embeddedWallets: {
              solana: {
                createOnLogin: 'off',
              },
            },
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
