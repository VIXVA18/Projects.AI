import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { ExtractionTaskList } from "./extractionTask/ExtractionTaskList";
import { ExtractionTaskCreate } from "./extractionTask/ExtractionTaskCreate";
import { ExtractionTaskEdit } from "./extractionTask/ExtractionTaskEdit";
import { ExtractionTaskShow } from "./extractionTask/ExtractionTaskShow";
import { ExtractedDataList } from "./extractedData/ExtractedDataList";
import { ExtractedDataCreate } from "./extractedData/ExtractedDataCreate";
import { ExtractedDataEdit } from "./extractedData/ExtractedDataEdit";
import { ExtractedDataShow } from "./extractedData/ExtractedDataShow";
import { UserInteractionList } from "./userInteraction/UserInteractionList";
import { UserInteractionCreate } from "./userInteraction/UserInteractionCreate";
import { UserInteractionEdit } from "./userInteraction/UserInteractionEdit";
import { UserInteractionShow } from "./userInteraction/UserInteractionShow";
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
        title={"DocumentProcessorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="ExtractionTask"
          list={ExtractionTaskList}
          edit={ExtractionTaskEdit}
          create={ExtractionTaskCreate}
          show={ExtractionTaskShow}
        />
        <Resource
          name="ExtractedData"
          list={ExtractedDataList}
          edit={ExtractedDataEdit}
          create={ExtractedDataCreate}
          show={ExtractedDataShow}
        />
        <Resource
          name="UserInteraction"
          list={UserInteractionList}
          edit={UserInteractionEdit}
          create={UserInteractionCreate}
          show={UserInteractionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
