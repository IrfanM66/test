import React from "react";
import "./Permohonan.css";

const Permohonan = () => {
  return (
    <section>
      <section className="permohonan">
        <div className="permohonan_container">
          <h2>Permohonan</h2>
          <p className="deskription-permohonan">
            Dalam halaman ini ditampilkan permohonan plasma konvalesen yang
            telah terdaftar pada Teman Donor, permohonan di bawah ini telah
            terverifikasi.
          </p>
        </div>
      </section>
      <section className="peryaratan">
        <div className="persyaratan_container">
          <h2>Persyaratan Donor</h2>
          <p className="deskription-persyaratan">
            <p>
              Usia 18-60 tahun Berat badan ≥ 55kg Diutamakan pria, apabila
              perempuan belum pernah hamil Bebas keluhan minimal 14 hari Tidak
              menerima transfusi darah selama 6 bulan terakhir Lebih diutamakan
              yang pernah mendonorkan darah
            </p>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Permohonan;
