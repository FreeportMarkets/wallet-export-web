'use client';

import { usePrivy, useSolanaWallets } from '@privy-io/react-auth';

export default function ExportWalletPage() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { exportWallet } = useSolanaWallets();

  const solanaWallet = user?.linkedAccounts?.find(
    (account: any) =>
      account.type === 'wallet' &&
      account.walletClientType === 'privy' &&
      account.chainType === 'solana'
  ) as { address: string } | undefined;

  if (!ready) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <p style={styles.text}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Export Your Wallet</h1>
          <p style={styles.text}>Log in with the same account you use in the Freeport app.</p>
          <button style={styles.button} onClick={login}>
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Export Your Wallet</h1>

        {solanaWallet ? (
          <>
            <p style={styles.label}>Wallet Address</p>
            <p style={styles.address}>{solanaWallet.address}</p>

            <button style={styles.button} onClick={() => exportWallet()}>
              Export Private Key
            </button>

            <p style={styles.warning}>
              Never share your private key with anyone.
            </p>
          </>
        ) : (
          <p style={styles.text}>No Solana wallet found for this account.</p>
        )}

        <button style={styles.logoutButton} onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: 0,
  },
  text: {
    color: '#9CA3AF',
    fontSize: '14px',
    marginBottom: '24px',
  },
  label: {
    color: '#07E6D7',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  address: {
    color: '#FFFFFF',
    fontSize: '12px',
    fontFamily: 'monospace',
    backgroundColor: '#374151',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '24px',
    wordBreak: 'break-all',
  },
  button: {
    backgroundColor: '#07E6D7',
    color: '#0A0A0B',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '16px',
  },
  warning: {
    color: '#F59E0B',
    fontSize: '12px',
    marginBottom: '24px',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: '#9CA3AF',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};
