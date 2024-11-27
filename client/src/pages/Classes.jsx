import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../componennts/Header/Header";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "/api/classes/get-allClasses"
        );
        const data = await res.json();
        setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };

    getClasses();
  }, []);

  const columns = [
    {
      title: "Sınıf Adı",
      dataIndex: "class_name",
    },
    {
      title: "Sınıf Öğretmeni",
      dataIndex: "class_teacher_name",
    },
    {
      title: "Sınıf Mevcudu",
      dataIndex: "class_availability",
    },
  ];

  return (
    <>
      <Header />
      <Table
        bordered
        dataSource={classes}
        columns={columns}
        rowKey={"classesId"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
    </>
  );
};

export default Classes;
