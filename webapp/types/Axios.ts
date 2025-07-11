export interface RequestConfig {
  url?: string;
  method?: 'get' | 'post' | 'put' | 'delete' | string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
}
export interface IServiceResponse<T = unknown> {
  config: RequestConfig;
  data: T,
  request?: unknown;
  headers: Record<string, string>;
  status: number;
  statusText: string;
}
