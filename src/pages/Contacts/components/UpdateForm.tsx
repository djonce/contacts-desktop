import { ModalForm } from '@ant-design/pro-form';
import { FormButtonGroup, FormItem, FormLayout, Input, Submit } from '@formily/antd';
import { createForm } from '@formily/core';
import { Field, FormProvider } from '@formily/react';
import React from 'react';

const form = createForm();

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.RuleListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props: UpdateFormProps) => {
  return (
    <ModalForm
      title="更新"
      width="600px"
      visible={props.updateModalVisible}
      onVisibleChange={props.onCancel}
    >
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="name"
            title="姓名"
            required
            initialValue={props.values.name}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="phone"
            title="手机号"
            required
            initialValue={props.values.phone}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="邮箱"
            required
            initialValue={props.values.email}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="address"
            title="地址"
            required
            initialValue={props.values.address}
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>

        <FormButtonGroup>
          <Submit onSubmit={(v) => props.onSubmit(v)}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </ModalForm>
  );
};

export default UpdateForm;
