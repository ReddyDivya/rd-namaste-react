import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";


global.fetch = jest.fn(() => 
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA_NAME)
    })
);

