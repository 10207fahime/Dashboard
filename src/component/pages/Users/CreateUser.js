import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { Add_user } from "./../../../store/Users/action";
import "./style.css";
export function CreateUser({
  showModal,
  values,
  setValues,
  handleCancel,
  setShowModal,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        title="افزودن کاربر"
        open={showModal}
        onOk={() => {
          dispatch(Add_user(values));
          setShowModal(false);
        }}
        onCancel={handleCancel}
        style={{ direction: "rtl" }}
      >
        <label htmlFor="exampleFormControlInput1" class="form-label">
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
        <label htmlFor="exampleFormControlInput1" class="form-label">
          سن
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="سن خود راوارد کنید"
          aria-label="Recipient's username"
          onChange={(e) =>
            setValues({ ...values, age: Number(e.target.value) })
          }
          value={values.age}
          aria-describedby="basic-addon2"
        />
        <label htmlFor="exampleFormControlInput1" class="form-label">
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
