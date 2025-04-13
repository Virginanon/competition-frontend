/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { type AxiosRequestConfig } from "axios";

const sender = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 自定义发送 GET 请求的方法
 *
 * @param url 请求的相对 url
 * @param config axios 请求配置对象
 */
export function GET(url: string, config?: AxiosRequestConfig) {
  sender.get(url, config);
}

/**
 * 自定义发送 POST 请求的方法
 *
 * @param url 请求的相对 url
 * @param data 请求体的数据,数据以 json 形式传递
 * @param config axios 请求配置对象
 */
export function POST(url: string, data?: any, config?: AxiosRequestConfig) {
  sender.post(url, data, config);
}
