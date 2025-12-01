// lib/types.ts

export interface Project {
  id: string
  title: string
  description: string
  image: string
  images?: string[]
  category: string
  date: string
  link?: string
  featured: boolean
  slug: string
}

export interface Publication {
  id: string
  title: string
  description: string
  date: string
  link?: string
  image?: string
  featured: boolean
}

export interface NFT {
  id: string
  title: string
  description: string
  image: string
  contractAddress?: string
  tokenId?: string
  link?: string
  featured: boolean
}

export interface Commission {
  id: string
  title: string
  description: string
  category: string
  image?: string
  price?: string
  featured: boolean
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
  timestamp?: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
