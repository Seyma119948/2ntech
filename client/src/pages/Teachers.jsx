import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../componennts/Header/Header";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "/api/teachers/get-allTeachers"
        );
        const data = await res.json();
        setTeachers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTeachers();
  }, []);

  const columns = [
    {
      title: " ",
      dataIndex: "teacher_imge",
      render: (_, record) => {
        return (
          <img
            src={record.teacher_imge}
            alt=""
            className="w-80 h-40 object-cover"
          />
        );
      },
    },
    {
      title: "Öğretmenin Adı",
      dataIndex: "teacher_name",
    },
    {
      title: "Branş",
      dataIndex: "teacher_branch",
    },
  ];
  return (
    <>
      <Header />
      <Table
        bordered
        dataSource={teachers}
        columns={columns}
        rowKey={"teachersId"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
    </>
  );
};

export default Teachers;
