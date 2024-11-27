import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../componennts/Header/Header";

const Administrations = () => {
  const [administrations, setAdministrations] = useState([]);

  useEffect(() => {
    const getAdministrations = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL +
            "/api/administrations/get-allAdministrations"
        );
        const data = await res.json();
        setAdministrations(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAdministrations();
  }, []);
  const columns = [
    {
      title: " ",
      dataIndex: "administiration_img",
      render: (_, record) => {
        return (
          <img
            src={record.administiration_img}
            alt=""
            className="w-80 h-40 object-cover"
          />
        );
      },
    },
    {
      title: "Görevlinin Adı",
      dataIndex: "administiration_name",
    },
    {
      title: "Görevi",
      dataIndex: "administiration_branch",
    },
  ];

  return (
    <>
      <Header />

      <Table
        bordered
        dataSource={administrations}
        columns={columns}
        rowKey={"administrationsId"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
    </>
  );
};

export default Administrations;
