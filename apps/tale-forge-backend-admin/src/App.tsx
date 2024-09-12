import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaleCoinTransactionList } from "./taleCoinTransaction/TaleCoinTransactionList";
import { TaleCoinTransactionCreate } from "./taleCoinTransaction/TaleCoinTransactionCreate";
import { TaleCoinTransactionEdit } from "./taleCoinTransaction/TaleCoinTransactionEdit";
import { TaleCoinTransactionShow } from "./taleCoinTransaction/TaleCoinTransactionShow";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { WriterList } from "./writer/WriterList";
import { WriterCreate } from "./writer/WriterCreate";
import { WriterEdit } from "./writer/WriterEdit";
import { WriterShow } from "./writer/WriterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TaleForge Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TaleCoinTransaction"
          list={TaleCoinTransactionList}
          edit={TaleCoinTransactionEdit}
          create={TaleCoinTransactionCreate}
          show={TaleCoinTransactionShow}
        />
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="Writer"
          list={WriterList}
          edit={WriterEdit}
          create={WriterCreate}
          show={WriterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
