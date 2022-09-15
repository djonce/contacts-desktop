import { ModalForm } from '@ant-design/pro-form';
import { FormButtonGroup, FormItem, FormLayout, Input, Submit } from '@formily/antd';
import { createForm } from '@formily/core';
import { Field, FormConsumer, FormProvider } from '@formily/react';
import { useIntl } from 'umi';

const form = createForm();

function AddForm(props) {
  const intl = useIntl();

  const { visible, onVisibleChange, handleAdd } = props;

  const add = async (value) => {
    const success = await handleAdd(value);
    if (success) {
      onVisibleChange(false);
      if (actionRef.current) {
        actionRef.current.reload();
      }
    }
  };
  return (
    <ModalForm title="添加" width="600px" visible={visible} onVisibleChange={onVisibleChange}>
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
            name="phone"
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
              实时响应：{form.values.name}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={(v) => add(v)}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </ModalForm>
  );
}

export default AddForm;
