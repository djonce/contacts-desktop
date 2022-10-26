import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import React from 'react';

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
      title="更新联系人"
      width="400px"
      visible={props.updateModalVisible}
      initialValues={{
        id: props.values.id,
        username: props.values.username,
        sex: Number(props.values.sex) === 1 ? '男' : '女',
        phone: props.values.phone,
        email: props.values.email,
        address: props.values.address,
      }}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => {
          console.log('run');
          props.onCancel();
        },
      }}
      onFinish={async (values: API.RuleListItem) => {
        values.id = props.values.id;
        console.log(values);
        props.onSubmit(values);
        return true;
      }}
    >
      <ProFormText
        placeholder={'姓名'}
        rules={[
          {
            required: true,
            message: '姓名为必填项',
          },
        ]}
        width="md"
        name="username"
      />
      <ProFormText placeholder={'性别'} width="md" name="sex" />
      <ProFormText
        placeholder={'手机号'}
        rules={[
          {
            required: true,
            message: '手机号为必填项',
          },
        ]}
        width="md"
        name="phone"
      />
      <ProFormText placeholder={'邮箱'} width="md" name="email" />
      <ProFormTextArea placeholder={'地址'} width="md" name="address" />
    </ModalForm>
  );
};

export default UpdateForm;
