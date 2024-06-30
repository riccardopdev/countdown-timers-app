import ReactDOM from 'react-dom';

const CreateTimerModal = ({
  isModalOpen = false,
  onCancel,
}: CreateTimerModalProps) => {
  const modalSelector = document.querySelector('#createTimerModal');

  if (!modalSelector) return;
  if (!isModalOpen) return;

  return ReactDOM.createPortal(
    <>
      <h2>Create new timer</h2>
      <div>Content for creating a new timer</div>
      <button onClick={onCancel}>Cancel</button>
      <button>Create timer</button>
    </>,
    modalSelector
  );
};

type CreateTimerModalProps = {
  isModalOpen: boolean;
  onCancel: () => unknown;
};

export default CreateTimerModal;
