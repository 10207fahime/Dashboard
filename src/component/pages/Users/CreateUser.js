import { Modal } from "antd";

export function CreateUser({ showModal, values, setValues, handleCancel }) {
  return (
    <>
      <Modal
        title="Add User"
        open={showModal}
        // onOk={handleOk}
        onCancel={handleCancel}
        style={{ direction: "rtl" }}
      >
        <label for="exampleFormControlInput1" class="form-label">
          نام
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=" نام خود را وارد کنید"
          aria-label="Recipient's username"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          aria-describedby="basic-addon2"
        />
        <label for="exampleFormControlInput1" class="form-label">
          سن
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="سن خود راوارد کنید"
          aria-label="Recipient's username"
          onChange={(e) => setValues({ ...values, age: e.target.value })}
          value={values.age}
          aria-describedby="basic-addon2"
        />
        <label for="exampleFormControlInput1" class="form-label">
          کشور
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="کشور مورد نظر را وارد کنید"
          aria-label="Recipient's username"
          onChange={(e) => setValues({ ...values, country: e.target.value })}
          value={values.country}
          aria-describedby="basic-addon2"
        />
      </Modal>
    </>
  );
}
