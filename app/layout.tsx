'use client';

import './globals.css';
import { PrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';

// Users who signed up in the app by importing a key log in via SIWE/SIWS with
// an external wallet (MetaMask, Phantom, ...) that holds that key.
const solanaConnectors = toSolanaWalletConnectors();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PrivyProvider
          appId="cmhpi6h9x002tl50cus1kfdah"
          clientId="client-WY6SVru3DDccrifgfLhzK1hXZ63Rmte6U5KXdV5tZvpwq"
          config={{
            appearance: {
              theme: 'dark',
              accentColor: '#00C805',
              walletChainType: 'ethereum-and-solana',
            },
            loginMethods: ['google', 'apple', 'email', 'wallet'],
            externalWallets: {
              solana: {
                connectors: solanaConnectors,
              },
            },
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
