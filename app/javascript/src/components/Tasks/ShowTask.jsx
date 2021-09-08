import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import tasksApi from "apis/tasks";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

const ShowTask = () => {
  const { slug } = useParams();
  const [taskDetails, setTaskDetails] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  let history = useHistory();

  const updateTask = () => {
    history.push(`/tasks/${taskDetails.slug}/edit`);
  };

  const fetchTaskDetails = async () => {
    try {
      const response = await tasksApi.show(slug);
      setTaskDetails(response.data.task);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <h1 className="pb-3 pl-3 mt-3 mb-3 text-lg leading-5 text-bb-gray border-b border-bb-gray">
        <span>Task Title : </span> {taskDetails?.title}
      </h1>
      <div className="bg-bb-env px-2 mt-2 mb-4 rounded">
        <i
          className="text-2xl text-center transition cursor-pointer duration-300ease-in-out ri-edit-line hover:text-bb-yellow"
          onClick={updateTask}
        ></i>
      </div>
    </Container>
  );
};

export default ShowTask;
