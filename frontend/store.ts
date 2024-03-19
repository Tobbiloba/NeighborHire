import { create } from 'zustand'

type User = {
  id: number
  name: string
  email: string
}

type UserStore = {
  user: User | null
  fetchUser: () => Promise<void>
  // eslint-disable-next-line no-unused-vars
  createUser: (userData: Partial<User>) => Promise<void>
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  fetchUser: async () => {
    try {
      const response = await fetch('https://api.example.com/user')
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      const userData = await response.json()
      set({ user: userData })
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  },
  createUser: async (userData) => {
    try {
      const response = await fetch('https://api.example.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      if (!response.ok) {
        throw new Error('Failed to create user')
      }
      const newUser = await response.json()
      set({ user: newUser })
    } catch (error) {
      console.error('Error creating user:', error)
    }
  },
}))
