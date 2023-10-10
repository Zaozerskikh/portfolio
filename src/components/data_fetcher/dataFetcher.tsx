import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setProjectArr} from "../../redux/projects_reducer/ProjectReducer";
import {MockProjectArr} from "../../mock_data/MockProjectArr";

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // mock data
    setTimeout(() => {
      dispatch(setProjectArr(MockProjectArr))
    }, 1000)
  }, []);

  return(<></>)
}

export default DataFetcher
