import React from "react";
import { useForm } from "react-hook-form";
import "./Formulir.css";

const formulir = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section className="formulir">
      <h2 className="formulir-permohonan">Formulir Permohonan</h2>
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
            <label htmlFor="jenisKelamin" className="form-label">
              Jenis Kelamin
            </label>
            <input
              {...register("noTelepon")}
              type="text"
              className="form-control"
              id="jenisKelamin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tanggalLahir" className="form-label">
              Tanggal Lahir
            </label>
            <input
              {...register("noTelepon")}
              type="text"
              className="form-control"
              id="tanggalLahir"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="golonganDarah" className="form-label">
              Golongan Darah
            </label>
            <input
              {...register("noTelepon")}
              type="text"
              className="form-control"
              id="golonganDarah"
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
          <div class="col-12">
            <p class="mbr-text mb-0 mbr-fonts-style display-7">
              Upload berkas yang diperlukan
            </p>
            <div
              style={{marginBottom: 15, textAlign: "left"}}
              class="mbr-section-btn mt-3"
            >
              <a class="btn btn-danger display-11" href="page1.html">
                Pilih File
              </a>
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

export default formulir;
