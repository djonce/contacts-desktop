// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/contacts/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/contacts/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      ...options,
    },
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  console.log('adRule', options);
  return request<API.RuleListItem>('/contacts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      ...options,
    },
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(
  params: {
    user_id: string;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/contacts/del', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
