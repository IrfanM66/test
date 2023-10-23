import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section className="contact">
      <h2 className="contact-us">Contact Us</h2>
      <div className="form_container">
        <form
          onSubmit={handleSubmit((data) => {
            alert(
              `first name : ${data.firstName}, last name : ${data.lastName}, email : ${data.email}, description : ${data.desc}`
            );
          })}
        >
          <div className="mb-3">
            <label htmlFor="namaLengkap" className="form-label">
              Nama Lengkap
            </label>
            <input
              {...register("namaLengkap")}
              type="text"
              className="form-control"
              id="namaLengkap"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noTelepon" className="form-label">
              No. Telepon
            </label>
            <input
              {...register("noTelepon")}
              type="text"
              className="form-control"
              id="noTelepon"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Keterangan
            </label>
            <div className="form-floating">
              <textarea
                {...register("description")}
                className="form-control"
                placeholder="Leave a desc here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={""}
              />
            </div>
          </div>
          <button type="submit" className="clr-accent btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
