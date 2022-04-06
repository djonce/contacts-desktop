import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import styles from './Welcome.less';

import { createForm } from '@formily/core';

import { FormProvider, FormConsumer, Field } from '@formily/react';
import { FormItem, FormLayout, Input, FormButtonGroup, Submit } from '@formily/antd';

const form = createForm();

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="name"
            title="姓名"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="mobile"
            title="手机号"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="邮箱"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="address"
            title="地址"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px dashed #666',
              }}
            >
              实时响应：{form.values.input}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </PageContainer>
  );
};

export default Welcome;
