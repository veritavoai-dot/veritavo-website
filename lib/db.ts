// Lazily import Prisma Client to avoid initializing it at build-time
type GlobalWithPrisma = typeof globalThis & {
  __prisma?: any
}

export async function getPrisma() {
  const g = globalThis as GlobalWithPrisma
  if (g.__prisma) return g.__prisma

  const { PrismaClient } = await import('@prisma/client')
  const client = new PrismaClient()
  if (process.env.NODE_ENV !== 'production') g.__prisma = client
  return client
}
