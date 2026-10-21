import type { LinkedAccountWithMetadata, WalletWithMetadata } from '@privy-io/react-auth';

/**
 * Every Privy embedded wallet on a chain. Users who imported a key in the
 * Freeport app have two per chain: the imported one and one Privy created.
 */
export function embeddedWallets(
  linkedAccounts: LinkedAccountWithMetadata[] | undefined,
  chain: 'solana' | 'ethereum'
): WalletWithMetadata[] {
  return (linkedAccounts ?? []).filter(
    (a): a is WalletWithMetadata =>
      a.type === 'wallet' &&
      a.walletClientType === 'privy' &&
      a.chainType === chain &&
      (!a.connectorType || a.connectorType === 'embedded')
  );
}
