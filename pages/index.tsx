import { Space, Spin } from "antd";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import FormGroups from "../components/forms/FormGroups";
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout";
import useAuthGuard from "../hooks/useAuthGuard";
import * as formGroupService from "../services/form-groups-service";
import * as formService from "../services/forms-service";
import { AuthContextProvider } from "../store/auth-context";
import FormGroupType from "../types/form-group-type";
import FormType from "../types/form-type";
import { mapFirebaseData } from "../utilities/service-utility";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  useAuthGuard();

  const [loading, setLoading] = useState<boolean>(false);
  const [formGroups, setFormGroups] = useState<FormGroupType[]>([]);
  const [forms, setForms] = useState<FormType[]>([]);

  useEffect(() => {
    setLoading(true);

    axios
      .all([formGroupService.findAll(), formService.findAll()])
      .then(
        axios.spread((...responses) => {
          setFormGroups(mapFirebaseData(responses[0].data));
          setForms(mapFirebaseData(responses[1].data));
        })
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Enterprise Forms Platform</title>
      </Head>
      <Spin spinning={loading} />
      {!loading && (
        <Space direction="vertical" style={{ width: "100%" }}>
          <FormGroups formGroups={formGroups} forms={forms} />
        </Space>
      )}
    </>
  );
};

Home.getLayout = (page) => (
  <AuthContextProvider>
    <AuthenticatedLayout>{page}</AuthenticatedLayout>
  </AuthContextProvider>
);

export default Home;
