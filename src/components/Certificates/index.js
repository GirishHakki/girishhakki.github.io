import React from "react";
import { certificates } from "../../data/constants";

const Certificates = () => {
  return (
    <div
      id="certificates"
      style={{
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "600",
          marginBottom: "40px",
          color: "white",
        }}
      >
        Certificates
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            style={{
              width: "320px",
              background: "#171721",
              border: "1px solid #854CE6",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 0 12px rgba(133,76,230,0.3)",
            }}
          >
            <img
  src={require(`../../images/${certificate.image}`)}
  alt={certificate.title}
  style={{
    width: certificate.id === 2 ? "250px" : "180px",
    height: "180px",
    objectFit: "contain",
    marginBottom: "20px",
  }}
/>

            <h3
              style={{
                color: "white",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              {certificate.title}
            </h3>

            <p
              style={{
                color: "#b1b2b3",
                marginBottom: "8px",
              }}
            >
              {certificate.issuer}
            </p>

            <p
              style={{
                color: "#854CE6",
                marginBottom: "20px",
              }}
            >
              {certificate.date}
            </p>

            <a
              href={certificate.credential}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                background: "#854CE6",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;