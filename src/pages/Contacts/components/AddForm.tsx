import { Modal } from 'antd';
import React from 'react';

type CreateFormProps = {
  modalVisible: boolean;
  onCancel: () => void;
};

const AddForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default AddForm;
