import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { Delete_user } from "./../../../store/Users/action";

export function DeleteModal({
  deleteModal,
  setDeleteModal,
  handleCancelDeleteModal,
  deleteId,
}) {
  const dispatch = useDispatch();
  console.log(deleteId, "oooo");
  return (
    <>
      {deleteModal ? (
        <Modal
          title="حذف کاربر"
          open={deleteModal}
          onOk={() => {
            dispatch(Delete_user(deleteId));
            setDeleteModal(false);
          }}
          onCancel={handleCancelDeleteModal}
          style={{ direction: "rtl" }}
        >
          آیا مطمین هستید که میخواهید حذف کنید؟
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
