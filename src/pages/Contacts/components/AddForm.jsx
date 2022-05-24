import { useIntl } from 'umi';
import { ModalForm } from '@ant-design/pro-form';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import { FormItem, FormLayout, Input, FormButtonGroup, Submit } from '@formily/antd';

const form = createForm();

function AddForm(props) {
  const intl = useIntl();

  const { visible, onVisibleChange, handleAdd } = props;

  const add = async (value) => {
    console.log('---', value);
    const success = await handleAdd(value);
    if (success) {
      onVisibleChange(false);
      if (actionRef.current) {
        actionRef.current.reload();
      }
    }
  };
  return (
    <div>
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="600px"
        visible={visible}
        onVisibleChange={onVisibleChange}
        onFinish={async (value) => {
          console.log('--onFinish---', value);
        }}
      >
        <FormProvider form={form}>
          <FormLayout layout="vertical">
            <Field
              name="name"
              title="姓名"
              required
              initialValue="Jonce"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="phone"
              title="手机号"
              required
              initialValue="18058110000"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="email"
              title="邮箱"
              required
              initialValue="yu@qq.com"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="address"
              title="地址"
              required
              initialValue="中国上海"
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
    </div>
  );
}

export default AddForm;
