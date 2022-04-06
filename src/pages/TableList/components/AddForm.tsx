import { useIntl } from 'umi';
import { ModalForm } from '@ant-design/pro-form';

import { createForm } from '@formily/core';

import { FormProvider, FormConsumer, Field } from '@formily/react';
import { FormItem, FormLayout, Input, FormButtonGroup, Submit } from '@formily/antd';

const form = createForm();

function AddForm(props) {
  const intl = useIntl();

  const { createModalVisible, handleModalVisible } = props;
  return (
    <div>
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="600px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          //   const success = await handleAdd(value as API.RuleListItem);
          //   if (success) {
          //     handleModalVisible(false);
          //     if (actionRef.current) {
          //       actionRef.current.reload();
          //     }
          //   }
        }}
      >
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
      </ModalForm>
    </div>
  );
}

export default AddForm;
