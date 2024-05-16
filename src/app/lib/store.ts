import { create } from 'zustand'

export interface VerifyState {
  verified: boolean
  setVerified: () => void
}

export const useVerify = create<VerifyState>(set => ({
  verified: false,
  setVerified: () => set(state => ({ verified: !state.verified })),
}))
