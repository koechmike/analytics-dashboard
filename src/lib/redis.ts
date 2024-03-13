import { Redis } from '@upstash/redis'
import { env } from 'process';

export const redis = new Redis({
  url: 'https://eu1-daring-ox-39888.upstash.io',
  token: process.env.REDIS_KEY!,
})