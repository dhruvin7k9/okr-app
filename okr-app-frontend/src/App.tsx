import {useContext, useEffect} from "react";
import { ObjectiveType } from "./types/okr-types";
import CreateOKRForm from "./components/CreateOKRForm";
import ShowOKRsForm from "./components/ShowOKRsForm.tsx";
import { getOKRObjectives } from "./data/okr-data";
import { DotLoader } from "react-spinners";
import {OKRObjectivesProviderContext} from "./provider/OKRObjectivesProvider.tsx";

function App() {
  const {objectives, setObjectives} = useContext(OKRObjectivesProviderContext);
  const isLoading = objectives === null;

  useEffect(() => {
    (async () => {
      const resolvedPromiseData: ObjectiveType[] = await getOKRObjectives();
      setObjectives(resolvedPromiseData);
    })();
  }, []);

  return (

        <div className="flex mt-8">
          <CreateOKRForm/>
          {isLoading ? (
              <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8 flex items-center justify-center">
                <div className="space-y-4">
                  <DotLoader/>
                  <p>Loading ...</p>
                </div>
              </div>
          ) : (
              <ShowOKRsForm/>
          )}
        </div>
  );
}

export default App;
