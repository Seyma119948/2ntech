import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../componennts/Header/Header";

const Class = () => {
  const [students, setClass] = useState([]);

  useEffect(() => {
    const getClass = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "/api/students/get-allStudents"
        );
        const data = await res.json();
        setClass(data);
      } catch (error) {
        console.log(error);
      }
    };

    getClass();
  }, []);

  const columns = [
    {
      title: " ",
      dataIndex: "student_image",
      render: (_, record) => {
        return (
          <img
            src={record.student_image}
            alt=""
            className="w-80 h-40 object-cover"
          />
        );
      },
    },
    {
      title: "Öğrenci Adı",
      dataIndex: "student_name",
    },
    {
      title: "Öğrenci Numarası",
      dataIndex: "student_number",
    },
  ];
  return (
    <>
      <Header />
      <Table
        bordered
        dataSource={students}
        columns={columns}
        rowKey={"studentsId"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
    </>
  );
};

export default Class;
