import React, {FC} from 'react';
import Form from "./Form";
import Result from "./Result";

interface MainPanelProps {
}

const MainPanel: FC<MainPanelProps> = () => {

    // historyChangeHandler(response.data.name)

    return (
        <div className="mainPanel">
            <Form />
            <Result/>
        </div>
    );
};

export default MainPanel;
