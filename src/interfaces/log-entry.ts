import { CallSite } from './call-site'

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export interface LogEntry {
  callsite?: CallSite,
  namespace: string,
  namespaceId: number,
  message: string,
  timestamp: Date,
  arguments: any[],
  level: LogLevel
}
