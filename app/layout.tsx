'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#0A0A0B', minHeight: '100vh' }}>
        <PrivyProvider
          appId="cmhpi6h9x002tl50cus1kfdah"
          config={{
            appearance: {
              theme: 'dark',
              accentColor: '#07E6D7',
            },
            loginMethods: ['google', 'apple'],
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
